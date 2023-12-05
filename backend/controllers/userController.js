const registerUser = (req, res) => {
    res.json({message: 'sign up'})
}

const getUser = (req, res) => {
    res.json({message: 'see your stuff'})
}

const login = (req, res) => {
    res.json({message: 'login'})
}

export {registerUser, getUser, login};