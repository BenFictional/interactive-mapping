//////////////////////////////
///// CLICK TO PLAY SOUND ////
//////////////////////////////

// To add more than one audio player, copy and paste this whole code block and change 'audioplayer1' to 'audioplayer2' etc.

  $(document).ready(function() {
      var audioPlayer1 = document.createElement('audio');
      // Set audio file
      audioPlayer1.src = "audio/goat.mp3";

      $.get();

      audioPlayer1.addEventListener("load", function() {
          audioPlayer1.play();
      }, true);

      //Set target element with class or ID
      $('.cls-5').click(function() {
          audioPlayer1.currentTime=0;
          audioPlayer1.play();
      });
  });
