select * from language;

select film.title, film.description, language.name
from language
inner join film
on language.language_id=film.language_id;


--I check if all the movies are in English as the result above shows movies just in English
--select language_id from film
--where language_id=6


select film.title, film.description, language.name
from language
left join film
on language.language_id=film.language_id;

--CREATE TABLE new_film (
--	id serial primary key,
--	name varchar(50)
--);

--INSERT INTO new_film (name)
--VALUES
--('Shrek'),
--('The Bikeriders'),
--('Hit Man'),
--('Thelma'),
--('IF'),
--('Trigger Warning'),
--('Kinds of Kindness')

--CREATE TABLE customer_review (
--	review_id serial primary key not null,
--	film_id int,
--	language_id int,
--	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--	FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
--	title varchar(50),
--	score integer,
--	CONSTRAINT score_check CHECK (score >= 1 and score<=10),
--	review_next TEXT,
--	last_update timestamp DEFAULT CURRENT_TIMESTAMP
--);

--insert into customer_review(film_id,review_next)
--VALUES
--((select id from new_film where name ilike '%Shrek%'),('Good movie')),
--((select id from new_film where name ilike '%Hit Man%'),('I like the begginning of this movie'))

--insert into customer_review(film_id, language_id, title, score,review_next)
--VALUES
--((select id from new_film where name ilike '%IF%'),2,'Enjoyed it',8, 'Good movie')

--UPDATE film
--SET language_id=2
--WHERE film_id = 1;

--UPDATE film
--SET language_id=4
--WHERE film_id = 2;

--2 : adress_id and customer_id / it also affects rental and address and if 
--we want to insert some adress_id and customer_id

--DROP TABLE customer_review

--select count(*) from rental where return_date is null 

--SELECT film.title, film.replacement_cost
--FROM rental
--JOIN inventory  ON rental.inventory_id = inventory.inventory_id
--JOIN film  ON inventory.film_id = film.film_id
--WHERE rental.return_date IS NULL
--ORDER BY film.replacement_cost DESC LIMIT 30;

select from film where 




