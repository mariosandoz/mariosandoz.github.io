import React from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';

class Portfolio extends React.Component{
	render(){
		return(
			<div>
				<section id="portfolio">
		    		<div className="container">
		    			<div className="row">
		    				<div className="col-lg-12 text-center">
		    					<h2>Portfolio</h2>
		    					<hr className="star-primary" />
		    				</div>
		    			</div>
		    			<div className="row">
		    				<PortfolioItem portURL="#portfolioModal1"/>
		    			</div>
		    		</div>
	    		</section>
	    		<PortfolioModal portID="portfolioModal1" />
    		</div>
		)
	}

}

export default Portfolio