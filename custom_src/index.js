var parseResults;
//var chartsToGraph = [];
jQuery("#upCSV").change(function () {
        // Parse local CSV file
        $(this).parse({
            config: {
                header: true,
                complete: function(results, file) {
                    console.log("This file done:", file, results);
                    
                    if(results.errors.length == 0){
                        parseResults = results;
                        $('.uploadComplete').show();
                    }
                    else{
                        console.log("errs exist " + results.errors);
                        $('.uploadError').show();
                        $("#errorOut").text(JSON.stringify(results.errors));
                    }
                },
                error:function(err, file){
                    $("#errorOut").text(JSON.stringify(err));
                }
            },
            complete: function() {
                console.log("All files done!");
             //   sessionStorage["chartsToGraph"] = JSON.stringify(chartsToGraph);
            }
        });
        
    });

//Click listener for visualize button
$('#VisualizeBtn').click(function(){
    console.log($("ul#chartSelect li.active a").attr('href'));
    switch($("ul#chartSelect li.active a").attr('href')){
        case "#scatter":
            var xD = [], yD =[], zD =[], sD=[];
            parseResults.data.forEach(function(row, index){
                xD.push(row.x);
                yD.push(row.y);
                zD.push(row.z);
                sD.push(row.s);  
            });
            //Store it for next page
            sessionStorage.xD = JSON.stringify(xD);
            sessionStorage.yD = JSON.stringify(yD);
            sessionStorage.zD = JSON.stringify(zD);
            sessionStorage.sD = JSON.stringify(sD);
            break;
    }
    
    
    
    window.location.href = 'visualize.html';
});