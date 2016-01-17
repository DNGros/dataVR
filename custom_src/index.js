
//var chartsToGraph = [];
jQuery("#upCSV").change(function () {
        // Parse local CSV file
        $(this).parse({
            config: {
                header: true,
                complete: function(results, file) {
                    console.log("This file done:", file, results);
                    var xD = [], yD =[], zD =[], sD=[];
                    results.data.forEach(function(row, index){
                        xD.push(row.x);
                        yD.push(row.y);
                        zD.push(row.z);
                        sD.push(row.s);  
                    });
                    //chartsToGraph.push(new ScatterGraph(xD,yD,zD,sD));
                    //Store it for next page
                    sessionStorage.xD = JSON.stringify(xD);
                    sessionStorage.yD = JSON.stringify(yD);
                    sessionStorage.zD = JSON.stringify(zD);
                    sessionStorage.sD = JSON.stringify(sD);
                    $('#VisualizeBtn').show();
                }
            },
            complete: function() {
                console.log("All files done!");
                sessionStorage["chartsToGraph"] = JSON.stringify(chartsToGraph);
            }
        });
        
    });

//Click listener for visualize button
$('#VisualizeBtn').click(function(){
    window.location.href = 'visualize.html';
});