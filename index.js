$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);
    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });
    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })
});
function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}
white_check_markeyesraised_hands




