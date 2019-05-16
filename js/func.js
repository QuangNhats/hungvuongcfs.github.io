/*Copyright (c) 2019 Lavensoft, LEADER QUANG NHAT*/

function confessFormSubmit(){

    var confess = document.forms["confess-form"]["confess-input"].value;
    var hastag  = document.forms["confess-form"]["confess-hastag"].value;
    //PUT DATA TO PHP
    $.ajax({
        type: "POST",
        url: './PHP/confessForm.php',
        data: {
            content: confess,
            cfhastag : hastag
        },
        success: function(data) {
            console.log(data);
        }
      });
}

function getConfess(){
    $.ajax({
        type: "GET",
        url: './PHP/confessForm.php',
        success: function(data) {
            console.log(data);
        }
      });
}

function appendNav(){
    let html = '<div class="left-menu">'
    +' <h5 class="nav-header">HUNG VUONG CONFESSION</h5>'
    +' </div>'
    +' <div class="center-menu">'
    +'    <div class="nav-menu" id="home">'
    +'            <a href="./index.html"><i class="material-icons nav-icon">home</i></a>'
    +'     </div>'
    +'    <!--DISABLED'
    +'    <div class="nav-menu">'
    +'            <i class="material-icons nav-icon">notifications</i>'
    +'    </div>'
    +'    <div class="nav-menu">'
    +'            <i class="material-icons nav-icon">account_circle</i>'
    +'    </div>'
    +' -->'
    +'   <div class="nav-menu" id="dating">'
    +'           <a href="./dating.html"><i class="material-icons nav-icon">dashboard</i></a>'
    +'   </div>'
    +' </div>'
    +'<div class="right-menu">'
    +'   <div class="search-box">'
    +'      <i class="material-icons search-icon">search</i>'
    +'      <input id="search-box" placeholder="Search"/>'
    +'  </div>'
    +'</div>'
    $("#nav-bar").append(html);
}

function load(file,id){
    $.get( file, function( data ) {
        $( id ).append( data );
    });
}