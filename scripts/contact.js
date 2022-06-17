// Validate Email Information

const emailInfo = document.querySelector('#email');
const getInTouch = document.querySelector('form');
const feedbackMessage = document.querySelector('#validationMessage');

const validateEmail = () => {
  getInTouch.addEventListener('submit', (e) => {
    const requiredChars = /^[a-z0-9@.]+$/;
    if (!requiredChars.test(emailInfo.value)) {
      feedbackMessage.textContent = 'You have provided an invalid email';
      feedbackMessage.style.color = 'red';
      feedbackMessage.style.fontWeight = 'bold';
      e.preventDefault();
    } else {
      feedbackMessage.textContent = 'Success!';
      feedbackMessage.style.color = 'green';
      feedbackMessage.style.fontWeight = 'bold';
    }
  });
};
validateEmail();
