import React from 'react'
import  {singInEmail}from '../firebase/userconfig'
import {Redirect,Link} from 'react-router-dom'
import Bar from '../child/bar.js'
class Login extends React.Component{
	constructor(props){
		super()
        this.state={
        	email:"",
        	password:"",
        	done:false
        }
      }
 haadleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
 }
 handleClick(){
   let { email,password} =this.state
   singInEmail(email,password).catch(err=>{
        if(err.code==='')
        	console.log("logined")
        else {
        	console.log(err.code)
        	return;
        }

   }).then(res=>{
 	    	this.setState({done:true}) 
   })
 }
	 render(){
	 	const Form =(
	 	   <div className="App2">
             <h3 className="title is-3">RECAN</h3>
	 			<p className="field is-center">
	 				<input  className="input is-success"
	 				    	type="text" 
	 				   		name="email"
 							value={this.state.email}
 							placeholder="Enter email"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
	 			<p className="field" >
	 				<input 	className="input is-success"
	 				        type="password" 
	 						name="password"
	 						placeholder="Enter password"
 							value={this.state.password}
 							onChange={this.haadleInputChange.bind(this)}
	 						/>
	 			</p>
	 			<p className="field">
	 			    <a  className="button is-info" onClick={this.handleClick.bind(this)}>Log In</a>
	 			</p>
	 			<Link to={'/signup'}><a><u>Sing Up</u></a></Link>
	 		</div>

	 		)
	 	return(
	 		<div>
	 		    <Bar/>
	 			{this.state.done?<Redirect to={'/user/profile'}/>:Form}
	 		</div>
	 		)
	 }
}
export default Login