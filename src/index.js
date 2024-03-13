import React from "react"
import ReactDOM from "react-dom"
//React 18. 
import ReactDOM from "react-dom/client"


//only the last instruction will be excecuted , the first hello on the browser is from index.htm file
//.querySelector can be used instead of getElementById 
ReactDOM.render(<h1>Hello React</h1>, document.getElementById("root"))
ReactDOM.render(
    <ul>
        <h1>Hello from index.js</h1>

        <li>Fist</li>
        <li>Second</li>
        <li>Third</li>
    </ul>,
    document.getElementById("root")
)



function MainContent() {
    return(
    <h1>My Maincontent component from index.js</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>
    ,
    document.getElementById("main")
)


const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
//React 18. create root first 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
//or in one line
ReactDOM.createRoot(document.getElementById("root")).render(navbar)