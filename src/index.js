import React from "react"
import ReactDOM from "react-dom"



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