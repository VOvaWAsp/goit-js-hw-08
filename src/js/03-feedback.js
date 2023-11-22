const feedbackForm = document.querySelector(".feedback-form");

 const value = {}

feedbackForm.addEventListener("input", (event) => {
   
     let valueEmail = event.currentTarget.email.value;
    localStorage.setItem("feedback-form-state", valueEmail);
    value.email = valueEmail;

     let valueMessage = event.currentTarget.message.value;
    localStorage.setItem("feedback-form-message", valueMessage);
    value.message = valueMessage;

     //  localStorage.getItem("feedback-form-state")
 });

 feedbackForm.email.value = localStorage.getItem("feedback-form-state");
    feedbackForm.message.value = localStorage.getItem("feedback-form-message");
    
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    feedbackForm.reset();
    localStorage.removeItem("feedback-form-state")
    localStorage.removeItem("feedback-form-message")
}
feedbackForm.addEventListener("submit", handleSubmit);