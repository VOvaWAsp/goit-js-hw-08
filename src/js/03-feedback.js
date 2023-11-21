const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("input", (event) => {
        
     let valueEmail = event.currentTarget.email.value;
     localStorage.setItem("feedback-form-state", valueEmail);

     let valueMessage = event.currentTarget.message.value;
     localStorage.setItem("feedback-form-message", valueMessage);

     //  localStorage.getItem("feedback-form-state")
 });

 feedbackForm.email.value = localStorage.getItem("feedback-form-state");
    feedbackForm.message.value = localStorage.getItem("feedback-form-message");
    
const handleSubmit = (event) => {
    event.preventDefault();
    feedbackForm.reset();
    localStorage.removeItem("feedback-form-state")
    localStorage.removeItem("feedback-form-message")
}
feedbackForm.addEventListener("submit", handleSubmit);