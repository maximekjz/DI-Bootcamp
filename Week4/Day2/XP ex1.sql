--1.
select product from items order by price asc;

--2.
select product from items where price >=80 order by price desc; 

--3.
select name, family_name from customers order by name asc limit 3;

--4. 
select family_name from customers order by family_name desc;