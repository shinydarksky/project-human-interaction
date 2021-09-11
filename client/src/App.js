import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route
						exact
						path='/login'
						render={props => <Auth {...props} authRoute='login' />}
					/>
					<Route exact path='/admin' component={AdminPage} />
				</Switch>
			</Router>
		</div>
	)
}

export default App;