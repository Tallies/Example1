/** @jsx React.DOM */

var React = require("react");

var Header = React.createClass({
	//React lifecycle methods
	render: function() {				
		return (
			<div>
				<div className="left">
					<img src={this.props.headerImageLeft}/>
				</div>
				<div className="center">
					<span><h1>{this.props.title}</h1></span>
				</div>
				<div className="right">
					<img src={this.props.headerImageRight}/>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
});

module.exports.Header = Header;