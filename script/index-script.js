// jQuery-free logic to select tabs with the navbar
var animationDuration = 200;
var navLinks =  document.getElementsByClassName("nav-link");
var navTabs = document.getElementsByTagName("li");
var sections = document.getElementsByClassName("section");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    var activeTab = document.getElementsByClassName("active");
    activeTab[0].className = "";
    for(var j = 0; j < sections.length; j++) {
      sections[j].style.display = 'none';
    };
    var thisSection;
    var thisTabText = e.target.innerText.trim();
    for (var j = 0; j < navTabs.length; j++) {
      if (navTabs[j].innerText.trim() === thisTabText) {
        navTabs[j].className = "active";
        switch (thisTabText) {
        case "About me":
          thisSection = document.getElementById('about-me');
          break;
        case "Front-end apps":
          thisSection = document.getElementById('front-end');
          break;
        }
        thisSection.style.display = 'block';
      }
    };
  }, false);
};

/*
(function ($) {
  $('#about-me').fadeIn(animationDuration);

  $('.nav-link').click(function() {
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    var tab = this.innerHTML;
    $('.section').fadeOut(animationDuration, function() {
      window.setTimeout(function() {
        switch (tab) {
        case "About me":
          $('#about-me').fadeIn(animationDuration);
          break;
        case "Front-end apps":
          $('#front-end').fadeIn(animationDuration);
          break;
        }
      }, animationDuration * 1.1);
    });
  });
}(jQuery));
*/
