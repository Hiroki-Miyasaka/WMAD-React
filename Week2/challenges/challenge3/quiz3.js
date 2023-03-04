// 1.What is a "side effect" in React?

//In React, a side effect refers to any modification to the state or the DOM that is caused by a component. 
//Side effects are any changes that happen outside of the component's own state, props, or lifecycle methods. 
//They may include things like changing the document title, fetching data from a server, updating a global variable, or manipulating the DOM directly.

// What are some examples?

//1 Updating the document title: A component may need to update the document title based on its props or state. 
//This can be done using the useEffect hook and the document.title property

import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}!`;
  }, [props.name]);

  return <div>Hello, {props.name}!</div>;
}

//2 Fetching data from a server: A component may need to fetch data from a server and update its state with the result. 
//This can be done using the useEffect hook and an asynchronous fetch function

import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data.message}</div>;
}

//3 Updating a global variable: A component may need to update a global variable based on its props or state. 
//This can be done using the useEffect hook and a callback function:

import React, { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    window.myGlobalVar = props.value;
    return () => {
      window.myGlobalVar = null;
    };
  }, [props.value]);

  return <div>Hello, {props.value}!</div>;
}

// 2. What is NOT a "side effect" in React? Examples?

//1 Updating the component's own state: 
//Updating the state of a component is not considered a side effect, because it is an internal operation that does not affect anything outside of the component.

import React, { useState } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // Updating the state is not a side effect
  }

  return <button onClick={handleClick}>Click me ({count})</button>;
}

//2 Rendering the component: 
//Rendering a component is not considered a side effect, because it is the primary purpose of the component and does not modify anything outside of the component.

import React from 'react';

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>; // Rendering the component is not a side effect
}

//3 Returning a value from a function: 
//Returning a value from a function is not considered a side effect, because it is a normal behavior of functions and does not modify anything outside of the function.

function add(a, b) {
    return a + b; // Returning a value is not a side effect
  }

// 3. When does React run your useEffect function? 

//In React, the useEffect function is used to manage side effects, such as fetching data from an API, updating the DOM, or subscribing to a WebSocket. 
//The useEffect function takes two arguments: a function that performs the side effect, and an array of dependencies that controls when the function should be executed.

//The useEffect function is run in the following scenarios:

//1 On the initial render: When a component is first rendered, the useEffect function is called immediately after the component is mounted in the DOM. 
//This allows you to perform any setup tasks that need to be done before the component is displayed, such as fetching data from an API.

useEffect(() => {
    // Fetch data from an API
  }, []);

//2 On state or props update: 
//If the dependencies array is non-empty, the useEffect function is called whenever one of the dependencies changes. 
//This allows you to update the component in response to changes in state or props, such as re-fetching data from an API when the user changes a filter.

useEffect(() => {
    // Re-fetch data from an API when the user changes the filter
  }, [filter]);

//3 On component unmount: 
//If the useEffect function returns a cleanup function, that function will be called when the component is about to be unmounted from the DOM. 
//This allows you to clean up any resources or subscriptions that the component created during its lifetime.

useEffect(() => {
    const subscription = subscribeToWebSocket();
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

//When does it NOT run?

//The useEffect function will not run if the dependencies array is empty and the component is not updated, or if the component is never rendered in the DOM.
//It's important to note that the useEffect function is asynchronous, so any side effects that it performs may not be immediately visible in the component's state or in the DOM. 
//If you need to access the updated state or DOM after a side effect, you can use the useLayoutEffect hook, which runs synchronously after the DOM has been updated.


// 4.How would you explain what the "dependecies array" is?

//In React, the useEffect hook is used to manage side effects in a functional component. 
//The useEffect function takes two arguments: a function that performs the side effect, and an optional array of dependencies that controls when the function should be executed.
//The dependencies array is an optional second argument to the useEffect function, and it specifies the values that the effect depends on. 
//When any of the dependencies change, React will re-run the effect function. 
//If the dependencies array is empty, the effect will only run once when the component is first mounted.
//Here is an example of using the dependencies array to control the behavior of an effect:

import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This effect will run whenever the `props.url` or `props.token` change
    fetch(props.url, {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data));
  }, [props.url, props.token]);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

//In this example, the useEffect hook fetches data from an API using the URL and token props, and sets the data state when the response is received. 
//The effect function is re-run whenever the URL or token props change, because those are the values specified in the dependencies array. 
//If either prop changes, the effect will fetch new data and update the component. 
//If neither prop changes, the effect will not run again.