import React from 'react'
import  {authEmail}from '../firebase/userconfig'
import  { ref } from '../firebase/config'
import {Redirect} from 'react-router-dom'
import Bar from '../child/bar.js'
class SignUp extends React.Component{
      constructor(props){
		super(props)
        this.state={
        	email:"",
        	password:"",
        	fullName:"",
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
 generatePassword() {
    var length = 4,
        charset = "abcd0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
 handleClick(){
	 let error ={}
     let { email,password} =this.state  
	 let pass = this.generatePassword()
	 if(this.state.fullName==="") error.fullName="Full is  emty"
	 if(this.state.email==="") error.email="email is emty"
	 if(this.state.password==="") error.password ="password is emty"
	 if(this.state.password.length<8) error.password="password want more than 8 charater"
	this.setState({error})
	 const inValid = Object.keys(error).length===0
	 if(inValid){
     authEmail(email,password).then(res=>{
			 ref.child(`users/${res.uid}`).set(pass)
			 ref.child(`users/profile/${res.uid}`).set(this.state.fullName)
     	     ref.child(`coupon/${pass}`).set({ coin:0,
     	                                      status:1,
                                              coupon:0
     	                                      })
     }).then(()=>{
        this.setState({done:true})
	 })
	}
 }
	 render(){
	 	let From =(
	 		<div className="App2">
  			<h3 className="title is-3" style={{textAlign:'center'}} >RECAN SignUp</h3>
	 			<p className= "field" style={{textAlign:'center'}}>
	 				<input 	
	 						className="input is-success"
	 				  		type="text" 
	 				   		name="fullName"
 							value={this.state.fullName}
 							placeholder="Enter full Name"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
				 <span className="noti">{this.state.error.fullName}</span>
	 			<p className="field" style={{textAlign:'center'}}>
	 				<input 	className="input is-success"
	 						type="email" 
	 				   		name="email"
 							value={this.state.email}
 							placeholder="Enter email"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
				 <span className="noti">{this.state.error.email}</span>
	 			<p className="field">
	 				<input 	className="input is-success"
	 						type="password" 
	 						name="password"
	 						placeholder="Enter password"
 							value={this.state.password}
 							onChange={this.haadleInputChange.bind(this)}
	 						/>
	 			</p>
				 <span className="noti">{this.state.error.password}</span>
	 			<p style={{textAlign:'center'}}>
					 <a  className="button is-primary"  onClick={this.handleClick.bind(this)}>Sign Up</a>
			   </p>
	 			</div>
	 		)
	 	return(
	 		<div>
	 			{this.state.done?<Redirect to={'/user/profile'}/>:From}
	 		</div>
	 		) 
	 		
	 	
	 }
}
export default SignUp