// jQuery-free logic to select tabs with the navbar
var animationDuration = 400;
var animationDelay = 10;
var navLinks = document.getElementsByClassName('nav-link');
var navTabs = document.getElementsByTagName('li');
var sections = document.getElementsByClassName('section');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
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
    var thisTabText = e.target.innerText.trim();
    for (var k = 0; k < navTabs.length; k++) {
      if (navTabs[k].innerText.trim() === thisTabText) {
        navTabs[k].className = 'active';
        switch (thisTabText) {
          case 'About me':
            thisSection = document.getElementById('about-me');
            break;
          case 'Front-end apps':
            thisSection = document.getElementById('front-end');
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
document.getElementById('about-me').style.cssText =
'display: block; opacity: 1;';

document.getElementById('tablet-button').addEventListener('click', function (e) {
  var iframe = document.getElementById('tablet-iframe');
  iframe.style.display = 'none';
}, false);
