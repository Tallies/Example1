/** @jsx React.DOM */

// This was my first pass at the content panel data. It works, but has a serious drawback, which is why I don't do it this way, but keep it here for informational purposes.
//The problem is that browserfy will package these content specific pages into /public/javascripts/main.js. If these content item are large, then that will significantly bloat
// the main.js file. Also, this technique complete nullifies any dynamic data loading you want to do for content. 

var React = require("react");

var HowContentPanel = React.createClass({
	
	//React lifecycle methods
	render: function(){
		return (
			<div>
				<h2>How?</h2>
				<p>
					Here is the magic formula: 
					<ol>
						<li>Build you React.js components and pages exclusively for no javascript. </li>
						<li>Extend you React.js components to use javascript if available.</li>
					</ol>
					In other words, build React.js component for server-side rendering only first. Once the site works as excpected, extend you components to support javascript in the browser. 
				</p>
				
			</div>
		)
	}
});

module.exports.HowContentPanel = HowContentPanel;