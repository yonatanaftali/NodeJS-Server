# ToDoList-Server
NodeJS Express backend supporting basic ToDo list manipulations, including:
|Action|Type|API
|--|--|--|
|View items  | GET |http://localhost:3000/todos/|
|View only pending items  | GET |http://localhost:3000/todos?showPending=1|
|Complete item  | PUT |http://localhost:3000/todos/:id/complete|
|Add item  | POST |http://localhost:3000/todo requires the JSON body: {"name":  _name}|

[Postman collection of these API calls](https://www.getpostman.com/collections/3e0d6d0f2e636aac5f68)
