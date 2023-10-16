
// if (!localStorage.getItem("cookiesAccepted")) { 
// var cookieMessage = document.getElementById('cookie-notification');  
// var closeCookie = document.getElementById('cookie-notification-close');

// cookieMessage.style.display = 'block';  
// closeCookie.addEventListener("click", function(e) {  
//   e.preventDefault();
//   localStorage.setItem("cookiesAccepted", true);
  
//   cookieMessage.style.display = 'none';
// });
// }

document.addEventListener("DOMContentLoaded", function() {
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');

  if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = 'block';
  }

  cookieAccept.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", true);
      cookieBanner.style.display = 'none';
  });
});

