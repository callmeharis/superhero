import AnotherComponent from "./AnotherComponent"
import "./app.css"
function App() {
    return <>
        <h1 className="">Hello App</h1>
        <p>This is paragraph</p>
        <AnotherComponent author="Haris" age={50} />
        <AnotherComponent author="Ali"  />
    </>
}

export default App