/* Challenge 1: 
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

function Navbar(){
    return (
        <div>
            <nav>
                <h1>Hiroki</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

/* Challenge 2: 
Starting from scratch, build and render the 
HTML for our section project.
We'll be adding styling to it later.
Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
    logo
    Fun facts about React
    Was first released in 2013
    Was originally created by Jordan Walke
    Has well over 100K stars on GitHub
    Is maintained by Facebook
    Powers thousands of enterprise apps, including mobile apps
*/

function MyMain(){
    return(
        <div>
            <img src="./react-logo.png" width="40px"/>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Navbar />
        <MyMain />
    </div>
)