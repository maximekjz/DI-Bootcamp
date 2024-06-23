
-- create
CREATE TABLE students (
  id serial primary key,
  first_name varchar(50),
  last_name varchar(50),
  birth_date DATE
);

INSERT INTO students (first_name, last_name, birth_date)
VALUES 
('Marc', 'Benichou', '1998-02-11'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03'),
('Maxime', 'Kajzer', '1996-06-17');


SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students where id=2;
SELECT first_name, last_name FROM students where last_name='Benichou' or first_name='Marc';
SELECT first_name, last_name FROM students where first_name ~ '[a]';
SELECT first_name, last_name FROM students where first_name ilike 'a%';
SELECT first_name, last_name FROM students where first_name ilike '%a';
SELECT first_name, last_name FROM students where position('a' in substring(first_name FROM 2))>0;
SELECT first_name, last_name FROM students where id=1 or id=3;
SELECT id, first_name, last_name, birth_date FROM students where birth_date>='1/01/2000';


