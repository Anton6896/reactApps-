import "./static/main.css"
import Navbar from "./components/layouts/Navbar";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/AboutPage";
//  import -> context and BrowserRouter in index.js

let App = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
