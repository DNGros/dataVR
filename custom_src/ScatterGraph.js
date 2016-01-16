/**
*Used to create a scatter graph in the scene
*/

function ScatterGraph(parameters){
    var THIS = this;
    //parameters
    var defaultParams = {
        xPos: 0, //a number representing the x position of origin of graph,
        yPos: 0, //a number representing the y possition of the origin,
        zPos: 0, //a num represesenting the z position of the origin,
        xData: [], //array of x datapoints
        yData: [] //array of y datapoints
        ,zData: [] //array of z datapoints
        ,sData: [] //array of s datapoints
        ,material:  new THREE.MeshLambertMaterial( { color: 0x00ff00 } )
    }
    dVR.copyVals(parameters, this, defaultParams);
    //Check vars
    if(this.xData.length != this.yData.length || this.yData.length != this.zData.length)
        alert("incorect data"); //different lengths
    
    //add the stuff
    var pointSpheres = [];
    for(var i = 0; i < this.xData.length; i++){
       var geometry = new THREE.SphereGeometry(this.sData[i],16,16);
       var sphere = new THREE.Mesh(geometry, this.material);
       sphere.position.z = this.zData[i] + this.zPos;
       sphere.position.x = this.xData[i] + this.xPos;
       sphere.position.y = this.yData[i] + this.yPos;
       pointSpheres.push(sphere);
       scene.add(sphere);
    }
    
    THIS.render = function(){
        
    }
}