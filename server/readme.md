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

# api endpoint
http://localhost:3001/a

# CRUD 
[GET] /something/:id ({ id })

something is [user, achievement, work-shop, rec-event, blog]

## for example:     **  /user/:id  **

--> If successfully, return statuscode 200 and a specific user

-->  If not match ID, return statuscode 404 with message `ID ${id} is not exist`

[POST] /something/     `(object: Something)`
something is [user, achievement, work-shop, rec-event, blog]

    
the object has **match all the properties** in *server/src/types* folder
**NOTE: Don't need to provide the id** , the id will be automatically generated

--> If successfully, return statuscode 201 with message "Create successfully"

--> If not enough object properties , return statuscode 404 with message "Object not have enough property"

--> If object properties not have correct type, return statuscode 404 with message "Object properties are not in correct type"

--> If object already exists, return statuscode 404 with message "Object already exists"

[PUT] /something/:id ({ id })

something is [user, achievement, work-shop, rec-event, blog]

the object has **match one of the properties** in *server/src/types* folder

--> If successfully, return statuscode 200 with message "Updated successfully"

--> If not match ID, return statuscode 404 with message `ID ${id} is not exist`

--> If not in correct specific object types, return statuscode 404 with message "bla bla bla"


[DELETE] /something/:id ({ id })

something is [user, achievement, work-shop, rec-event, blog]

--> If successfully, return statuscode 200 with message "Delete successfully"

--> If not match ID, return statuscode 404 with message `ID ${id} is not exist`
