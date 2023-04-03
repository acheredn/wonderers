AFRAME.registerComponent('cursor-listener', {
    init: function() {
        var vid = document.querySelector('#night-market');
        var videoControls = document.querySelector('#videoControls')
        this.el.addEventListener('click', function() {
            vid.play();
        })
    }
})

// // Component to change to a sequential color on click.
// AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//       var lastIndex = -1;
//       var COLORS = ['red', 'green', 'blue'];
//       this.el.addEventListener('click', function (evt) {
//         lastIndex = (lastIndex + 1) % COLORS.length;
//         this.setAttribute('material', 'color', COLORS[lastIndex]);
//         console.log('I was clicked at: ', evt.detail.intersection.point);
//       });
//     }
//   });