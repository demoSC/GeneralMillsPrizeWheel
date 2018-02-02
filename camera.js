// function getUserMedia(options, successCallback, failureCallback) {
//   var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//     navigator.mozGetUserMedia || navigator.msGetUserMedia;
//   if (api) {
//     return api.bind(navigator)(options, successCallback, failureCallback);
//   }
// }

let spinWheel;


let starter = function(){

  spinWheel = new Winwheel({
          'drawMode' : 'image',
          'canvasId' : 'canvas',
          'drawText': true,
          'textOrientation' : 'curved',
          'textAlignment' : 'outer',
          'textFontSize'    : 16,
          // 'numSegments' : 2,
          // 'segments' : [
          //     {'textFillStyle': '#00b300','text' : '$1'},
          //     {'textFillStyle': '#00b300','text' : '$2'}



          // // 'fillStyle' : '#cc66ff',  //colors used in revtrax wheel
          // // 'fillStyle' : '#3366ff', 
          // // 'fillStyle' : '#99ccff',

          // ],
          'lineWidth' : 2,
          'animation' :                   // Note animation properties passed in constructor parameters.
              {
              'type'     : 'custom',  // Type of animation.
              'duration' : 4,             // How long the animation is to take in seconds.
              'spins'    : 6,         // The number of complete 360 degree rotations the wheel is to do.
              'easing'       : 'Power4.easeOut',
              'direction'    : 'clockwise',
              'repeat'       : 0,
              'yoyo'         : false,
              'propertyName' : 'rotationAngle',
              'propertyValue' : 2160
              }
    });

  let loadedImg = new Image();
  // loadedImg.width = '300px';
  // loadedImg.height = '300px';
  loadedImg.onload = function(){

      spinWheel.wheelImage = loadedImg;
      spinWheel.draw();

  }

  loadedImg.src = "pizzaRoll.png";

  getStream();

};





function getStream () {
  // if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
  //   !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
  //   alert('User Media API not supported.');
  //   return;
  // }


    //var video = document.getElementById('vid');
    // video.style.width = document.width + 'px';
    // video.style.height = document.height + 'px';
    // video.setAttribute('autoplay', '');
    // video.setAttribute('muted', '');
    // video.setAttribute('playsinline', '');
    let area = document.getElementById("box");
    area.height= window.innerHeight;
    area.style.height = window.innerHeight;
    // area.style.width = window.innerWidth;

    var video = document.querySelector('video');
    var constraints = {
        audio: false,
        video: {
          facingMode: "user",
          // width: window.innerWidth,
          // height: window.innerHeight
        }

    };



  navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function(err) { alert('Error: ' + err); });






  // navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  //   var video = document.querySelector('video');
  //   video.srcObject = mediaStream;
  //   video.onloadedmetadata = function(e) {
  //     video.play();
  //   };
  // }).catch(function(err) { alert('Error: ' + err); });
  //constraints[type] = true;
  // getUserMedia(constraints, function (stream) {
  //   var mediaControl = document.querySelector(type);
  //   if (navigator.mozGetUserMedia) {
  //     mediaControl.mozSrcObject = stream;
  //   } else {
  //     mediaControl.srcObject = stream;
  //     mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
  //   }
  // }, function (err) {
  //   alert('Error: ' + err);
  // });
};

let congrats = function(){

    let crown = document.getElementById('crown');
    crown.style.visibility = "visible";

    let ticket = document.getElementById('ticket');
    ticket.style.visibility = "visible";

};



let prize = function(){

  spinWheel = new Winwheel({
          'drawMode' : 'image',
          'canvasId' : 'canvas',
          'drawText': true,
          'lineWidth' : 2,
          'animation' :                   // Note animation properties passed in constructor parameters.
              {
              'type'     : 'custom',  // Type of animation.
              'duration' : 20,             // How long the animation is to take in seconds.
              'easing'       : 'Power4.easeOut',
              'repeat'       : 0,
              'yoyo'         : false,
              'propertyName' : 'centerY',
              'propertyValue' : 2070
              }
    });

    let loadedImg = new Image();
    // loadedImg.width = '300px';
    // loadedImg.height = '300px';
    loadedImg.onload = function(){

        spinWheel.wheelImage = loadedImg;
        spinWheel.draw();

    }

    loadedImg.src = "pizzaRoll.png";
    let pick = document.getElementById('prizePointer');
    pick.parentNode.removeChild(pick);
    let ban = document.getElementById('banner');
    ban.parentNode.removeChild(ban);
    spinWheel.startAnimation();

    setTimeout(congrats, 1000);



}

let picker = function(){
    spinWheel.startAnimation();
    setTimeout(prize, 4000);



};


window.onload = function(){
  starter();
}