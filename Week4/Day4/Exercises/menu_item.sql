CREATE TABLE Menu-items (
	item_id serial primary key,
	item_name varchar(30) not null,
	item_price smallint default 0
);

--INSERT INTO new_film (name)
--VALUES
--('Shrek'),
--('The Bikeriders'),
--('Hit Man'),
--('Thelma'),
--('IF'),
--('Trigger Warning'),
--('Kinds of Kindness')