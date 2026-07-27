document.addEventListener("DOMContentLoaded", () => {

  console.log("GrowFastPK App Loaded");

  const registerBtn = document.getElementById("registerBtn");

  if(registerBtn){

    registerBtn.addEventListener("click", async () => {registerBtn.addEventListener("click", async () => {

  alert("Button clicked");

  const email = document.getElementById("email").value;

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if(error){
        document.getElementById("message").innerText = error.message;
      } else {
        document.getElementById("message").innerText = "Account created successfully";
      }

    });

  }

});
