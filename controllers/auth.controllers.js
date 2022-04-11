

const newUser = (req, resp) => {
    return resp.json({
        name: "Maria",
        ok: true, 
        msg: "new user created /new"
    })
}


const renewToken = (req, resp) => {
    return resp.json({
        name: "Maria",
        ok: true, 
        msg: "Login user /"
    })
}

const login = (req, resp) => {
    return resp.json({
        name: "Maria",
        ok: true, 
        msg: "Renew"
    })
}


module.exports = {
    newUser,
    renewToken,
    login
}