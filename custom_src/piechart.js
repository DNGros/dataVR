// hist     a dict mapping categories to counts
// colors   an array of colors to color the slices
// height   the desired height of the pie
// radius   the desired radius of the pie
function PieChart(hist, colors, height, radius) {
  pie = new THREE.Object3D();

  var totalCount = 0;
  for (var category in hist) {
    totalCount += hist[category];
  }
  var startDegree = 0;

  Object.keys(hist).forEach(function(category, index) {
    var sliceSize = Math.PI * 2 * hist[category] / totalCount;
    var sliceGeometry = new THREE.CylinderGeometry(radius, radius, height, 20, 
	32, false, startDegree, sliceSize);
    console.log(sliceGeometry.name);
    var sliceMaterial = new THREE.MeshLambertMaterial({ color: colors[index] });
    var slice = new THREE.Mesh(sliceGeometry, sliceMaterial);
    slice.position.y = -10;
    pie.add(slice);
    startDegree += sliceSize;
  }, hist);

  // put a stylish little tilt to our chart
  pie.rotation.y = 0.3;
  return pie;
}
