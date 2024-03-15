# motti

## What?

Motti empowers businesses with the ability to conveniently manage their menus and online payments through a unified system.

## Tech Stack

Frontend:

Backend: Golang

Mobile: Flutter (Nice to have)

## Services

## Use Case

Family goes to place -> staff brings family to table and provides a 4 pin code for that table -> family sc

## Systems

Open Party -> Keeps track of all open party by the last 4 phone number

```OpenParty Model
openPartyId string dwaduaw123123
pin number
size number
tableNumber number
allowedToDrink boolean
```

```Menu Model
foodId
category string
title string
image string
price number
tags string
desc string
#cal number
qty number
availability boolean
comment string
```

```Order Model
tableNumber
items [foodId]
totalPrice
paid boolean
```

<!-- Services Need -->

## Transactions -> Ordering,payment

## Client -> update menu

## Authentication -> clients login/create stuff etc

<!-- 31/1/2024 -->

- Menu layout
- owner CRUD menu items

### Good to know
1. `npx prisma generate` after pushing/editing prisma schema

## How to run app
1. npm i
2. Run postgres db with `docker run --name postgresdb -e POSTGRES_PASSWORD=xuexi -e POSTGRES_USER=xuexi -d -p 5432:5432 postgres`
3. Populate env vars with db creds
4. Add fields to databse with `npx prisma db push`