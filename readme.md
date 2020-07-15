# Welcome to orgisoft

The overall goal of Orgisoft aims at making the organisation of clubs/ organisations (Vereine, german word) easier and more accessible.
Member-, inventory- or finance managment can be performed using the software until now. The finance part for now is very basic covering only incomes and expenses.
The idea for this was initiated by a good friend of mine and me, because we are both members of a big club and saw the need for a better, more accesible and easier organisation.

## Contents:

    - Architecture
    - Dependency's
    - Design/ Structure

### 1. Architecture

The backend/ server is a monolithic REST based HTTP API running nodeJS in TypeScript.
Two diffrent databases are used:

1. The main DB: MySQL, Relational DB (database for all the aplication data)
2. Auth DB: MongoDB, NoSQL DB (where just user related data is saved).
   Data handling/ communication to the DB on application layer is implemented using the TypeORM which works very well with TypeScript.
   For now the API is not deployed and only running locally for development.

For the frontend a Javascript libary (React) will be/ is used for now, making frontend development much easier.
The decision for a seperate frontend server should save resources for the backend server, so it is also a decision against server-side rendering and the MVC pattern. Seperation of concerns between backend and frontend was and will be the way to go now and in the future.

### 2. Dependency's

-  bcrypt (en- and de-crypting passwords/ data)
-  mongoose (data handling/ communication with auth DB)
-  redis (caching)
-  body-parser (body parsing middlleware)
-  cors (Cross-Origin Resource Sharing between backend and frontend server)
-  dotenv (loads environment variables)
-  express (nodejs web framework)
-  helmet (security, sets certain HTTP headers)
-  jsonwebtoken (implementation of JSON Web Token)
-  mysql (database dependency)
-  typeorm (Object Realtional Mapper for SQL Db (MySql))
-  reflect-metadata (dependecy for typeorm)

The full dependency graph can be found [here](https://github.com/lucdoe/orgisoft/network/dependencies).
For development purposes logging was used to get a better understanding of what happened and what went wrong if there was an error.

### 3. Design/ Structure

As being mentioned the application backend is a monilthic RESTful HTTP API.
It has three major endpoints:

-  /members
-  /inventorys
-  /finances

Endpoints accept CRUD operations (POST, GET, PUT, DELETE) and return the specific HTTP Status code on succes or not, the location/ path/ url plus the data (if ask for) in JSON format. GET endpoints who return more than one item have some special filtering on top. Results can be accessed in asscending or descending order with an offset and limit (e.g. /members?skip=0&take=20&desc=1), but a detailed guide on the endpoints can be found in the API documentation attached.

The overall API has 84 possible endpoints to contact with all operations summed up.
