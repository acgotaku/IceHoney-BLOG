//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: '/static/js/lib',
    paths: {
        app: '../app',
        jquery:'jquery-2.1.4.min',
        highlight:'highlight.min'
    },
    shim:{
    	'highlight':{
    		 exports: 'hljs'
    	}
    }
});
