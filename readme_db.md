# Welcome to the README for the MySQL DB of orgi.org

The overall goal of Orgisoft aims at making the organisation of clubs/ organisations (Vereine, german word) easier and more accessible.
Member-, inventory- or finance managment can be performed using the software until now. The finance part for now is very basic covering only incomes and expenses.
The idea for this was initiated by a good friend of mine and me, because we are both members of a big club and saw the need for a better, more accesible and easier organisation.

## Table of content:

-  Who is using the Database
-  General Information
-  Sources

## Who is using the DB

The database (further described as: db) is the main store for the application data of orgi.org. A REST API consumes and works out the buisness logic. The db at the moment is only maintained by me and there is no team around me (yet). People who organise organisations/ clubs will be the end user but wont come into contact with the db itself, but rather with the beaufiful frontend client which communicates with the server/ REST API.

## General Information

Under the hood the db runs the MySQL Community Edition (at the moment only locally) and is consumed by the [TypeORM](link to type orm) ORM on the server. While working on the db/ developing the application I used the RDMS MySQL Workbench to execute queries and so on.
The Entity Relationship Model (ERM/ Schema) of the db can be found [here](link to schema, github). 19 tables represent the core data of the application in combination with some Views to prevent writing complex queries over and over again, plus several stored procedures for saving time writing queries.

## Sources:

These are some of the sources I used while working on my project for refrence or help. Since I am not new to the overall topic of relational databases I was not able to recollect all the resources I used to learn the topic. Below are the resources I actively used in the last few weeks/ months to prepare my work.

https://dev.mysql.com/doc/refman/8.0/en/

https://www.mysqltutorial.org/

https://www.tutorialspoint.com/mysql/index.htm

Relational Databases (part 1 to 6), Brian Will, on https://www.youtube.com

https://en.wikipedia.org/wiki/Relational_database

https://www.postgresql.org/docs/12/index.html
