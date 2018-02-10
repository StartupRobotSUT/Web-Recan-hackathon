import React from 'react'
import Login from '../User/Login'
import SignUp from '../User/Signup'
import Profile from '../Profile/profile'
import{Switch,Route} from 'react-router-dom'
class Routes extends React.Component{
	render(){
		return (
			<div>
				<Switch>
				    <Route exact path={'/'} component={Login}/>
					<Route exact path={'/login'} component={Login}/>
					<Route exact path={'/signup'} component={SignUp}/>
					<Route exact path={'/user/profile/'} component={Profile}/>
				</Switch>
			</div>
		)
	}
}
export default Routes