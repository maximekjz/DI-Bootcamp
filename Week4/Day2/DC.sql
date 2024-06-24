INSERT INTO FirstTab (id, name)
VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;


INSERT INTO SecondTab (id)
VALUES
(5),
(NULL);

SELECT * FROM SecondTab;

--Q1
--0: cause IS NOT NULL is an operator returning T OR F
SELECT COUNT (*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

--Q2
-- 3 : 6 7, and NULL cause there are different values than 5 in table 1
SELECT COUNT(*) from FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--Q3
--0 : 5 and NULL are both in table1 and table2 but 6 and 7 return 0 with NULL (like in Q1)
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--Q4
--  3 : cause in second table not null = 5 and not 5 in table1 : 6,7,NULL