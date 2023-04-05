const initialState = {
  todos: [],
  loading: false,
  error: null
};
// before firebase

// export const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todos: [
//           {
//             id: Date.now(),
//             title: action.payload.title,
//             completed: false,
//           },
//           ...state.todos,
//         ],
//       };
//     case "TOGGLE_TODO":
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case "DELETE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id != action.payload.id),
//       };
//     case "FETCH_TODOS_REQUEST":
//         return { ...state,  loading: true };
//     case "FETCH_TODOS_SUCCESS":
//         return { ...state, todos: action.payload.todos, loading: false };
//     default:
//       return state;
//   }
// };

// after firebase

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO_REQUEST':
      case 'TOGGLE_TODO_REQUEST':
      case 'FETCH_TODOS_REQUEST':
      case 'DELETE_TODO_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        }
      case 'ADD_TODO_SUCCESS':
        return {
          ...state,
          todos: [
            ...state.todos,
            // { title: action.payload.title, completed: false },
          ],
          loading: false,
          error: null
        }
      case 'TOGGLE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: action.payload.completed } : todo),
          loading: false,
          error: null
        }
      case 'DELETE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
          loading: false,
          error: null
        }
      case 'FETCH_TODOS_SUCCESS':
        return {
          ...state,
          todos: action.payload.todos,
          loading:false,
          error:null
        }
      case 'ADD_TODO_FAILURE':
      case 'TOGGLE_TODO_FAILURE':
      case 'DELETE_TODO_FAILURE':
      case 'FETCH_TODO_FAILURE':
        return {
          ...state,
          loading:false,
          error: action.payload.error
        }
      default:
        return state;
    }
}