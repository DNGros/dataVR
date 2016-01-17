// hist     a dict mapping categories to counts
// colors   an array of colors to color the bars
// height   the height to scale the bars wrt to
// barSize  the side length of the base of each bar
function BarChart(hist, colors, height, barSize) {
  chart = new THREE.Object3D();

  var maxCount = 0;
  for (var category in hist) {
    maxCount = Math.max(maxCount, hist[category]);
  }

  Object.keys(hist).forEach(function(category, index) {
    var barHeight = hist[category] / maxCount * height;
    var barGeometry = new THREE.BoxGeometry(barSize, barHeight, barSize);
    var barMaterial = new THREE.MeshLambertMaterial({ color: colors[index] });
    var bar = new THREE.Mesh(barGeometry, barMaterial);
    bar.position.x = index * barSize - Object.keys(hist).length / 2;
    bar.position.y = barHeight / 2;
    chart.add(bar);
  }, hist);

  // put a stylish little tilt to our chart
  chart.rotation.y = 0.3;
  return chart;
}
