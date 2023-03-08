import "./Main.css"

const Main = (props) => {
    return(
        <main className={props.darkMode ? "main dark" : "main"}>
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--list">
          <li className="main--list--li">Was first released in 2013</li>
          <li className="main--list--li">Was originally created by Jordan Walke</li>
          <li className="main--list--li">Has well over 100K stars on GitHub</li>
          <li className="main--list--li">Is maintained by Facebook</li>
          <li className="main--list--li">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    )
}

export default Main;