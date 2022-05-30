const itemList = document.getElementById("itemList");
fetch('data.json')
    .then(function (response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then(function (json) {
        // var users = json.users;
        for (var index in json.users) {
            var user = json.users[index];
            if (user.id > 0) {
                itemList.insertAdjacentHTML(
                    "beforeend",
                    `<tr">
              <td>${user.id}</td>
              <td>${user.username}</td> 
              <td>${user.Balance}</td>
            </tr>`
                );
                console.log(user);
            }
        }
        // console.log(users[0].branch_amount);
        // localStorage.setItem("branch_amount",users[0].branch_amount);
    })
    var abc = localStorage.getItem("code");
    if (abc == "secret") {
        
    }
    else if (abc == "secret1") {
        window.location.assign("user.html");
    } else {
        window.location.href = "index.html";
    }