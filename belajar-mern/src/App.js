import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<Router>
			<NavigationBar />
			<Layout>
				<Route exact path="/" component={Home} />
				<Route exact path="/user" component={User} />
				<Route exact path="/about" component={About} />
			</Layout>
		</Router>
	);
}

export default App;
