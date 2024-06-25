--CREATE TABLE Book (
--  book_id SERIAL PRIMARY KEY, 
--  title varchar(50) NOT NULL,
--  author varchar(50) NOT NULL
--);

--INSERT INTO Book (title, author)
--VALUES
--('Alice In Wonderland', 'Lewis Carroll'),
--('Harry Potter', 'J.K Rowling'),
--('To kill a mockingbird', 'Harper Lee');

--CREATE TABLE Student (
--	student_id SERIAL PRIMARY KEY, 
--	name varchar(50) NOT NULL UNIQUE,
--	age integer 
--);


--ALTER TABLE Student ADD CONSTRAINT age_check CHECK (age<=15);

-- or : 

--CREATE TABLE Student (
--	student_id SERIAL PRIMARY KEY, 
--	name varchar(50) NOT NULL UNIQUE,
--	age integer 
--	CONSTRAINT age_check CHECK (age<=15)
--);

--INSERT INTO Student(name, age)
--VALUES
--('John', 12),
--('Lera', 11),
--('Patrick', 10),
--('Bob', 14);

--CREATE TABLE Library (
--	book_fk_id SERIAL,
--	student_fk_id SERIAL,
--	borrowed_date date,
--	foreign key (book_fk_id)  references Book(book_id) ON DELETE CASCADE	 ON UPDATE CASCADE,
--	foreign key (student_fk_id) references Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--	Primary key (book_fk_id, student_fk_id)
--);

--INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
--VALUES
--((select book_id from Book where title ilike '%Alice in Wonderland%'), (select student_id from Student where name ilike '%John%'), '2022-02-15'),
--((select book_id from Book where title ilike '%Harry Potter%'), (select student_id from Student where name ilike '%Bob%'), '2021-03-03'),
--((select book_id from Book where title ilike '%Alice in Wonderland%'), (select student_id from Student where name ilike '%Lera%'), '2021-05-23'),
--((select book_id from Book where title ilike '%To kill a mockingbird%'), (select student_id from Student where name ilike '%Bob%'), '2021-08-12');


select * from Library;

select name, title
from Library
join Book 
on book_id=book_fk_id 
join Student
on student_id=student_fk_id;

select avg(age)
from Student
inner join Library
on student_id=student_fk_id
INNER JOIN Book 
ON Library.book_fk_id = Book.book_id
WHERE Book.title ILIKE '%Alice in Wonderland%';

-- or :
--select avg(age)
--from Student
--inner join Library
--on student_id=student_fk_id
--where Library.book_fk_id=1

--delete from Student where name ='John'

-- John and his book 'Alice in Wonderland' are no longer in Library


