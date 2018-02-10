import React from 'react'
import  {authEmail}from '../firebase/userconfig'
import  { ref } from '../firebase/config'
class SignUp extends React.Component{
      constructor(props){
		super(props)
        this.state={
        	email:"",
        	password:"",
        	fullName:""
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
 generatePassword() {
    var length = 4,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
 // componentDidMount() {
 //    console.log(this.generatePassword())
 //  }
 handleClick(){
     let { email,password} =this.state  
     let pass = this.generatePassword()
     authEmail(email,password).then(res=>{
     	    ref.child(`users/${res.uid}`).set(pass)
     	    ref.child(`coupop/${pass}`).set({value:0})
     })
 }
	 render(){
	 	return(
	 		<div>
	 			<h3>Welcome!!  SignUp</h3>
	 			<p>
	 				<input 	type="text" 
	 				   		name="fullName"
 							value={this.state.fullName}
 							placeholder="Enter full Name"
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
	 			<p>
	 				<input 	type="email" 
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
	 		
	 	
	 }
}
export default SignUp