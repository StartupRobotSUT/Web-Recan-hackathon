import React from 'react'
class Login extends React.Component{
	constructor(props){
		super()
        this.state={
        	username:"",
        	password:""
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
   console.log(this.state);
 }
	 render(){
	 	return(
	 		<div>
	 			<p>
	 				<input 	type="text" 
	 				   		name="username"
 							value={this.state.username}
 							onChange={this.haadleInputChange.bind(this)}
	 				   		/>
	 			</p>
	 			<p>
	 				<input 	type="password" 
	 						name="password"
 							value={this.state.password}
 							onChange={this.haadleInputChange.bind(this)}
	 						/>
	 			</p>
	 			<p><button onClick={this.handleClick.bind(this)}>Sumbit</button></p>
	 		</div>
	 		) 
	 		
	 	
	 }
}
export default Login