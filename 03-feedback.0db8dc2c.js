const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};e.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.form.addEventListener("input",_.throttle((function(t){const a=e.input.value,r=e.textarea.value,o={email:a,message:r};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.input.value=t.email,e.textarea.value=t.message)}(),console.log(form);
//# sourceMappingURL=03-feedback.0db8dc2c.js.map
