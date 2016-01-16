jQuery("#upCSV").change(function () {
        alert(jQuery(this).val());
        // Parse local CSV file
        $(this).parse({
            config: {
                header: true,
                complete: function(results, file) {
                    console.log("This file done:", file, results);
                    $('#VisualizeBtn').show();
                }
            },
            complete: function() {
                console.log("All files done!");
            }
        });
        
    });

