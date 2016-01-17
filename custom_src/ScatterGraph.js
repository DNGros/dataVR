/**
*Used to create a scatter graph in the scene
*/

function ScatterGraph(xData, yData, zData, sData){
    chart = new THREE.Object3D();
    //parameters
    /*var defaultParams = {
        xData: [], //array of x datapoints
        yData: [] //array of y datapoints
        ,zData: [] //array of z datapoints
        ,sData: [] //array of s datapoints
        ,material:  new THREE.MeshLambertMaterial( { color: 0x00ff00 } )
    }
    dVR.copyVals(parameters, this, defaultParams);*/
    //Check vars
    /*if(xData.length != yData.length || yData.length != zData.length)
        alert("invalid data"); */ //different lengths
    
    
    this.material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    //add the stuff
    var pointSpheres = [];
    for(var i = 0; i < xData.length; i++){
       var geometry = new THREE.SphereGeometry(sData[i],16,16);
       var sphere = new THREE.Mesh(geometry, this.material);
       sphere.position.z = zData[i];
       sphere.position.x = xData[i];
       sphere.position.y = yData[i];
       pointSpheres.push(sphere);
       chart.add(sphere);
    }
    
    
    return chart;
}