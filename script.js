const cursor = document.getElementById('coolcursor');
const navbar = document.querySelector(".navbar");
const navitem = $('.navitem');
const navlist = [...navitem];
const preview = $('.preview');




document.addEventListener('mousemove', function(event) {
    let body = document.querySelector('body');
    let cleft = event.clientX;
    let ctop = event.clientY;
    let navleft = 0;
    if (cleft > 300){
        let navleft = -50;
    }
    //Pop up
    navbar.animate({
        left: navleft + 'px'
    },{duration:500})

    //Center
    ctop = ctop + cursor.style.height/2;

    //Trailing instead of snapping
    cursor.animate({
        left: cleft + 'px',
        top: ctop + 'px'
    },{duration: 500, fill: "forwards"});
});



navitem.hover(function(){
        //Only show div corresponding to index
        var index = $('.navitem').index(this);
        preview.addClass('hidden');
        preview.removeClass('show');
        $(preview[index]).removeClass('hidden');
        $(preview[index]).addClass('show');
        cursor.style.scale = "1.5";
    }, function(){
        cursor.style.scale = "1";
    });
