import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import 'bootstrap/scss/bootstrap-grid.scss'
import Ecommerce from './components/Ecommerce'
import AnimalFamilyPage from './pages/AnimalFamilyPage'
import { useDispatch } from 'react-redux'
import { getAnimalList } from './redux/animalSlice'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAnimalList())
	})

	return (
		<div className="App" style={{backgroundColor:'#e8f5e9'}}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route
						exact
						path="/login"
						render={props => <Auth {...props} authRoute="login" />}
					/>
					<Route exact path="/admin" component={AdminPage} />
					<Route exact path="/animalfamily" component={AnimalFamilyPage} />
					<Route exact path="/detail" component={Ecommerce} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
