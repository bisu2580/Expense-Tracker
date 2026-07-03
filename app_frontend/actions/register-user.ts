"use server"
import User from "@/models/User"
import bcryptjs from "bcryptjs"
export async function registerUser(data:{
    name:string,
    email:string,
    password:string,
}){
  const {name,email,password}=data
  const existing=await User.findOne({email:email})
  if(existing){
    return {message:"User already exists"}
  }
  const hashedPassword=await bcryptjs.hash(password,10)
  const user=await User.create({
    name,
    email,
    password:hashedPassword
  })
  return {message:"User created successfully"}
}