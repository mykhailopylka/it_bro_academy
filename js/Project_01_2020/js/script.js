/*
var animation = lottie.loadAnimation({
  container: document.getElementById('svgContainer'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  //path: 'https://assets10.lottiefiles.com/packages/lf20_Kaqn2X.json' // the path to the animation json
 // path: 'https://assets8.lottiefiles.com/packages/lf20_T2dOcl.json'
 //path: 'https://assets4.lottiefiles.com/packages/lf20_0i1Uzr.json'
 path: 'https://assets4.lottiefiles.com/packages/lf20_nBYcuy.json'
});
*/


var elem = document.getElementById("svgContainer");
var animData = {
container: elem,
renderer: "svg",
loop: false,
autoplay: true,
 path: 'https://assets1.lottiefiles.com/packages/lf20_bzpzXJ.json'

};
anim = lottie.loadAnimation(animData);
