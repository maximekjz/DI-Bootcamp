select * from customer;
select first_name || ' ' || last_name AS full_name FROM customer;
select distinct create_date from customer;
select * from customer order by first_name desc;
select address, phone from address where district = 'Texas';
select * from film where film_id=15 or film_id=150;
--select * from film;
select film_id, title, description, length, rental_rate from film where title='Matrix';
select film_id, title, description, length, rental_rate from film where title ilike 'ma%';
select film_id, title, description, length, rental_rate, replacement_cost from film order by replacement_cost desc limit 10;
with ranked_films as
	(select film_id, title, description, length, rental_rate, replacement_cost, row_number() over (order by replacement_cost desc) as rank
	from film)
select film_id, title, description, length, rental_rate, replacement_cost from ranked_films where rank between 11 and 20;

select customer.first_name, customer.last_name, payment.amount, payment.payment_date
	from customer
	INNER JOIN payment
	ON customer.customer_id = payment.customer_id order by customer.customer_id;
select * from inventory;

select film.title
	from film 
	left join inventory
	on film.film_id = inventory.film_id where inventory.film_id is null;

