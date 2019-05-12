/*Copyright (c) 2019 Lavensoft, LEADER QUANG NHAT*/
function load(file,id){
    $.get( file, function( data ) {
        $( id ).append( data );
    });
}