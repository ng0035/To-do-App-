# To-do-App-
This is a basic to-do app built while studying React concepts. Building the app in React requires the complete understanding of fundamentals which are explained below. The course during which I built this app is Scrimba's Introduction to React - https://scrimba.com/playlist/p7P5Hd and it is an awesome course to start learning the basics with simultaneous application through to-do-app project.

The prerequisites for building the app are as follows: 
-> Vanilla Javascript
-> ES6 syntax
-> React DOM fundamentals 

To run the app follow these steps:
1. Clone/download the zip file.
2. You should have npm installed. Run npm install.
3. Run npm start.
Your development server starts.

To build this to-do app follow these steps:
1. Create a new React application by running the following command in the current directory opened in the terminal. npx create-react-app to-do-app. Then, navigate to the directory cd to-do-app. Run npm start to check if the app is working.
2. Clear all the pre-defined React code in the <App/> component in the App.js file.
3. In the <App/> component, render the to-do list using 3/4 checkboxes using the <input type = "checkbox"/><p>name</p></input>.
4. Now, create <todoItem/> by moving the checkbox element into a reusable component <TodoItem/>. Now, render the same <TodoItem/> 4 times.
5. Now pass the object/props to the <TodoItem/> component.
6. Add state 
this.state = {
  todos: []
  }
 }
 render(){
  const todoItems = this.state.todos.map(
    item=> <TodoItem key = {item.id} item = {item}/>
}
7.<input type = "checkbox" checked = {props.items.completed} onChange = {()=> console.log("changed") }/>
8. handleChange(id){
//update state so that the item with the given id flips 'completed' from false to true (or vice versa) and remember not to modify prevState directly, but instead to return a new version of state with the change you want.
this.setState(prevState => {
  const updatedTodos = prevState.todos.map(todo => {
                                           if(todo.id === id){
                                           todo.completed = !todo.completed
                                           }
                                           return todo
                                           })
  return {
         todos : updatedTodos
         }
         
 9. Styling the completed todos by conditionally changing the style.
