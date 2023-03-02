`A ternary operation` is a conditional expression that evaluates to one of two values based on a condition. It is also commonly referred to as the ternary operator because it takes three operands: the condition, the expression to evaluate if the condition is true, and the expression to evaluate if the condition is false.

The syntax for a ternary operation in JavaScript is:

```sql
condition ? expression1 : expression2
```
Here, condition is the condition to evaluate, expression1 is the expression to evaluate if condition is true, and expression2 is the expression to evaluate if condition is false.

Here are some best practices for writing ternary operations in JavaScript:

- Use the ternary operator only for simple conditional expressions that can be easily read and understood. For complex expressions, it's often better to use an if statement instead.
- Avoid nesting ternary operations. If you need to evaluate multiple conditions, it's often better to use a series of if statements or a switch statement instead.
- Be consistent in your use of parentheses. It's a good practice to wrap both the expression1 and expression2 expressions in parentheses to ensure that the order of operations is clear.
- Use clear and descriptive variable and function names. This makes the code easier to understand and maintain.
- Avoid using ternary operations for side effects or complex expressions. Instead, use them for simple expressions that can be easily understood at a glance.

Overall, the best and expert way to write a ternary operation is to use it judiciously, only for simple conditional expressions that can be easily understood and maintained. By following these best practices, you can ensure that your code is clean, concise, and easy to read and understand.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

`condition && something1`: This expression is used to conditionally render something1 if condition is true. If condition is false, then nothing is rendered. This is called `short-circuit` evaluation because something1 is only evaluated if condition is true.

`condition ? something1 : something2`: This expression is used to conditionally render something1 if condition is true and something2 if condition is false. This is similar to an if-else statement.

`condition || something1`: This expression is used to provide a default value of something1 if condition is false. If condition is true, then the expression evaluates to condition.

`condition === true ? something1 : something2`: This expression is similar to the ternary expression in #2, but explicitly checks if condition is equal to true. It conditionally renders something1 if condition is true and something2 if condition is false.