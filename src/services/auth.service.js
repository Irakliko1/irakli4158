import authApi from '../API/auth'




const register = (userName, regPassword, regEmail) => {
    return authApi.post('user/registerUser', 
    {
        userName: userName,
        password: regPassword,
        email: regEmail
    },
    {headers: {'Content-Type': 'application/json'}},
    )
}

const login = async (signEmail, signPassword) => {
    return await authApi.post('User/LogIn', 
    {
        email: signEmail,
        password: signPassword
    },
    {headers: {'Content-Type': 'application/json'}},
    )
}

const logout = () => {
    localStorage.removeItem("token");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;