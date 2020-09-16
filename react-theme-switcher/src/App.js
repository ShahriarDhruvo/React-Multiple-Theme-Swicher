import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/styles.scss";
import Home from "./pages/Home";
import ThemeContextProvider from "./contexts/ThemeContext";
// import NotFound from "./components/generics/notFound";

function App() {
    return (
        <Router>
            <Switch>
                <ThemeContextProvider>
                    <Route exact path="/" component={Home} />
                    {/* <Route component={NotFound} /> */}
                </ThemeContextProvider>
            </Switch>
        </Router>
    );
}

export default App;
