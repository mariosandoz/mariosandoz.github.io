import React from 'react';

class Header extends React.Component{
	render(){
		return (
	    	<header>
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-lg-12">
	    					<img className="img-responsive" src="img/profile.png" alt="" />
	    					<div className="intro-text">
	    						<span className="name">Mario Sandoz</span>
	    						<hr className="star-light" />
	    						<span className="skills">Web - Mobile - API Developer</span>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</header>
		)
	}
}

export default Header