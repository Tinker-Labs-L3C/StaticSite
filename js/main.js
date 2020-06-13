'use strict';
/*____________________________________________________________________________________*/
// Varibles
var dl = document.getElementById('drawLine');
var mastHeader = document.getElementById('mastHeader');
var mastParagraph = document.getElementById('mastParagraph');

/*____________________________________________________________________________________*/
// Constants
const sliderContainer = document.getElementById('sliderContainer');
const mercurySlide = document.getElementById('mercurySlide');
const venusSlide = document.getElementById('venusSlide');
const earthSlide = document.getElementById('earthSlide');
const marsSlide = document.getElementById('marsSlide');
const jupiterSlide = document.getElementById('jupiterSlide');
const saturnSlide = document.getElementById('saturnSlide');
const uranusSlide = document.getElementById('uranusSlide');
const neptuneSlide = document.getElementById('neptuneSlide');
const masthead = document.getElementById('masthead');
const menuTemp = document.getElementById('menuTemp');
const navbarBrand = document.getElementById("navbarBrand");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const teamLink = document.getElementById("teamLink");
const contactLink = document.getElementById("contactLink");
const mainNav = document.getElementById('menuTemp');
const body = document.getElementById('body');

/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});

// setCSS and find_replaceCSS were all rewritten from
// http://www.javascriptkit.com/dhtmltutors/externalcss3.shtml
// using the "styleSheet" object

function setCSS(stylesheet, rule, styleType, replacement) {
  var mainCss = document.styleSheets[stylesheet];
  var firstrule = mainCss.cssRules? mainCss.cssRules[rule]: mainCss.rules[rule];
  firstrule.style[styleType]  = replacement;
}

function find_replaceCSS(stylesheet, tag, styleType, replacement) {
  var mainCss = document.styleSheets[stylesheet]
  var firstrule = mainCss.cssRules? mainCss.cssRules: mainCss.rules;
  var i; // The varable 'i' must be initialized before the loop or it will break.
  for (i=0; i<firstrule.length; i++){
    if(firstrule[i].selectorText.toLowerCase() == tag){
      break;
    }
  }
  var cssRuleNumber = mainCss.cssRules? mainCss.cssRules[i]: mainCss.rules[i];
  cssRuleNumber.style[styleType]  = replacement;
}

function showText(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function setBgHead() {
  var wth = $('header').width() + 'px';
  var hgt = $('header').height() + 'px';
  console.log(hgt);
  const bgHead = document.getElementById('bgHead');
  bgHead.setAttribute('width', wth);
  bgHead.setAttribute('height', hgt);
}


function starter() {
  dl.setAttribute('style', 'width: 300px');
  window.setTimeout(function(){
    dl.setAttribute('style', 'transform: rotate(360turn)');
  }, 900);
}

// These are the color schemes for the planets.

function mercuryColor() {
  var textColor = "#CECCD1";
  var headerColor = "#7b7b7b";
  mastHeader.innerHTML = "v1.0 Mercury";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #504E51, #615F62)');
}

function venusColor() {
  var textColor = "#C09445";
  var headerColor = "#9f5c2b";
  mastHeader.innerHTML = "v1.2 Venus";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #612b12, #da6a36 ');
}

function earthColor() {
  var textColor = "#868a92";
  var headerColor = "#404658";
  mastHeader.innerHTML = "v1.5 Earth";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #404658, #747d9a');
}

function marsColor() {
  var textColor = "#dbbf88";
  var headerColor = "#5f594b";
  mastHeader.innerHTML = "v2.0 Mars";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #5f594b, #9d9583');
}

function jupiterColor() {
  var textColor = "#CECCD1";
  var headerColor = "#5a5955";
  mastHeader.innerHTML = "v3.0 Jupiter";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #47484A, #595A5C)');
}

function saturnColor() {
  var textColor = "#CECCD1";
  var headerColor = "#5d512a";
  mastHeader.innerHTML = "v3.4 Saturn";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #515340, #7c7f62)');
}

function uranusColor() {
  var textColor = "#CECCD1";
  var headerColor = "#415254";
  mastHeader.innerHTML = "v3.5 Uranus";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #627c7c, #a3c6c9)');
}

function neptuneColor() {
  var textColor = "#CECCD1";
  var headerColor = "#353840";
  mastHeader.innerHTML = "v3.6 Neptune";
  mastParagraph.innerHTML = "Something else here";
  mastHeader.setAttribute('style', `color: ${headerColor}`);
  mastParagraph.setAttribute('style', `color: ${textColor}`);
  navbarBrand.setAttribute('style', `color: ${textColor}`);
  homeLink.setAttribute('style', `color: ${textColor}`);
  aboutLink.setAttribute('style', `color: ${textColor}`);
  teamLink.setAttribute('style', `color: ${textColor}`);
  contactLink.setAttribute('style', `color: ${textColor}`);
  menuTemp.setAttribute('style', 'background-color: transparent');
  masthead.setAttribute('style', 'background-image:  linear-gradient(to bottom right, #4d5062, #9daad5)');
}

/*
Event Listners
*/

$(body).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
