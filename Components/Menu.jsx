/** @jsx React.DOM */

var React = require("react");
var MenuItem = require("./MenuItem.jsx").MenuItem;

var Menu = React.createClass({
	//custom methods
	//Allow a consumer to inform the menu that a new menu should be activated.
	setMenu : function(menu) {
		this.setState({active:menu});
	},
	
	menuClickHandler : function(evt){		
		this.props.menuClickHandler(evt)
	},

	//React lifecycle methods
	getInitialState: function(){
		return { active : this.props.active };
	},
	
	render: function() {		
		var createMenu = function(name, caption) {
			return (
				<MenuItem menuName={name} active={this.state.active} menuClickHandler={this.menuClickHandler}>{caption}</MenuItem>
			)
		}.bind(this);
		
		return (
				<ul className="menu">
					{createMenu("what", "What?")}
					{createMenu("why", "Why?")}
					{createMenu("who", "Who?")}
					{createMenu("how", "How?")}					
				</ul>
		);
	}
});

module.exports.Menu = Menu;
