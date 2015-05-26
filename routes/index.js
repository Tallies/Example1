//JSX transpiler
var jsx = require("node-jsx").install({extension: '.jsx', harmony: true});
console.log("JSX transpiler installed.")

//General requires
var express = require('express');
var stringify = require('json-stringify-safe');
var React = require("react");
var Jade = require("jade");

//React components
var Header = React.createFactory(require('../Components/Header.jsx').Header);
var Menu = React.createFactory(require('../Components/Menu.jsx').Menu);
var ContentPanel = React.createFactory(require('../Components/ContentPanel.jsx').ContentPanel);

//Router & config
var router = express.Router();
var config = require("../appconfig.json")

//GET routes
//Regex suck, but it's popular, and is used by router to do matching. This basically only matches: /, /what, /why, /who, /when, /how
router.get(/^(\/|\/what|\/why|\/who|\/how)(?:\/(?=$))?$/i, function(req, res, next) {
	//get the requested page
	var page = getPage(req.url, "what"); 
	
	var initialData = { config:config	};
	var header = getHeader(initialData);
	var menu = getMenu(page, initialData);	
	var contentPanel = getContentPanel(page, initialData);
	
	res.render('index', { title:config.props.title, header : header, menu : menu, contentPanel: contentPanel, initialData:stringify(initialData, null, 2)});
});

//routes for ajax enabled panel component calls
//Regex suck, but it's popular, and is used by router to do matching. This basically only matches: /what/get, /why/get, /who/get, /when/get, /how/get
router.get(/^(\/what\/get|\/why\/get|\/who\/get|\/how\/get)(?:\/(?=$))?$/i, function(req, res, next) {
	//this is a BAD way of delaying the response. It is ONLY here to help show the javascript on the client side kick in to progressively enhance the UX
	setTimeout(function() {
		//get the requested page
		var page = getPage(req.url);	
		var contentPanel = getContentPanel(page);	
		var data = {'contentPanel' : contentPanel};
		res.send(stringify(data, null, 2));
	}, 1500);
});

//Helper methods
//Gets the header html from the react Header component and sets the initial data to share with the react on client
function getHeader(initialData){
	if(initialData) {
		initialData.header = {
			title:config.props.title, 
			headerImageLeft: config.props.headerImageLeft,
			headerImageRight: config.props.headerImageRight
		};								
	}
	return React.renderToString(Header(initialData.header));
}

//Gets the menu html from the react Menu component and sets the initial data to share with the react on client
function getMenu(page, initialData) {
	if(initialData) {
		initialData.menu = { active: page };
	}
	return React.renderToString(Menu(initialData.menu));
}

//Gets the content panel html from the ContentPanel component and set the initial data to share with react on the client 
function getContentPanel(page, initialData) {
	
	var path = express().get("views") + "/" + page + '.jade';
	console.log("Path to view:" +path);
	var content = Jade.renderFile(path, {compileDebug:true});	
	
	if(initialData) {
		initialData.contentPanel = {content:content, loadingImage: config.props.loadingImage};
	}
	else
	{
		initialData ={ contentPanel : { content : content , loadingImage: config.props.loadingImage} };
	}
	
	var contentPanel = React.renderToString(ContentPanel(initialData.contentPanel));
	return contentPanel;
}

//extract the wanted page from the url
function getPage(url, defaultForRoot) {
	if(url === "/") {
		return defaultForRoot;
	}
	
	if(url.indexOf("/") == 0)
		url = url.substr(1);
	var page = url;		
	if(page.indexOf("/get") > 0) {
		page = url.substr(0, url.length - ("/get").length);
	}
	
	if(endsWith(page, "/")) {
		page = page.substr(0, url.length-1);
	}
	return page;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = router;
