"use server"

import mongoose from "mongoose";

const MONGODB_URI = (process.env.MONGO_URI || process.env.MONGO_URL) as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local",
  );
}

// Global cached connection context
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

if (!globalThis.mongooseCache) {
  globalThis.mongooseCache = { conn: null, promise: null };
}

const cached = globalThis.mongooseCache;

export async function connectToMongo() {
  // 1. Fast path: Check Mongoose's own internal connection state first
  if (mongoose.connection.readyState === 1) {
    cached.conn = mongoose;
    return mongoose;
  }

  // 2. Cached path: If we have cached connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // 3. Connection path: If no connection promise exists, start it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // Optimizes pool size to prevent exhausting DB connections on HMR reloads
      serverSelectionTimeoutMS: 5000, // Fail fast if MongoDB is unreachable (5 seconds instead of 30)
      socketTimeoutMS: 45000, // Close inactive sockets to prevent memory/connection leaks
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export async function testDbConnection() {
  try {
    await connectToMongo()
    return { success: true, message: "Successfully connected to MongoDB!" }
  } catch (error: any) {
    console.error("Database connection error:", error)
    return { success: false, error: error.message || "Failed to connect to database" }
  }
}

export default connectToMongo;

if (
  process.argv[1] &&
  (process.argv[1].endsWith("mongodb.ts") ||
    process.argv[1].endsWith("mongodb.js"))
) {
  connectToMongo()
    .then(() => {
      console.log("Test connection successful!");
      mongoose.disconnect().then(() => {
        console.log("Disconnected from MongoDB");
      });
    })
    .catch((err) => {
      console.error("Test connection failed:", err);
    });
}
