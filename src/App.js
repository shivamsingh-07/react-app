import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Message from "./components/Message";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome Everybody</h1>
                <h2>This is a new app</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <BrowserRouter>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/message" component={Message}></Route>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
