import React from 'react'
import {signOut} from '../firebase/userconfig'
class Profile extends React.Component{
constructor(props){
	super(props)
	this.state={
	   value:0
	}
}
componentDidMount() {
    // console.log(this.generatePassword())
    
 }
logOut(){
	signOut()
}
	render(){
		return(
         <div>
             <button onClick={this.logOut.bind(this)}>Log Out</button>
             <b>{this.state.value}</b>
         </div>
	  )
  }
}
export default Profile