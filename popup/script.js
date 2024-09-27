document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton = document.getElementById('open-popup');
  const closeButtons = document.querySelectorAll('.close-popup');
  const popups = document.querySelectorAll('.popup');

  // Open the popup form
  openPopupButton.addEventListener('click', function () {
      document.getElementById('popup-step1').style.display = 'block';
      document.getElementById('popup-step1').style.opacity = '1';
  });

  // Close button event for all popups
  closeButtons.forEach(button => {
      button.addEventListener('click', function () {
          popups.forEach(popup => {
              popup.style.display = 'none';
              popup.style.opacity = '0';
          });
      });
  });

  // Move to next step
  document.getElementById('next-step1').addEventListener('click', function () {
      document.getElementById('popup-step1').style.display = 'none';
      document.getElementById('popup-step2').style.display = 'block';
      document.getElementById('popup-step2').style.opacity = '1';
  });

  document.getElementById('next-step2').addEventListener('click', function () {
      document.getElementById('popup-step2').style.display = 'none';
      document.getElementById('popup-step3').style.display = 'block';
      document.getElementById('popup-step3').style.opacity = '1';
  });
});
