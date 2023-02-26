In ReactJS, `props` (short for "properties") are a way to pass data from one component to another. Props are essentially a set of attributes that are passed down from a parent component to a child component.

To use props in a React component, you can define them as attributes on the component's opening tag. For example:

```jsx
<MyComponent name="John" age={42} />
```
In this example, name and age are props being passed down to the MyComponent component.

To access these props inside the component, you can reference them using the props object. For example:

```jsx
function MyComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```
In this example, the props object is passed as an argument to the MyComponent function, and then used to display the name and age props.

Props are read-only, which means that a child component cannot modify the props passed down to it. If a child component needs to modify the data, it can do so by using state or by calling a function passed down as a prop.

```html
<html>
    <head></head>
    <body>
        <a href="https://google.com">This is a link</a>
        <img src="" />
        <input placeholder="First Name" type="radio" />
    </body>
</html>
```
In this props looks like attributes, but they are not. They are just a way to pass data from one component to another.

```js
function addTwoNumbersTogether(a, b) {
    return a + b
}
```

In this example, a and b are parameters. They are not props but they are similar. They are just a way to pass data from one function to another.
