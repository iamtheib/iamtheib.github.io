// Email.js version 5

var m_ = "mailto:";
var a_ = "@";
var d_ = ".";

function mail(name, dom, tl, params) {
	var s = e(name,dom,tl);
	document.write('<a href="'+m_+s+params+'">'+s+'</a>');
}

function mail2(name, dom, tl, params, display) {
	document.write('<a href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
}

function e(name, dom, tl) {
	return name+a_+dom+d_+tl;
}