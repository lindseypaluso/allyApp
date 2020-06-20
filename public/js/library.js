//this is where the js & jQuery will process requests for the library page
//Planning on using https://www.w3schools.com/howto/howto_js_filter_elements.asp
$(".lib-btn").on("click", function() {
  var selector = $(this).data("filter");
  console.log(selector);
  filterSelection(selector);
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv") ;

  console.log(x);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
    if (x[i].dataset.category == c) {
      addClass(x[i], "show");
    } else {
      x[i].classList.remove("show");
    }
    if (c == "all" || c == "") {
      addClass(x[i], "show");
    };
  }
  console.log("working");
}

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-menu");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
