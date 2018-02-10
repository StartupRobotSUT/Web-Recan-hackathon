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
				<br/><br/>
				<br/>
				<br/><br/>
				<br/>
				<footer className="footer">
  					<div className="container">
    				<div className="content has-text-centered">
      		            <h1><b>RECAN</b> SUT HACKATHON #3</h1>
        			
    			</div>
  			</div>
			</footer>
			</div>
		)
	}
}
export default Routes