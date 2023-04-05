import 
  { 
    addTodo as addTodoToFirebase, 
    toggleTodo as toggleTodoToFirebase,
    deleteTodo as deleteTodoFromFirebase,
    fetchTodos as fetchTodosFromFirebase
  } from "../firebase";

// before firebase

// export const addTodo = (text) => ({ type: "ADD_TODO", payload: { title: text } });
// export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", payload: { id } });
// export const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: { id } });
// export const fetchTodos = () => async (dispatch) => {
//   dispatch({ type: "FETCH_TODOS_REQUEST" });
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const todos = await response.json();
//   console.log(todos);
//   dispatch({ type: "FETCH_TODOS_SUCCESS", payload: { todos } });
// };

// after firebase

export const addTodo = (title) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_REQUEST" })
  try {
    await addTodoToFirebase(title);
    dispatch({ type: "ADD_TODO_SUCCESS", payload: { title }});
  } catch (error) {
    dispatch({ type: "ADD_TODO_FAILURE", payload: { error }})
  }
}

export const toggleTodo = (id, completed) => async (dispatch) => {
  dispatch({ type: "TOGGLE_TODO_REQUEST" });
  try {
    await toggleTodoToFirebase(id, completed);
    dispatch({ type: "TOGGLE_TODO_SUCCESS", payload: { id, completed }});
  } catch (error) {
    dispatch({ type: "TOGGLE_TODO_FAILURE", payload: { error }})
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_TODO_REQUEST" });
  try {
    await deleteTodoFromFirebase(id);
    dispatch({ type: "DELETE_TODO_SUCCESS", payload: { id }});
  } catch (error) {
    dispatch({ type: "DELETE_TODO_FAILURE", payload: { error }})
  }
}

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODOS_REQUEST"});
  try {
    fetchTodosFromFirebase((todos) => {
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: { todos }});
    })
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", payload: { todos }});
  }
}