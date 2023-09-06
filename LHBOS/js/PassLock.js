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

document.getElementById("demo").addEventListener("click", function () {
   var set = prompt("set passcode)
            localStorage.setItem("Password",set);
}
window.addEventListener("load", (event) => {
askforPass();
});
