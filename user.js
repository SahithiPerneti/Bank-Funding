var abc = localStorage.getItem("code");
if (abc == "secret") {
    
}
else if (abc == "secret1") {
    window.location.assign("user.html");
} else {
    window.location.href = "index.html";
}