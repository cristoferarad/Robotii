import React, { Component } from 'react';

 class ErrorBoundry extends Component {
 	constructor() {
 		super(props);
 		this.state = { 
 			hasError: false
 		}
 	}

 	componentDidCath(error, info){
 		this.setstate({hasError: true})

 	}

 	render() {
 		if (this.state.hasError) {
 			return <h1>Ooooops, that is not good</h1>
 		}
 		return this.props.children
 	}
 }

 export default ErrorBoundry;