//! Global var
usersList = [];

// Introduction
let introduction = async (req, res) => {
    res.send('Sign Up Route');
}

// Sign Up
let signup = async (req, res) => {
    let newUser = req.body;
    let exists = false;
    for (let i of usersList){
        if(i['username'] == newUser['username']){
            exists = true;
        }
    }
    res.setHeader('Content-Type', 'application/json');
    if(exists == false){
        usersList.push(newUser);
         res.send(JSON.stringify({"valid": !exists, "data": usersList}));
    } else {
        res.send(JSON.stringify({"valid": !exists, "data": []}));
    }
}

// Login
let login = async (req, res) => {
    let loggingUser = req.body;
    let validUser = false;
    for(let i of usersList){
        if (i['username'] == loggingUser['username']){
            if(i['password'] == loggingUser['password']){
                validUser = true;
            }
        }
    }
    res.setHeader('Content-Type', 'application/json');
    if(validUser == true){
        res.send(JSON.stringify({"valid": validUser, "data": usersList}));
    } else {
        res.send(JSON.stringify({"valid": validUser, "data": []}));
    }
}

let updateUserList = async (req, res) => {
    receivedProfile = req.body;
    for(let i in usersList){
        if(usersList[i]['username'] == receivedProfile['username']){
            usersList[i] = receivedProfile;
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(usersList));
}

//! Debug
let delAllUsers = async (req, res) => {
    // usersList = [];
    usersList = [];
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify(usersList));
};

module.exports = {
    introduction,
    signup,
    login,
    usersList,
    updateUserList,
    delAllUsers
}