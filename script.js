const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});
