var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

var hist = {
  'shakes': 1,
  'nods': 3,
  'ambiguous': 10
};
var colors = [
  0xff0000,
  0x00ff00,
  0x0000ff
];
var chart = new BarChart(hist, colors, 2, 1);
scene.add(chart);

var pointLight1 = new THREE.PointLight(0xFFFFFF);
pointLight1.position.x = 50;
pointLight1.position.y = 50;
pointLight1.position.z = 130;
scene.add(pointLight1);

var pointLight2 = new THREE.PointLight(0xFFFFFF);
pointLight2.position.x = -20;
pointLight2.position.y = 0;
pointLight2.position.z = 20;
scene.add(pointLight2);

camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
