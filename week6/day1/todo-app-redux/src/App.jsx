import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from "./actions/actions";
import styled from "styled-components";
import './App.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  h1, li, ul{
    text-align:center;
    width: 100%;
    padding: 24px 24px 0 24px;
  }
  form{
    width: 100%;
    position:relative;
    margin: 24px auto;
    text-align:center;
    input {
      width: 80%;
      height: 40px;
      outline:none;
      border: none;
      border-radius: 4px;
      padding: 0 12px;
    }
    button{
      height: 24px;
      position: absolute;
      top:0;
      bottom: 0;
      margin: auto 0;
      right: 11%;
      padding: 0 12px;
      border: none;
      border-radius: 4px;
    }
  }
  ul{
    list-style:none;
    li{
      display: flex;
      gap: 12px;
      span{
        margin-right: auto;
      }
      button{
        padding: 0 6px;
      }
    }
  }
`;

function App() {
  const loading = useSelector((state) => state.loading);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.title.value;
    dispatch(addTodo(text));
    event.target.reset();
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleToggle = (id, completed) => {
    dispatch(toggleTodo(id, completed));
  }

  return (
    <Wrapper>
      <h1>Todo App using Redux</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" name='title' required />
            <button>Add Todo</button>
      </form>
      {
        loading ? <p>loading...</p> : 

        <ul>
          {todos.map((todo, index) => 
          <li key={index}>
            <span style={{ textDecoration: todo.completed && "line-through"}}>{todo.title}</span>
            <button onClick={() => handleToggle(todo.id, !todo.completed)}>Complete</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
          )}
        </ul>
      }
    </Wrapper>
  )
}

export default App
