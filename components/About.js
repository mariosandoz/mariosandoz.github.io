import React from 'react';

class About extends React.Component{
	render(){
		return (
			<section className="success" id="about">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-lg-12 text-center">
	    					<h2>About</h2>
	    					<hr className="star-light" />
	    				</div>
	    			</div>
	    			<div className="row">
	    				<div className="col-lg-4 col-lg-offset-2">
	    					<p>
	    						Nowadays, company profile or information system is a mandatory needs
	    						to improve your business or to attract clients.
	    						<br/>
	    						Whether you're a businessman looking to showcase your work, 
	    						a professional looking to attract clients, 
	    						or a graphic artist looking to share your projects.
	    					</p>
	    				</div>
	    				<div className="col-lg-4">
	    					<p>
    							What can I do for you? <br />
    							Company Profile <br/>
    							Blog <br/>
    							Mobile Application <br/>
    							E-Commerce <br/>
    							Business Application <br/>
    							Improving Your current website <br/>
							</p>
	    				</div>
	    				<div className="col-lg-8 col-lg-offset-2 text-center"></div>
	    			</div>
	    		</div>
	    	</section>
		)
	}
}

export default About