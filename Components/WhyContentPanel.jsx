/** @jsx React.DOM */

// This was my first pass at the content panel data. It works, but has a serious drawback, which is why I don't do it this way, but keep it here for informational purposes.
//The problem is that browserfy will package these content specific pages into /public/javascripts/main.js. If these content item are large, then that will significantly bloat
// the main.js file. Also, this technique complete nullifies any dynamic data loading you want to do for content. 

var React = require("react");

var WhyContentPanel = React.createClass({
	
	//React lifecycle methods
	render: function(){
		return (
			<div>
				<h2>Why?</h2>
				<p>
					You dolt! There are loads of React.js and Node.js examples and tutorials out there! Why another one?! You're filling up the webz!!!
				</p>
				<p>
					Yes, there certainly are other examples of isomorphic React.js with Node.js implementations out there. However, I really, really struggled to make head or tales of 90% of what those examples showed. The biggest problem 
					was my severe ignorance around the technologies involved. Not just React.js and Node.js. Those guys were easy! 
				</p>
				<p>
					The biggest obstacle was all the supporting tech to enable an isomorphic implementation of React.js on Node.js. What is requied and where do they fit in the big picture. What do they do. Why are things where they are in the examples and not where my 
					flat head tells me they should be? 
				</p>
				<p>	
					I know the lingo, and I've even messed around here and there just to try and keep up to date. However, I'm an old school C# developer, and hoo-boy was I in for a suprise in getting a simple
					little example going!
				</p>
				<p>
					And that's the why. In this example, I put more focus on what, and why, than on how. The how is a logical progression once you understand the what and why. Figuring this out, I went from the how, without understanding the 
					what and the why, and guess what happened?! Dem shifty libraries had done and gone and changed since the tutorial I waz following, and it damned near broke my spirit. 
				</p>
				<p>
					Once I figured out all the little pieces and their proper function and place, it took two less that two days to build the website. Most of that was spent in CSS trying to align, float, bla, bla, shoot my brains out... The JSX components 
					were easy, fast and wonderfully simple. 
				</p>
			</div>
		)
	}
});

module.exports.WhyContentPanel = WhyContentPanel