import React from 'react';
import PortfolioModal from './PortfolioModal';

class PortfolioItem extends React.Component{
	render(){
		return(
            <div>
                <div className="col-sm-4 portfolio-item">
                    <a href={this.props.portURL} className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/cake.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <PortfolioModal portModalID={this.props.portID} />
            </div>
		)
	}

}

export default PortfolioItem