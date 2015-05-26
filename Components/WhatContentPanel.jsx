/** @jsx React.DOM */

// This was my first pass at the content panel data. It works, but has a serious drawback, which is why I don't do it this way, but keep it here for informational purposes.
//The problem is that browserfy will package these content specific pages into /public/javascripts/main.js. If these content item are large, then that will significantly bloat
// the main.js file. Also, this technique complete nullifies any dynamic data loading you want to do for content. 

var React = require("react");

var WhatContentPanel = React.createClass({
	
	//React lifecycle methods
	render: function(){
		return (
			<div>
			<h2>What?</h2>
			<p>
					Node! React! Isomorphic web sites! Single page web sites! Progressive enhancement! OMG!! What?!?!?!
				</p>
				<p>
					Yep, those words and phrases are scary. They're daunting. They're complete buzzwords. And all totally relevant to modern web development. You need to know what those things are if you're developing web sites. 
					This website demonstrates an progressively enhanced, react.js based isomorphic node.js hosted web site. Sheesh... I crapped my pants a little just writing that! 
				</p>
				<p>
					This site will run just fine in browsers with JavaScript disabled. On browsers where JavaScript is enabled, this site magically transforms to... look exactly the same! Although, it does become a single page app. You'll have 
					to delve into  <a href="/how">How</a> to find out the what the magic is. Suffice it to say however that there is no duplication of work to progressively enhance the site where JavaScript is required. With React.js, one simple extends the components to support JavaScript 
					when available. Although progressive enhancement has been around for a while, I think React.js and the isomorphic web development it offers has finally made it simple and straight forward to do.
				</p>
			</div>
		)
	}
});

module.exports.WhatContentPanel = WhatContentPanel