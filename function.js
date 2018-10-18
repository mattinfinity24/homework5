var inflateContainer = document.getElementById("inflate1");
var deflateContainer = document.getElementById("deflate");

//document.addEventListener('keyup', function(e) {} )
//document.addEventListener('keydown', function(e) {} )

//document.onkeypress = function(e) {

// Plus
    function myEventHandler(e) {
        e = e || window.event;
        var charCode = e.which || e.keyCode === 107;
        var charStr = String.fromCharCode(charCode);
        var inflate = inflateContainer;
        if (charStr == "+") { 
            inflate;
            alert("You have inflated the balloon size by 15px.");
        }
    };

    function myEventHandler2(e) {
    e = e || window.event;
    var charCode = e.which || e.keyCode === 109;
    var charStr = String.fromCharCode(charCode);
    var deflate = deflateContainer;
    if (charStr == "-") {
        deflate;
        alert("You have deflated the balloon size by 15px.");
    }
};

document.addEventListener('keypress', myEventHandler, false);
document.addEventListener('keypress', myEventHandler2, false);



// Create a named function as your event handler
/* var plus = function (e) {
    if (e.keyC === 107) {
        document.getElementById("inflate").addEventListener("keyup", plus);
    // Else if the total size > 60px, then display the firework emoji
     // document.removeEventListener("keyup", plus);
    }
  };

  var minus = function (e) {
    if (e.which === 109) {
      // Do your stuff here
      document.getElementById("deflate").addEventListener("keydown", minus);
    // Else if the total size < 0px, then replace the balloon element with a text of "Done"
  // document.removeEventListener("keydown", minus);
    }
}; 
*/