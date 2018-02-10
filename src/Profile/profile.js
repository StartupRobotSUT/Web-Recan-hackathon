import React from 'react'
import firebase from 'firebase'
import {signOut} from '../firebase/userconfig'
import {ref} from '../firebase/config'
class Profile extends React.Component{
constructor(props){
	super(props)
	this.state={
	   value:0
	}
}
componentDidMount() {
    let user = firebase.auth().currentUser;
    let than = this
	if (user) {
         ref.child(`users/${user.uid}`).on('value',res=>{
         	ref.child(`/coupop/${res.val()}/value`).on('value',res=>{
         		console.log(res.val())
         		than.setState({value:res.val()})
         	})
         })
	} else { 
	        console.log(user)
   }
 }
logOut(){
	signOut().then(res=>{
	     this.props.history.push('/')
	})
}
	render(){
		return(
      <div className="display container">
         <nav className="navbar is-light is-transparent">
           <div className="navbar-menu ">
  				<div className="navbar-start">
  				<p class="navbar-item">
     				 <h1  className="fas fa-recycle title is-3">&nbsp;&nbsp;RECAN</h1>
     		    </p>
  				</div>

 		 		<div className="navbar-end">
 		 		    <p class="navbar-item">
                         <p className=" btn button is-danger" onClick={this.logOut.bind(this)}><b>Log Out</b></p>
                    </p>
 	    	    </div>
		</div>
             </nav>
             <br/>
             <section class="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="foo far fa-star">
        &nbsp;&nbsp;<b>Total Points : {this.state.value}</b> 
      </h1>
    </div>
  </div>
</section>
<br/>
<section className="hero is-dark">
<div className="hero-body">
    <div className="container">
      <h1 className="title far fa-star">
           &nbsp;&nbsp;ads
      </h1>
    </div>
  </div>
</section>
         </div>
	  )
  }
}
export default Profile