alertdocument.addEventListener("DOMContentLoaded", () => {
  console.log("GrowFastPK App Loaded");
});
document.getElementById("registerBtn")?.addEventListener("click", async () => {

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
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
