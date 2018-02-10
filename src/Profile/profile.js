import React from 'react'
import firebase from 'firebase'
import {signOut} from '../firebase/userconfig'
import {ref} from '../firebase/config'
import {Route,Link,Switch} from 'react-router-dom'
import Bgn from '../img/bg.jpg'
import ChangeCoin from './ChangeCoin'
import  Display from './Display'

class Profile extends React.Component{
constructor(props){
	super(props)
	this.state={
	   value:0,
	   done:false
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
Display(){
	this.setState({done:true})
}
	render(){
		return(
            
            <div className='container bar-go'>
                <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <p className="title is-4 fab fa-pagelines">&nbsp;RECAN</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                     <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info is-outlined app" style={{color:"black"}}><Link to={'/user/profile/display'}>Display</Link></a>
                                </p>
                            </div>
                        </div>
                         <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info is-outlined app" style={{color:"black"}} ><Link to={'/user/profile/changeCoin'}>เเลกเปลียน</Link></a>
                                </p>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-danger is-info is-outlined app" onClick={this.logOut.bind(this)}>Logout</a>
                                </p>
                            </div>
                        </div>
                    </div>
            </nav>		
                <Route  path={'/user/profile/'} component={BG}/>
         </div>
	  )
  }
}
export default Profile
const BG = ()=> <img src={Bgn} className="img"/>