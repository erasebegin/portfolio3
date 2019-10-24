//allows entire project card to become clickable element

$(".project-card").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
    });