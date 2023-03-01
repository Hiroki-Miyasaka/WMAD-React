// 1.How would you describe the concept of "state"?

// In React, "state" refers to the data that is managed by a component and can change over time. State is typically used to represent the component's internal state, such as whether a button is clicked or whether a form input is filled out.
// State is an essential concept in React because it allows components to be dynamic and interactive. By managing state, components can respond to user input, update their own display, and interact with other components.
// React provides a setState() method that allows components to update their state, triggering a re-rendering of the component and its child components. The new state can be computed based on the previous state, allowing components to manage complex state transitions and interactions.
// It's important to note that state should only be used for data that is local to the component and not needed by other components. If a piece of data needs to be shared between multiple components, it should be lifted up to a common ancestor component and passed down as props.

// 2.When would you want to use props instead of state?

// Props and state are both used to manage data in React components, but they serve different purposes and have different characteristics. In general, you would want to use props instead of state when:
// You need to pass data down to child components: Props are used to pass data from a parent component to a child component. If a piece of data is needed by multiple child components, it can be passed down as a prop to each child component.
// The data is immutable: Props are immutable, meaning that they cannot be changed by the child component. If a piece of data is not going to change within a component, it can be passed down as a prop instead of stored in state.
// You want to improve performance: Because props are immutable, changes to props do not trigger a re-rendering of the component. This can be used to optimize performance by preventing unnecessary re-renders of components.
// You want to follow a unidirectional data flow: In React, it is recommended to follow a unidirectional data flow, where data flows from parent components to child components via props. This makes it easier to reason about the state of the application and to debug issues.
// In summary, props should be used for data that is needed by child components and provided by parent components, is immutable, and does not need to trigger a re-rendering of the component. If a piece of data needs to be updated or managed by the component itself, it should be stored in state instead.

// 3.When would you want to use state instead of props?

// In React, state and props are both used to manage data in components, but they have different characteristics and use cases. In general, you would want to use state instead of props when:
// The data is internal to the component: State is used to manage data that is internal to the component and not needed by other components. If a piece of data is specific to a component and not shared by other components, it can be stored in state.
// The data can change over time: State is mutable, meaning that it can be changed by the component itself. If a piece of data needs to be updated based on user interactions or other events, it should be stored in state.
// You need to trigger a re-render: Changes to state trigger a re-rendering of the component and its child components. If a piece of data needs to trigger a re-rendering of the component, it should be stored in state.
// You want to encapsulate behavior: By storing data in state and encapsulating behavior within a component, you can create reusable and composable components that can be used throughout your application.
// In summary, state should be used for data that is internal to the component, can change over time, needs to trigger a re-rendering of the component, and encapsulates behavior. If a piece of data is needed by multiple components or is immutable, it should be passed down as a prop instead.

// 4.What does "immutable" mean? Are props immutable? Is state immutable?

// In programming, "immutable" refers to data that cannot be changed after it is created. Immutable data structures are often preferred over mutable ones because they are safer to use and easier to reason about. Once an immutable value is created, it cannot be modified in-place, and any operation that would modify the value will create a new value instead.
// In React, props are immutable, meaning that they cannot be changed by the child component. Once a prop is passed from a parent component to a child component, the child component cannot modify the value of the prop. Instead, the child component can only read the value of the prop and use it to render its own content.
// On the other hand, state in React is mutable, meaning that it can be changed by the component itself. The setState() method is used to update the state of a component, triggering a re-rendering of the component and its child components with the updated state.
// It's worth noting that even though props are immutable, the values that are passed as props can be mutable. For example, if an object is passed as a prop, its properties can be modified outside of the component. This is why it's generally a good practice to avoid modifying props in place, and to create new objects or arrays instead.
// In summary, "immutable" refers to data that cannot be changed after it is created. Props in React are immutable, meaning that they cannot be changed by the child component. State in React is mutable, meaning that it can be changed by the component itself.
