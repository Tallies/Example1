/** @jsx React.DOM */

var React = require("react");
var _ = require("underscore");
var $ = require("jquery");


var MenuItem = React.createClass({
	//custom methods
	getCss: function() {
		var css = "menuItem";
		
		if (this.props.active==this.props.menuName) {
			css +=  " menuItemActive" ;
		}
		return css;
	},
	
	getUrl : function() {
		 return "/" + this.props.menuName;
	},
	
	getText : function() {
		return this.props.children.toString();
	},

	//React lifecycle methods
	componentDidMount : function(){
		var that = this;
		var domNode = React.findDOMNode(this)
		var lastSlash = domNode.firstChild.href.lastIndexOf("/");
		var firstPart = domNode.firstChild.href.substr(0, lastSlash);
		var lastPart = domNode.firstChild.href.substr(lastSlash + 1);
		domNode.firstChild.href = firstPart + "#" + lastPart;
		$(domNode.firstChild).on('click', function(evt) {
			that.props.menuClickHandler(lastPart);
			evt.preventDefault();
		});
	},
		
	render: function() {
		return (
		<li className="menuItem">
			<a className={this.getCss()} id={this.props.menuName} href={this.getUrl()}>
				{this.getText()}
			</a>
		</li>
		)
	}
});

module.exports.MenuItem = MenuItem;