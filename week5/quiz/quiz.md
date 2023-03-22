- What is the purpose of the useState hook?
To save the specific data in a component.

- What is the syntax for using useState in a functional component?
const [count, setCount] = useState(0);

- What is the default value of a state variable initialized with useState?
Whatever we can set the default value.

- Can you update multiple state variables with a single call to useState?
No

- How do you update a state variable with useState?
Using setter function which was declared 

- What is the purpose of the useEffect hook?
Adding side effects

- What is the syntax for using useEffect in a functional component?
useEffect(() => {
    // Perform side effect here
  }, [count]);

- When does the callback function passed to useEffect get called?
The first time the component is rendered and after that, the callback function will be called after each re-render, but only if one or more of the dependencies specified in the second argument to useEffect have changed. If the dependency array is empty, the effect function will only be called once, after the initial render.

- Can you use useEffect more than once in a single component?
Yes

- How do you unsubscribe from a subscription created in a useEffect hook?
Return a cleanup function from the effect function. The cleanup function will be called when the component unmounts or when the effect is re-run due to changes in the dependency array.

- What is the difference between useEffect and componentDidMount in a class component?
ComponentDidMount is called only one time after the initial render whereas UseEffect is called after every rerender the component

- What is the difference between useEffect and componentWillUnmount in a class component?
UseEffect is called after every re-render of the component, whereas componentWillUnmount is called only once, immediately before the component is unmounted

- What is the difference between useEffect and componentDidUpdate in a class component?
useEffect and componentDidUpdate is that useEffect is called after every re-render of the component, whereas componentDidUpdate is called only after a re-render and only for class components

- How do you conditionally run the effect only when certain values change?
In the useEffect hook, you can pass a dependency array as a second argument. This array contains the values that the effect depends on, and the effect will only be re-run when one or more of these values change. If the dependency array is empty, the effect will only be run once, when the component mounts.

- What is the second argument to useEffect used for?
This argument determines when the effect function should be called.

- How do you simulate componentDidMount with useEffect?
To simulate componentDidMount with useEffect, you can pass an empty dependency array as the second argument.

- How do you simulate componentWillUnmount with useEffect?
useEffect hook to simulate the componentWillUnmount method by defining a cleanup function that will be called when the component unmounts.

- How do you simulate componentDidUpdate with useEffect?
useEffect hook to simulate the componentDidUpdate method by defining an effect that will be run after every re-render of the component.

- Can you have side effects in the callback function passed to useState?
Yes

- Can you have state variables in the callback function passed to useEffect?
Yes