$( function() {
    $( "#dragtarget1" ).draggable();
          } );

setTimeout(function() { // Added missing {
    var timeleft = 10;
    
    // Show the starting number immediately
    document.getElementById("countdown").innerHTML = timeleft;

    var downloadTimer = setInterval(function() {
        timeleft -= 1; // Decrement first
        
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "0";
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
    }, 1000);
}, 0); // 2. Added missing closing parenthesis and optional delay