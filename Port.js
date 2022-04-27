$(document).ready(function(){
$(window).scroll(function(){
if (this.scrollY > 20){
	$('.navbar').addClass("sticky");
}else{
	$('.navbar').removeClass("sticky");
}
if (this.scrollY > 500) {
$('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
}
});
// slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

//toggle menu/navbar script 
  $('.menu-btn').click(function(){
  	$('.navbar .menu').toggleClass("active");
  	$('.menu-btn i').toggleClass("active");    
  });
 }); 

//messege sent
// window.addEventListener("load", function() {
//   const form = document.getElementById('my-form');
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
//   });
// });

// function message(){
// window.addEventListener("load", function() {
//   const form = document.getElementById('my-form');
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
//   });
// });
// }

// function message(){
//     var Name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var msg = document.getElementById('msg');
//     const success = document.getElementById('success');
//     const danger = document.getElementById('danger');

//     if(Name.value === '' || email.value === '' || msg.value === ''){
//         danger.style.display = 'block';
//     }
//     else{
//         setTimeout(() => {
//             Name.value = '';
//             email.value = '';
//             msg.value = '';
//         }, 2000);

//         success.style.display = 'block';
//     }


//     setTimeout(() => {
//         danger.style.display = 'none';
//         s
//uccess.style.display = 'none';
//     }, 4000);

// }

//<script>
//$('button').click(function(){
//$('.success').addClass("show");
//$('.success').addClass("alert");
//$('.success').removeClass("hide");
//setTimeout(function(){
//$('.success').removeClass("show");
//$('.success').addClass("hide");
//},5000);
//});

//$('.crose').click(function(){
//$('.success').Class("show");
//$('.success').addClass("hide");
//});
//</script>