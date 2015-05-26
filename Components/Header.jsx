/** @jsx React.DOM */

var React = require("react");

var Header = React.createClass({
	//React lifecycle methods
	render: function() {				
		return (
			<div>
				<img className="header left" src={this.props.headerImageLeft}/>
				<span className="header"><h1>{this.props.title}</h1></span>
				<img className="header right" src={this.props.headerImageRight}/>
				<div className="clear"/>				
			</div>
		);
	}
});

module.exports.Header = Header;