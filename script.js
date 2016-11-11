    id1.addEventListener('click', function() {
        document.getElementById('id2').style.borderBottom = '3px solid transparent';
        document.getElementById('id3').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });
    id2.addEventListener('click', function() {
        document.getElementById('id1').style.borderBottom = '3px solid transparent';
        document.getElementById('id3').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });
    id3.addEventListener('click', function() {
        document.getElementById('id1').style.borderBottom = '3px solid transparent';
        document.getElementById('id2').style.borderBottom = '3px solid transparent';
        this.style.borderBottom = (this.style.borderBottom == '3px solid transparent') ? '3px solid white' : '3px solid transparent';
    });




    (function() {

      "use strict";

      var toggles = document.querySelectorAll(".c-hamburger");

      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };



      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
      }


    })();


    /*Dropdown menu*/

    	function myFunction() {
    		document.getElementById("myDropdown").classList.toggle("show")
    		;
    	}

    /*Close dropdown when clicking outside*/

    	window.onclick = function(event) {
      if (!event.target.matches("#hamburgerknapp")) {

        var dropdowns = document.getElementsByClassName("smallscreen");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
