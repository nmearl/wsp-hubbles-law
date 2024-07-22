(function() {
    var corsHeaders = [
        'Access-Control-Allow-Origin: *',
        'Access-Control-Allow-Methods: GET, POST, OPTIONS',
        'Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
        'Access-Control-Expose-Headers: Content-Length,Content-Range'
    ];

    corsHeaders.forEach(function(header) {
        var meta = document.createElement('meta');
        meta.httpEquiv = header.split(': ')[0];
        meta.content = header.split(': ')[1];
        document.getElementsByTagName('head')[0].appendChild(meta);
    });
})();