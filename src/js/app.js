// JS Goes here - ES6 supported
// import Rellax from 'rellax';

import Headroom from './headroom.js';
// import ZenScroll from 'zenscroll';
// import ScrollReveal from 'scrollreveal';

document.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");
  // // RellaxJS
  // var rellax = new Rellax('.rellax');

  // HeadroomJS
  var nav = document.getElementById('navigation');
  var headroom = new Headroom(nav, {
    "offset": 500,
    "tolerance": {
      "up": 0,
      "down": 20
    },
    "onBottom": function() {
      var nav = document.getElementById('navigation');
      nav.classList.remove('headroom--unpinned');
      nav.classList += ' headroom--pinned';
    }
  });
  headroom.init();

  // Scroll Reveal
  // window.sr = ScrollReveal({ reset: true });
  // sr.reveal('.ml-fade-in', {
  //   "container": ".ml-sr-wrap",
  //   "origin": "left",
  //   "duration": 1000,
  //   "delay": 1000,
  //   "opacity": 0,
  //   "scale": 1,
  //   "easing": "ease-out",
  //   "mobile": false,
  //   "useDelay": "once",
  //   "viewFactor": 0.5,
  //   "beforeReveal": function () {
  //     var srList = document.getElementsByClassName('ml-fade-in');
  //     for ( var i = 0; i < srList.length; i++ ) {
  //       srList[i].classList.add('ml-visible');
  //       // console.log(srList[i]);
  //     }
  //     // console.log(srList);
  //   }
  // });
});