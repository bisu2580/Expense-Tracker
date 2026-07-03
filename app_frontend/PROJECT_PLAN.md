## Project Overview
 # Project name- Expense Tracker
 * A personal finance management application that helps users track expenses, manage budgets, monitor savings goals, and analyze spending habits.
 # Tech Stack
 * React
 * Next.js
 * MongoDB
 * Tailwind CSS
 * Shadcn UI
 * Next Auth
## Problem Statement
Many people struggle to understand where their money goes every month. Existing solutions are often complex or filled with unnecessary features.

This application aims to provide a simple and user-friendly expense tracking experience.

## Project Structure
```
src/
│
├── app/
│   ├── dashboard/
│   ├── transactions/
│   ├── goals/
│   ├── reports/
│   ├── login/
│   ├── register/
│   └── api/
│
├── components/
│   ├── dashboard/
│   ├── transactions/
│   ├── goals/
│   ├── charts/
│   └── ui/
│
├── models/
│   ├── User.ts
│   ├── Transaction.ts
│   ├── Goal.ts
│   ├── GoalContribution.ts
│   └── Category.ts
│
├── lib/
│   ├── mongodb.ts
│   ├── auth.ts
│   └── validations/
│
├── actions/
│   ├── transaction-actions.ts
│   ├── goal-actions.ts
│   └── dashboard-actions.ts
│
├── redux/
│
├── store.ts
│
├── slices/
│   ├── authSlice.ts
│   ├── transactionSlice.ts
│   ├── goalSlice.ts
│   └── dashboardSlice.ts
│
├── hooks/
│
├── types/
│
└── constants/

```
## MVP Timeline
### Phase 1
* Project Setup(done)
* MongoDB Atlas (done)
* Mongoose Connection (done)
* NextAuth Setup
* Redux Setup
### Phase 2
* Authentication
* Protected Routes
### Phase 3
* Transaction CRUD
### Phase 4
* Dashboard
* Income
* Expense
* Savings
* Recent Transactions
### Phase 5
* Goals Module
* Create Goal
* Add Contributions
* Progress Tracking
### Phase 6
* Reports
* Pie Chart
* Monthly Trend
## Features to Add Later (v2)
* Budget Tracking
* Financial Health Score
* Recurring Transactions
* Notifications
* CSV Import
* Receipt OCR
* AI Spending Insights
* Investment Tracking
* Multi-Currency Support