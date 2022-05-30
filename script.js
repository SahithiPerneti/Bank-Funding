fetch('data.json')
    .then(function (response) {
        console.log(response.status)
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then(function (json) {
        function login(username, password) {
            if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 0) {
                var loggeduser;
                for (var index in json.users) {
                    var user = json.users[index];
                    if (username === user.username && password === user.password)
                        loggeduser = user;
                }
                console.log(loggeduser);
                
                var userId = loggeduser.id;
                var isAdmin = false;
                var name = loggeduser.username;
                var balance = loggeduser.Balance;
                var branch_amount = loggeduser.branch_amount;
                localStorage.setItem("branch_amount",branch_amount);
                localStorage.setItem("balance",balance);
                localStorage.setItem("name",name);
                localStorage.setItem("userId",userId);
                localStorage.setItem("isAdmin",isAdmin);
                if (userId == 0) {
                    isAdmin = isAdmin ? false : true;
                    localStorage.setItem("isAdmin",true);
                    console.log(isAdmin);
                    if (isAdmin == true) {
                        localStorage.setItem("code","secret1");
                        window.location.href= 'admin.html';
                    }
                }
                if (userId !== null && isAdmin == false) {
                    localStorage.setItem("code","secret");
                    window.location.href= 'user.html';

                }
                if (typeof loggeduser != 'undefined') {
                    user_data[loggeduser.id] = true;
                    return loggeduser;
                }
            }
            return false;
        }
        document.getElementById('login-form').addEventListener('submit', function (e) {
            e.preventDefault();
            var username_element = e.srcElement.elements.username;
            var password_element = e.srcElement.elements.password;
            if (username_element && password_element) {
                username = username_element.value;
                password = password_element.value;
                var user = login(username, password);
                if (user !== false) {
                    username_element.value = '';
                    password_element.value = '';
                    alert('Logged in as ' + user.username + '.');
                } else {
                    password_element.value = '';
                    alert('Invalid username and/or password.');
                }
            }
        });
    });