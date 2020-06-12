'use strict';
// Varibles
var dl = document.getElementById('drawLine');
var mastHeader = document.getElementById('mastHeader');
var mastParagraph = document.getElementById('mastParagraph');

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
Functions
*/

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});

// searchCSS, setCSS, and find_replaceCSS were all rewritten from
// http://www.javascriptkit.com/dhtmltutors/externalcss3.shtml
// using the "styleSheet" object

function setCSS(stylesheet, rule, styleType, replacement) {
  var mainCss = document.styleSheets[stylesheet];
  var firstrule = mainCss.cssRules? mainCss.cssRules[rule]: mainCss.rules[rule];
  firstrule.style[styleType]  = replacement;
}

function find_replaceCSS(stylesheet, tag, styleType, replacement) {
  var css = document.styleSheets[stylesheet]
  var cssRule = css.cssRules? css.cssRules: css.rules;
  var i;
  for (i = 0; i < cssRule.length; i++){
    if(cssRule[i].selectorText.toLowerCase() == tag){
      break;
    }
  }
  var cssRuleNumber = css.cssRules? css.cssRules[i]: css.rules[i];
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

// https://stackoverflow.com/a/31223774
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st >= 100){
     console.log('Below')
   } else {
     console.log('Above')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// These controles are to reset the color scheme based on current planet active.

sliderContainer.addEventListener('mousemove', function() {
  if (mercurySlide.classList.contains('swiper-slide-active')) {
    console.log("mercurySlide is active");
    mercuryColor();
  }
  else if (venusSlide.classList.contains('swiper-slide-active')) {
    venusColor()
  }
  else if (earthSlide.classList.contains('swiper-slide-active')) {
    earthColor()
  }
  else if (marsSlide.classList.contains('swiper-slide-active')) {
    marsColor()
  }
  else if (jupiterSlide.classList.contains('swiper-slide-active')) {
    jupiterColor()
  }
  else if (saturnSlide.classList.contains('swiper-slide-active')) {
    saturnColor()
  }
  else if (uranusSlide.classList.contains('swiper-slide-active')) {
    uranusColor()
  }
  else if (neptuneSlide.classList.contains('swiper-slide-active')) {
    neptuneColor()
  }
  else if (mercurySlide.classList.contains('swiper-slide-active')) {
    mercuryColor();
  }
});

sliderContainer.addEventListener('touchstart', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // do your action on your 'li' or whatever it is you're listening for
  }
});
