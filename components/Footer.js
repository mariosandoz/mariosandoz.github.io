import React from 'react';

class Footer extends React.Component{
	render(){
		return (
			<div>
				<footer className="text-center">
	    			<div className="footer-above">
		    			<div className="container">
		    				<div className="row">
		    					<div className="footer-col col-md-4">
		    						<h3>Location</h3>
		    						<p>25A Makom Street
		    							<br/>Jatiasih, Bekasi 17421
	    							</p>
		    						</div>
		    						<div className="footer-col col-md-4">
		    							<h3>Around the Web</h3>
		    							<ul className="list-inline">
		    								<li>
		    									<a href="https://www.facebook.com/mariosandoz" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
		    								</li>
		    								<li>
		    									<a href="https://plus.google.com/+MarioSandoz" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
		    								</li>
		    								<li>
		    									<a href="https://twitter.com/mariosandoz" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
		    								</li>
		    								<li>
		    									<a href="https://id.linkedin.com/in/maryo-sandoz-nababan-0008863a" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
		    								</li>
		    							</ul>
		    						</div>
		    						<div className="footer-col col-md-4">
		    							<h3>About Me</h3>
		    							<p>
		    								web developer, javascript enthusiast. 
		    								Need something ? Contact me
		    							</p>
		    						</div>
		    					</div>
		    				</div>
		    			</div>
	    			<div className="footer-below">
	    				<div className="container">
	    					<div className="row">
	    						<div className="col-lg-12">
	    							Copyright &copy; mariosandoz.github.io 2016
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</footer>
	    		<div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
	    			<a className="btn btn-primary" href="#page-top">
	    				<i className="fa fa-chevron-up"></i>
	    			</a>
	    		</div>
    		</div>
		)
	}
}

export default Footer