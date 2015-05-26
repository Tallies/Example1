/** @jsx React.DOM */

// This was my first pass at the content panel data. It works, but has a serious drawback, which is why I don't do it this way, but keep it here for informational purposes.
//The problem is that browserfy will package these content specific pages into /public/javascripts/main.js. If these content item are large, then that will significantly bloat
// the main.js file. Also, this technique complete nullifies any dynamic data loading you want to do for content. 

var React = require("react");

var WhoContentPanel = React.createClass({
	
	//React lifecycle methods
	render: function(){
		return (
			<div className="who">
				<h2>Who?</h2>
				<p className="who">
					<img className="who" src="images/charl.jpg"/> <span  className="who">=</span> <img className="who" src="images/Tals_Monkey.png"/>
				</p>
				<p>
					My name is Charl "Tallies the TechnoMonkey" Marais. Tallies for short.
				</p>
				<p>
					I've been building software for 17 years, mostly on the Microsoft stack. I'm a C# developer mostly. I've build applications 
					ranging from desktop applications, to web applications, to high volume back-end systems. I've worked in Java, VB6 (I know!), C#.Net and all the web technologies you can shake a stick at.
				</p>
				<p>
					I'm currently employed at the <a href="http://www.newmedialabs.co.za">New Media Labs</a>. It's a vibrant company with a bright future, and dedicated and talented developers. I'm lead of custom 
					software development, making sure our developers have the skillsets to build the best software for our clients possible.
				</p>
				<p>
					Hit me up on twiiter: @talsmonkey!
				</p>
			</div>
		)
	}
});

module.exports.WhoContentPanel = WhoContentPanel;