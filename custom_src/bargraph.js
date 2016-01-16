/**
*Used to create a bar graph in the scene
*/

function BarGraph(parameters){
    var THIS = this;
    //parameters
    var defaultParams = {
        xPos: 0, //a number representing the x position of origin of graph,
        yPos: 0, //a number representing the y possition of the origin,
        zPos: 0, //a num represesenting the z position of the origin,
        xData: [], //array of x datapoints
        yData: [] //array of y datapoints
    }
    //copy parameters
    for(var p in defaultParams){
        if(p in parameters)
            this[p]=parameters[p];
        else
            this[p] = defaultParams[p];
    }
    
    
    //this.setValues(parameters);
    
    //construct
    //alert("hello");
}