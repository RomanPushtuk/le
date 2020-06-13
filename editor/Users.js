class Users {
    constructor(users) {
        this.users = users;
    }

    userExist(login, password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === login && users[i].password === password) {
                return users[i];
            }
        }
        return false;
    }
}

module.exports = Users;