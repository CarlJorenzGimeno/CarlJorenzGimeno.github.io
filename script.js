const cursor = document.getElementById('coolcursor');
const navbar = document.querySelector(".navbar");

document.addEventListener('mousemove', function(event) {
    let body = document.querySelector('body');
    let cleft = event.clientX;
    let ctop = event.clientY;
    let navleft = 0;
    if (cleft > 300){
        let navleft = -50;
    }
    navbar.animate({
        left: navleft + 'px'
    },{duration:500})

    ctop = ctop + cursor.style.height/2;

    cursor.animate({
        left: cleft + 'px',
        top: ctop + 'px'
    },{duration: 300, fill: "forwards"});
});

$(".navitem").hover(function(){
    cursor.style.scale = "1.5";
    }, function(){
    cursor.style.scale = "1";
  });