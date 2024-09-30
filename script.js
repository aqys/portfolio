document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.querySelector('textarea[name="besked"]');
  const counter = document.querySelector('#tæller');

  textarea.addEventListener('input', () => {
      const currentValue = textarea.value;
      const maxLength = 300;
      counter.querySelector('#nuværende').textContent = currentValue.length <= maxLength ? currentValue.length : maxLength;
  });

  document.getElementById('send-button').addEventListener('click', function(event) {
      event.preventDefault();
      const navn = document.getElementsByName('navn')[0].value;
      const emne = document.getElementsByName('emne')[0].value;
      const besked = document.getElementsByName('besked')[0].value;
      const emailLink = `mailto:mikkelmartinlarsen@gmail.com?subject=${emne}&body=Navn: ${navn}%0D%0ABesked: ${besked}`;
      window.location.href = emailLink;
  });

  const hyperlinks = document.querySelectorAll('.hyperlinks a');
  hyperlinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetElement = document.querySelector(link.getAttribute('href'));
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});