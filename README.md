# ToDoList-Server
NodeJS Express backend supporting basic ToDo list manipulations, including:
|Action|Type|API
|--|--|--|
|View items  | GET |http://localhost:3000/todos/|
|View only pending items  | GET |http://localhost:3000/todos?showPending=1|
|Complete item  | PUT |http://localhost:3000/todos/:id/complete|
|Add item  | POST |http://localhost:3000/todo requires the JSON body: {"name":  _name}|
|Delete item  | DELETE |http://localhost:3000/todo requires the JSON body: {"name":  _name}|

Using Cypress for functional and some API testing.

[Postman collection of these API calls](https://www.getpostman.com/collections/3e0d6d0f2e636aac5f68)

[DNS Name](http://alb-naftayo-todolist-1211355611.us-east-2.elb.amazonaws.com)

[Public IP](http://3.128.197.73:3000)
