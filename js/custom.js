(function () {
  'use strict';

  // Custom scripts
  document.addEventListener("DOMContentLoaded", function() {

    // Live Awesomplete Search
  	var inputHero = document.getElementById("search-hero");

    var list = [
          { label: "What even is Waldo?", 					        value: "article.html" },
          { label: "What is Waldo's goal?", 						        value: "article.html" },
          { label: "How can I help?", 				      value: "article.html" },
          { label: "How can I send in my gameplay?", 	value: "article.html" },
          { label: "Will Waldo also be able to process other FPS games?", 					        value: "article.html" }
        ];

    if (inputHero) {
      inputHero.addEventListener("awesomplete-selectcomplete", function(e) {
        window.location.href = e.text.value;
      }, false);

      new Awesomplete(inputHero, {
        autoFirst: true,
        list: list,
        replace: function(suggestion) {
          this.input.value = suggestion.label;
        }
      });
    }

  });

}());
