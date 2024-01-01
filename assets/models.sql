// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table Client {
  clientId varchar [primary key]
  clientName integer
  clientLocation varchar
  clientPhoneNo varchar
} 

Table menu {
  menuId varchar [primary key]
  clientId integer  
  menuTitle varchar
  created_at timestamp  
}

Table item {
  itemId integer [primary key]
  menuId varchar
  category varchar
  itemName varchar
  itemDes varchar
  itemPrice double
  itemImage varchar
  itemOpt varchar
  tags varchar
  availability bool
}
 
Table Table {
  tableId int [primary key]
  tableNumber number
  pin number
  partySize number
  legal boolean
}

Table Order {
  OrderId int [primary key]
  tableId int
  items JSON 
  totalPrice double
  paid bool 
}