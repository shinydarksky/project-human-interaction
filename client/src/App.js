import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import 'bootstrap/scss/bootstrap-grid.scss'
import Ecommerce from './components/Ecommerce'
import { useDispatch } from 'react-redux'
import { getAnimalList } from './redux/animalSlice'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAnimalList())
	})

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route
						exact
						path="/login"
						render={props => <Auth {...props} authRoute="login" />}
					/>
					<Route exact path="/admin" component={AdminPage} />
					<Route exact path="/detail" component={Ecommerce} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
