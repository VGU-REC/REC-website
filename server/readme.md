# set up

Install postgresql and psql terminal

open terminal and type like below
host: "localhost",
port: 5432,
username: "postgres",
password: "1234",
Create database recweb: -> `Create DATABASE recweb;`

# installation

install package: npm ci
start -> npm run dev

server on http://localhost:3001/

# API ENDPOINT Available

http://localhost:3001/api/achievement

http://localhost:3001/api/blog

http://localhost:3001/api/work-shop

http://localhost:3001/api/rec-event

# CRUD

[GET] /api/something/:id ({ id })

for example: http://localhost:3001/api/achievement/tho-dep-trai

something is [user, achievement, work-shop, rec-event, blog]

## for example: ** /user/:id **

--> If successfully, return statuscode 200 and a specific user

--> If not match ID, return statuscode 404 with message `ID ${id} is not exist`

[POST] /api/something/ `(object: Something)`
something is [user, achievement, work-shop, rec-event, blog]

the object has **match all the properties** in _server/src/types_ folder

**NOTE: Don't need to provide the id** , the id will be automatically generated

**ANOTHER NOTE: the Datewritten must past as timestamp**, for-example `dateWritten = new Date()` this will return the current timestamp

--> If successfully, return statuscode 201 with message "Create successfully"

--> If not enough object properties , return statuscode 404 with message "Object not have enough property"

--> If object properties not have correct type, return statuscode 404 with message "Object properties are not in correct type"

--> If object already exists, return statuscode 404 with message "Object already exists"

[PUT] /api/something/:id ({ id })

something is [user, achievement, work-shop, rec-event, blog]

the object has **match one of the properties** in _server/src/types_ folder

--> If successfully, return statuscode 200 with message "Updated successfully"

--> If not match ID, return statuscode 404 with message `ID ${id} is not exist`

--> If not in correct specific object types, return statuscode 404 with message "bla bla bla"

[DELETE] /api/something/:id ({ id })

something is [user, achievement, work-shop, rec-event, blog]

--> If successfully, return statuscode 200 with message "Delete successfully"

--> If not match ID, return statuscode 404 with message `ID ${id} is not exist`

/something/?page?limit
/something/items

# PAGINATION

Get **total** number of items:

[GET] /api/something/items

Get number of items **per page**":

[GET] /api/something/?page=x&limit=y

This means that get _y_ items from page _x_
