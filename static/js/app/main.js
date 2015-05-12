define(function (require) {
    var $ = require('jquery'),
        hljs = require('highlight');
    $( document ).ready(function(){
        hljs.initHighlighting();
    });
});
