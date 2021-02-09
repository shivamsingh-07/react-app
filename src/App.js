import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome Everyone</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <span>This is just a small modification of the base react template to show automatic deployment of github actions.</span>
            </header>
        </div>
    );
}

export default App;
