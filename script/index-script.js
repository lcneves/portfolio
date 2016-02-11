var myPortfolio = (function () {

  // jQuery-free logic to select tabs with the navbar
  var animationDuration = 400;
  var animationDelay = 10;
  var navLinks = document.getElementsByClassName('nav-link');
  var navTabs = document.getElementsByTagName('li');
  var sections = document.getElementsByClassName('section');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
      e = e ? e : window.event; // Sounds funny
      var activeTab = document.getElementsByClassName('active');
      activeTab[0].className = '';
      for (var j = 0; j < sections.length; j++) {
        sections[j].style.opacity = '0';
        (function (thisJ) {
          window.setTimeout(function () {
            sections[thisJ].style.display = 'none';
          }, animationDuration);
        }(j));
      }
      var thisSection;
      var thisTabText = e.target ?
        e.target.textContent.trim() : e.srcElement.textContent.trim();
      for (var k = 0; k < navTabs.length; k++) {
        if (navTabs[k].textContent.trim() === thisTabText) {
          navTabs[k].className = 'active';
          switch (thisTabText) {
            case 'About me':
              thisSection = document.getElementById('about-me');
              document.documentElement.style.boxShadow =
              'inset 0 0 20em 2em #aaa7a2';
              document.documentElement.style.backgroundColor =
              '#dedcd9';
              break;
            case 'Front-end apps':
              thisSection = document.getElementById('front-end');
              document.documentElement.style.boxShadow =
              'inset 0 0 20em 2em #ca8782';
              document.documentElement.style.backgroundColor =
              '#febcb9';
              break;
          }
          window.setTimeout(function () {
            thisSection.style.display = 'block';
            window.setTimeout(function () {
              thisSection.style.opacity = '1';
            }, animationDelay);
          }, animationDelay + animationDuration);
        }
      }
    }, false);
  }

  // Run once
  var menuButtom = document.getElementById('tablet-menu-div');
  var menu = document.getElementById('tablet-menu');
  var iframe = document.getElementById('tablet-iframe');

  document.getElementById('about-me').style.cssText =
  'display: block; opacity: 1;';

  // Event listeners for mouse clicks on certain elements
  document.getElementById('tablet-button').addEventListener('click', function (e) {
    closeTabletMenu();
    iframe.style.opacity = menuButtom.style.opacity ='0';
    window.setTimeout(function () {
      iframe.style.display = menuButtom.style.display = 'none';
      iframe.src = 'about:blank';
    }, animationDuration);
  }, false);

  menuButtom.addEventListener('click', function (e) {
    if (menu.style.display !== 'inline-block') {
      openTabletMenu();
    } else {
      closeTabletMenu();
    }
  }, false);

  // Functions to animate the UI
  var openTabletMenu = function () {
    menu.style.display = 'inline-block';
    window.setTimeout(function () {
      menu.style.opacity = '1';
    }, animationDuration / 2);
  };

  var closeTabletMenu = function () {
    menu.style.opacity = '0';
    window.setTimeout(function () {
      menu.style.display = 'none';
    }, animationDuration / 2);
  };

  var openApp = function (url) {
    iframe.src = url + 'index.html';
    iframe.style.display = 'block';
    menuButtom.style.display = 'flex';
    window.setTimeout(function () {
      iframe.style.opacity = menuButtom.style.opacity = '1';
    }, 200); // Arbitrary time to load app
  }

  // Exporting the functions above to index-react.js
  return {
    openTabletMenu: openTabletMenu,
    closeTabletMenu: closeTabletMenu,
    openApp: openApp
  }
})();
