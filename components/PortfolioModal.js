import React from 'react';

class PortfolioModal extends React.Component{
	render(){
		return (
			<div className="portfolio-modal modal fade" id={this.props.portID} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">
                                <div className="modal-body">
                                    <h2>PHP Defensive Programming</h2>
                                    <hr className="star-primary" />
                                    <img src="img/articles/php.png" className="img-responsive img-centered" alt="" />
                                    <p>PHP Defensive is an aproach in programming with the intent to anticipate likely failure point or unexpected runtime errors.</p>

                                    <p>Check the basic of PHP Defensive Programming <a href="https://mariosandoz.github.io/phpdefensive/#1" target="_blank">here</a>
                                    </p>
                                    <ul className="list-inline item-details">
                                        <li>Created by:&nbsp; 
                                            <strong>mariosandoz
                                            </strong>
                                        </li>
                                        <li>Date:&nbsp; 
                                            <strong>
                                            December 2016
                                            </strong>
                                        </li>
                                        <li>Tag: &nbsp;
                                            <strong>php, programming, remarkjs
                                            </strong>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default PortfolioModal