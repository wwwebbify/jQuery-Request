$.ajax({

    // **REQUIRED** The URL for the request
    url: "http://someUri.here,

    // The data to append (can be query string or obj - will be converted to query string if a GET request)
    data: {
        key1: 'value1'
    },

    // typeof request (default-GET)
    type: "GET",

    // The type of data expected - Confirm it matches, if it doesn't, it could cause an error-less fail
    dataType : "json"
})
// Code to run if the request succeeds (is done);
// The response is passed to the function
    .done(function( data, status, raw ) {
        console.log('AJAX SUCCESS');
        console.log(data);
        console.log('Status: ' + status);
        console.log(raw);
    })
    // Code to run if the request fails;
    .fail(function( raw, status, error ) {
        console.warn('AJAX ERROR');
        console.warn( "Error: " + error );
        console.warn( "Status: " + status );
        console.dir( raw );
    })
    // Code to run regardless of success or failure;
    .always(function( raw, status ) {
        console.log('AJAX COMPLETED');
        console.log('Status: ' + status);
        console.log(raw);
    });
