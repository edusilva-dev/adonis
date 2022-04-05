# AdonisJs

> Estudo sobre o funcionamento do framework

---

## Commands

#### Ace commands

##### Make

> Creates a file into specified directory that cames after ":" on command

- node ace make:controller controllerName (without need to specify "Controller" in the name, ex: node ace make:controller Home)

  > Will be created a file into controllers folder

- node ace make:view viewName

- node ace make:migration tableName
  > Will be created a migration into the migrations folder.

###### Migration

- node ace migration:run

  > Will run all migrations that you have

- node ace migration:status
  > Will show the status about all migrations that you have, if sucess, pending or
- node ace migration:rollback
  > Will rollback your last migration

---

## Adonis Libs

#### Lucid 
> How to install and configure
> - To install run: npm i @adonijs/lucid
> - To configure run: node ace configure @adonisjs/lucid

#### Auth
> How to install and configure
> - To install run: npm i @adonijs/auth
> - To configure run: node ace configure @adonisjs/auth

---

#### Request Functions

- language: request.language()
- method: request.method()
- ip: request.ip()
- ips: request.ips()
- qs: request.qs()
- url: request.url()
- completeUrl: request.completeUrl()
- all: request.all()
- only: request.only(["nome"])
- except: request.except(["nome"])
