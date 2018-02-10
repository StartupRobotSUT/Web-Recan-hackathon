import React from 'react';
import {Link} from 'react-router-dom'
export default class Display extends React.Component {
	constructor(props) {
		super(props);
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
                                    <a className="button is-info app" style={{color:"black"}}><Link to={'/user/profile/display'}><b>Display</b></Link></a>
                                </p>
                            </div>
                        </div>
                         <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info is-outlined app" style={{color:"black"}} ><Link to={'/user/profile/changeCoin'}><b>เเลกเปลียน</b></Link></a>
                                </p>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-danger is-info is-outlined app" >Logout</a>
                                </p>
                            </div>
                        </div>
                    </div>
            </nav>
            <br/>
            <section className="hero is-dark">
  				<div className="hero-body">
    				<div className="container">
      					<h1 className="title">
        					Total Points : 
      					</h1>
      	    		</div>
  				</div>
			</section>	
			<br/>
            <section className="hero is-success">
  				<div className="hero-body">
    				<div className="container">
      					<h1 className="title">
        					Status : 
      					</h1>
      	    		</div>
  				</div>
			</section>		

                        </div>
		);
	}
}
