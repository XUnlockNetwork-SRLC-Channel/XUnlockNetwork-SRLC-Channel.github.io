const Pass = localStorage.getItem("Password");
function askforPass()
{
if (Pass){
  var password = prompt("Enter in the password");
        if (password==Pass) {
          
        }
        else 
        {
          alert("Incorrect");
   askforPass();
        }
  else
{
return
}
}
}
function SystemSetpassword()
{
 var set = prompt("set passcode)
            localStorage.setItem("Password",set);
}
document.getElementById("demo").addEventListener("click",SystemSetpassword)
window.addEventListener("load", (event) => {
askforPass();
});
