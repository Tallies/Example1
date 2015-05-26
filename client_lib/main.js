/**
This is the main file run used by browserify and is run in the browser. 
In this file you combine and hook up all the react components in the browser. 

Note that browserfy takes this file and combines it with all the references (requires) and puts it all in one file.
*/

var React = require('react');
var Header = require('../Components/Header.jsx').Header;
var Menu = require("../Components/Menu.jsx").Menu;
var ContentPanel = require("../Components/ContentPanel.jsx").ContentPanel;
var $ = require("jquery");

//Events and helper functions
var loadSuccessfull = function(name, data) {
	contentPanel.setContent(data.contentPanel);
	menu.setMenu(name);
};

var loadFail = function(xhr, status, error) {
	contentPanel.setContent("Error loading content. " +status +" - " + error);
	console.log("Failed to call server: " + error);
};

//Handles all clicks on the menu. It passed through as a callback since the menu clicks need to affect the 
//content panel.
var menuClickHandler = function(name) {
	contentPanel.setLoading();
	$.ajax({
			url:name+ "/get",
			type:"GET",
			dataType:"json",
			success: function(data) { loadSuccessfull(name, data) },
			error: loadFail
		});
};

//Helper functions
var getPage = function() {
	var urlparts = document.location.href.split("/");
	var page = urlparts[urlparts.length-1];
	return page;
}

//Create and mount the components
var headerMountNode = document.getElementById("react-header-node");
React.render(React.createElement(Header, { title: initialData.header.title, headerImageLeft:initialData.header.headerImageLeft, headerImageRight: initialData.header.headerImageRight }), headerMountNode);

var page = getPage();
var menuMountNode = document.getElementById("react-menu-node");
var menu = React.render(React.createElement(Menu, {active:initialData.menu.active, menuClickHandler: menuClickHandler}), menuMountNode);

var contentPanelMountNode = document.getElementById("react-content-panel-node");
var contentPanel = React.render(React.createElement(ContentPanel, {content: initialData.contentPanel.content, loadingImage: initialData.contentPanel.loadingImage}), contentPanelMountNode);	
