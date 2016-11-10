import React from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component{
	render(){
		return(
			<section id="portfolio">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-lg-12 text-center">
	    					<h2>Portfolio</h2>
	    					<hr className="star-primary" />
	    				</div>
	    			</div>
	    			<div className="row">
	    				<PortfolioItem portID="portfolioModal1" portURL="#portfolioModal1"/>
	    			</div>
	    		</div>
    		</section>
		)
	}

}

export default Portfolio