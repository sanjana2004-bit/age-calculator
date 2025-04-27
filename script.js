function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  
  if (!dob.getTime()) {
    document.getElementById("result").innerText = "Please select a valid Date of Birth.";
    return;
  }
  
  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
  }
  
  document.getElementById("result").innerText = `You are ${age} years old.`;
}
