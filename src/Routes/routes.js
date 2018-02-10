import React from 'react'
import Login from '../User/Login'
import SignUp from '../User/Signup'
import Profile from '../Profile/profile'
import{Switch,Route,Link} from 'react-router-dom'
class Routes extends React.Component{
	render(){
		return (
			<div>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Signup</Link>
				<Switch>
					<Route exact path={'/login'} component={Login}/>
					<Route exact path={'/signup'} component={SignUp}/>
					<Route exact path={'/profile'} component={Profile}/>
				</Switch>
			</div>
		)
	}
}
export default Routes