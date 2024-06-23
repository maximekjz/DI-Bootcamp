
CREATE TABLE items (
  product varchar(50),
  price integer
);

INSERT INTO items values ('Small Desk', 100);
INSERT INTO items values ('Small Desk', 100);
INSERT INTO items values ('Large Desk', 300);
INSERT INTO items values ('Fan', 80);



CREATE TABLE customers (
  name varchar(50),
  family_name varchar(50)
);

INSERT into customers values ('Greg', 'Jones');
INSERT into customers values ('Sandra', 'Jones');
INSERT into customers values ('Scott', 'Scott');
INSERT into customers values ('Trevor', 'Green');
INSERT into customers values ('Melanie', 'Johnson');

SELECT * FROM items;

SELECT * FROM items where price>80;

SELECT * FROM items where price < 300;

SELECT * FROM customers where family_name='Smith';

SELECT * FROM customers where family_name='Jones';

SELECT * FROM customers where name!='Scott';


