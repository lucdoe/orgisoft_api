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

### 3. Design/ Structure

As being mentioned the application backend is a monilthic RESTful HTTP API.
It has three major endpoints:

-  /members
-  /inventorys
-  /finances

Each endpoint metioned on /GET returns all available data with an offset and limit looking like this e.g.: /members?offset=0&limit=30 starting form the first found member to the 30iest member in this example.
On top of that the order can be modified either by adding: sort=desc (descending) or sort=asc (ascending).
If a specific member, inventoryitem or finance entry is needed an ID is appended to the query like this: /members/14, which returns the member with the ID 14 with all its details available on that member. All the returened attributes can also be accessed individually by appending: /members/14/{attribute}.
An HTTP Status Code 200, the location and the asked for data is returned as JSON.
In case an admin needs to see all specific attributes for example all inventory groups the API also offres a view of those e.g.: /inventorys/groups. This works for all endpoints as well. This covers the basic /GET operations more detailed information can be found in the docs [here](https://web.postman.co/collections/10673596-8cdcde33-b99b-47b3-91fa-c9ac96c4aa5c?version=latest&workspace=fc1c0f01-1a46-4529-8734-f38a5d0c7e8d).

The application atm accepts JSON as a request body for creating (/POST) or updating (/PUT or /PATCH) entries, more detailed information can be found in the docs [here](https://web.postman.co/collections/10673596-8cdcde33-b99b-47b3-91fa-c9ac96c4aa5c?version=latest&workspace=fc1c0f01-1a46-4529-8734-f38a5d0c7e8d) regarding the format of the expected body. Images are served as a URL/ string over JSON and then parsed to the frontend.
If a resource should be deleted the endpoint and the entry id should be mentioned with a /DELETE request e.g.: /members/14 would delete member 14 if existent.
