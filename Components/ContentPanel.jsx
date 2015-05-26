/** @jsx React.DOM */

var React = require("react");

//SEE BELOW
// var WhatContentPanel = require("./WhatContentPanel.jsx").WhatContentPanel;
// var WhyContentPanel = require("./WhyContentPanel.jsx").WhyContentPanel;
// var WhoContentPanel = require("./WhoContentPanel.jsx").WhoContentPanel;
// var HowContentPanel = require("./HowContentPanel.jsx").HowContentPanel;

var ContentPanel = React.createClass({
	//Allows a consumer to indicate that the content has changed
	setContent : function(content) {
		this.setState({content : content});
	},
	
	//Allows a consumer to indicate that the component should show the "loading" image and remove the current content.
	setLoading: function(){
		this.setState({content: "<image src='" + this.props.loadingImage + "'/>"})
	},
	
	//React lifecycle methods
	getInitialState: function() {
		return {content:this.props.content};
	},
	
	render: function(){
		
		//DON'T DO IT THIS WAY!! USE THE Jade RENDERING ENGINE FOR CONTENT
		//What happens when you wrap the content in jsx compenents is that all the content is 
		//sent down to the client as the JSX components are browserfied into main.js. Also, it's not very
		//dynamic.
		// var panel = (function() {
			// switch(that.props.panel)
			// {
				// case "what":
					// return (
					// <WhatContentPanel/>
					// );
				// case "why":
					// return (
					// <WhyContentPanel/>
					// );
				// case "who":
					// return (
					// <WhoContentPanel/>
					// );
				// case "how":
					// return (
					// <HowContentPanel/>
					// );
			// }
		// })();
		//END OF LESSON-LEARNED
		
		//Do it this way. Even more correct is to have the Jade parse on client side and compile the raw jade 
		//script to html. However, for this example the following will suffice. 
		//***NB*** - I do not recommend the use of "dangerouslySetInnerHTML"! Don't use it in production react components!
		var createHtml = function(){
			return {__html: this.state.content};
		}.bind(this);
		return (
			<div dangerouslySetInnerHTML={createHtml()} />		
		);
	}
});

module.exports.ContentPanel = ContentPanel;
