# TybaUser

Its a tiny project about users.

## Technologies
Project is created with:
* node v14.15
* express
* jwt
* sequelize (ORM)
* mysql

## Setup
To run this project, install it locally using npm:


```bash
${workspaceFolder} npm i
```

## Usage

 In order to run locally you must run:

```bash
${workspaceFolder} node app.js
```


## Project Structure

The project is an MVC with some extra layers, like a service and a repository layer.


### routes

* defined endpoints of the app

### repositories

* Where DBs queries and connections happen

### models

* Database table modeling

### services

* Where business logic happen

### controllers

* Receive callback from route and call to a service, also handle errors and responses.
