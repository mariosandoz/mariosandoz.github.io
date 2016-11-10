import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component{
	constructor(arg){
		super(arg)
	}
	render(){
		return(
			<div>
				<Navbar />
				<Header />
				<Portfolio />
				<About />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default App