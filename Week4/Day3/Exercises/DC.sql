--CREATE TABLE Customer (
  --id serial primary key,
  --first_name varchar(50),
  --last_name varchar(50) not null
--);


--CREATE TABLE Customer_profile (
  --id serial primary key,
  --isLoggedIn boolean DEFAULT false,
  --customer_id integer references Customer(id)
--);

--INSERT INTO Customer (first_name, last_name)
--VALUES
--('John','Doe'),
--('Jerome','Lalu'),
--('Lea','Rive');

--INSERT INTO Customer_profile (isLoggedIn, customer_id)
--VALUES
--(True, (select id from Customer where first_name ilike '%John%' limit 1)),
--(DEFAULT, (select id from Customer where first_name ilike '%Jerome%' limit 1));

select first_name 
from Customer
join Customer_profile 
on Customer.id = Customer_profile.id
where isLoggedIn = True limit 1;

select Customer.first_name, Customer_profile.isLoggedIn
from Customer, Customer_profile;

select count(isLoggedIn = False) from Customer_profile;



