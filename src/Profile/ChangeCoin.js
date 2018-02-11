import React from 'react';
import {Link} from 'react-router-dom'
import {signOut} from '../firebase/userconfig'
import firebase from 'firebase'
import {ref} from '../firebase/config'
export default class ChangeCoin extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			coin:0,
			coupon:0,
		}
	}
 EntertoChange(){
   console.log("Enter")

 }
 componentDidMount() {
    let user = firebase.auth().currentUser;
    let than = this
  if (user) {
         ref.child(`users/${user.uid}`).on('value',res=>{
          ref.child(`/coupon/${res.val()}`).on('value',res=>{
            // let coin = res.val().coin;
            console.log(res.val())
            than.setState({coin:res.val().coin,
                           coupon:res.val().coupon})
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
	render() {
		return (
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
                                    <a className="button is-info is-outlined app" style={{color:"black"}}><Link to={'/user/profile/display'}><b>Display</b></Link></a>
                                </p>
                            </div>
                        </div>
                         <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info  app" style={{color:"black"}} ><Link to={'/user/profile/changeCoin'}><b>เเลกเปลียน</b></Link></a>
                                </p>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-danger is-info is-outlined app" onClick={this.logOut.bind(this)} >Logout</a>
                                </p>
                            </div>
                        </div>
                    </div>
            </nav>
            <br/>
             <h1 className="title is-4">เปลียน points เป็นเงิน</h1>
             <section className="hero is-info">
  				<div className="hero-body">
    				<div className="container">
      					<h1 className="far fa-star title">
        					&nbsp;Total Points : {this.state.coupon}
      					</h1>
      	    		</div>
  				</div>
			</section>	
			<br/>
            <section className="hero is-success">
  				<div className="hero-body">
    				<div className="container">
      					<h1 className="fab fa-bitcoin title">
        					&nbsp;Coin : {this.state.coin}
      					</h1>
      	    		</div>
  				</div>
			</section>
			   <br/>
			   <p style={{textAlign:'center'}}>	
			   <p className="field" >
			      <a className="button is-danger" onClick={this.EntertoChange.bind(this)}>Enter to Change</a>
			    </p>
			   </p>
                        </div>

		);
	}
}
