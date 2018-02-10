import React from 'react'
import  {singInEmail}from '../firebase/userconfig'
import {Redirect} from 'react-router-dom'
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
	 	   <div>
             <h3>Welcome!!  Log In</h3>
	 			<p>
	 				<input 	type="text" 
	 				   		name="email"
 							value={this.state.email}
 							placeholder="Enter email"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
	 			<p>
	 				<input 	type="password" 
	 						name="password"
	 						placeholder="Enter password"
 							value={this.state.password}
 							onChange={this.haadleInputChange.bind(this)}
	 						/>
	 			</p>
	 			<p><button onClick={this.handleClick.bind(this)}>Log In</button></p>
	 		</div>

	 		)
	 	return(
	 		<div>
	 			{this.state.done?<Redirect to={'/profile'}/>:Form}
	 		</div>
	 		)
	 }
}
export default Login