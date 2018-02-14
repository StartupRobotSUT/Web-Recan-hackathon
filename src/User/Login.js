import React from 'react'
import  {singInEmail}from '../firebase/userconfig'
import {Redirect,Link} from 'react-router-dom'
import Bar from '../child/bar.js'
class Login extends React.Component{
	constructor(props){
		super(props)
        this.state={
        	email:"",
        	password:"",
			done:false,
			error:{}
        }
}
 haadleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	if(!!this.state.error[event.target.name]){
		let error = Object.assign({},this.state.error)
		delete error[event.target.name]
		this.setState({
			[event.target.name]:event.target.value,
			error
		})
	}else{
		this.setState({
			[name]: value
		  });
	}
 }
 handleClick(){
	let error ={}
   let { email,password} =this.state
   if(this.state.email==="") error.email ="email is emty";
   if(this.state.password==="")error.password="password is emty";
   this.setState({error})
   const inValid = Object.keys(error).length===0
   if(inValid){
   singInEmail(email,password).catch(err=>{
        if(err.code==='')
        	console.log("logined")
        else {
			console.log(err.code)
			this.props.history.push('/')
        	return;
        }

   }).then(res=>{
 	    	this.setState({done:true}) 
   })
  }
 }
	 render(){
	 	const Form =(
	 	   <div className="App2">
             <h3 className="title is-3" style={{textAlign:'center'}}>RECAN</h3>
	 			<p className="field is-center">
	 				<input  className="input is-success"
	 				    	type="text" 
	 				   		name="email"
 							value={this.state.email}
 							placeholder="Enter email"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
								
	 			</p>
				 <span className="noti">{this.state.error.email}</span>
	 			<p className="field" >
	 				<input 	className="input is-success"
	 				        type="password" 
	 						name="password"
	 						placeholder="Enter password"
 							value={this.state.password}
 							onChange={this.haadleInputChange.bind(this)}
	 						/>
							 <span className="noti">{this.state.error.password}</span>
	 			</p>
	 			<p className="field" style={{textAlign:'center'}}>
	 			    <a  className="button is-info" onClick={this.handleClick.bind(this)}>Log In</a>
	 			</p>
				 <p className="field" style={{textAlign:'center'}}>
	 			<Link to={'/signup'} ><a><u>Sing Up</u></a></Link>
				 </p>
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