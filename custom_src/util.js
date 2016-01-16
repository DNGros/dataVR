(function(){
    var dVR = {};
    dVR.copyVals = function(copyFrom, copyTo, defaults){
        //copy parameters
        for(var p in defaults){
            if(p in copyFrom)
                copyTo[p]=copyFrom[p];
            else
                copyTo[p] = defaults[p];
        }   
    }
    window.dVR = dVR;
})(); 