$(document).ready(function() {
  
    var counter = 0;
    var c = 0;
    var perfData = window.performance.timing // The PerformanceTiming interface
    var estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart) // Calculated Estimated Time of Page Load which returns negative value.
    var time = parseInt((estimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.
    var i = setInterval(function(){
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
  
      /*
      $(".loading-page .counter h1.color").css("width", c + "%");
      */
      counter++;
      c++;
        
      if(counter == 101) {
          clearInterval(i);
      }
    }, estimatedTime/100);
  });
  
  
  