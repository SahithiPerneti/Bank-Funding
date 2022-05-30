// fetch('data.json')
//     .then(function (response) {
//         if (!response.ok) {
//             throw new Error("HTTP error, status = " + response.status);
//         }
//         return response.json();
//     })
//     .then(function (json) {
//         var users = json.users;
//         for (var index in json.users) {
//             var user = json.users[index];
//         }
//         console.log(users[0].branch_amount);
//         localStorage.setItem("branch_amount",users[0].branch_amount);
//     })
var abc = localStorage.getItem("code");
if (abc == "secret1") {
  // window.location.href = "user.html";
} else {
  window.location.href = "index.html";
}