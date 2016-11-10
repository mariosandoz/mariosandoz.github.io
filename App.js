import React from 'react';
import Navbar from './Navbar';

class App extends React.Component{
	constructor(arg){
		super(arg)
	}
	render(){
		return(
			<div>
				<Navbar />
			</div>
		)
	}
}

export default App