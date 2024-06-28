$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    $home = $('.home');
    $skills = $('.skills');
    $projects = $('.projects');
    $education = $('.education');
    $experience = $('.experience');
    $resume = $('.resume');
    $contact = $('.contact');
   
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
        $home.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $skills.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $projects.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $education.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $experience.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $resume.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $contact.click(function(e){
            $navbar.toggleClass("toggle-left");
        })
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}
