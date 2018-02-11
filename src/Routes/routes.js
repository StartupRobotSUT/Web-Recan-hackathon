import React from 'react'
import Login from '../User/Login'
import SignUp from '../User/Signup'
import Profile from '../Profile/profile'
import{Switch,Route} from 'react-router-dom'
import ChangeCoin from '../Profile/ChangeCoin'
import  Display from '../Profile/Display'

class Routes extends React.Component{
	render(){
		return (
			<div>
				<Switch>
				    <Route exact path={'/'} component={Login}/>
					<Route exact path={'/login'} component={Login}/>
					<Route exact path={'/signup'} component={SignUp}/>
					<Route exact path={'/user/profile/'} component={Profile}/>
					<Route exact path={'/user/profile/display'} component={Display}/>
					<Route exact path={'/user/profile/changeCoin'} component={ChangeCoin}/>
				</Switch>
			</div>
		)
	}
}
export default Routes