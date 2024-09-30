document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea[name="besked"]');
    const counter = document.querySelector('#tæller');
  
    textarea.addEventListener('input', () => {
      const currentValue = textarea.value;
      const maxLength = 300;
      
      if (currentValue.length <= maxLength) {
        counter.querySelector('#nuværende').textContent = currentValue.length;
      } else {
        counter.querySelector('#nuværende').textContent = maxLength;
      }
    });
  
    document.getElementById('send-button').addEventListener('click', function(event) {
        event.preventDefault();
        var navn = document.getElementsByName('navn')[0].value;
        var emne = document.getElementsByName('emne')[0].value;
        var besked = document.getElementsByName('besked')[0].value;
        var emailLink = 'mailto:mikkelmartinlarsen@gmail.com?subject=' + emne + '&body=Navn: ' + navn + '%0D%0ABesked: ' + besked;
        window.location.href = emailLink;
    });

        // Get all hyperlinks on the page
    const hyperlinks = document.querySelectorAll('.hyperlinks a');

    // Add an event listener to each hyperlink
    hyperlinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the href attribute of the link
        const href = link.getAttribute('href');

        // Get the element with the matching ID
        const targetElement = document.querySelector(href);

        // Scroll to the target element with a smooth animation
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });