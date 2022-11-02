const up_btn = document.querySelector('.top-btn');
const newsletter_btn = document.querySelector('.newsletter-btn');

up_btn.addEventListener('click', () => {
 window.scrollTo({
   top: 0,
   behavior: "smooth"
 })
});

function SubscribeNewsletter() {
  alert("Vous êtes maintenant inscrit à la newsletter !");
};