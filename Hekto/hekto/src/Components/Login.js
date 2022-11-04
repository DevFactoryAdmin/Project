import "./Login.css"
function Login() {
    return <>

        <div className="Login_borderbox">

            <div className="Login_l1">
                <label> Login</label>
            </div>
            <div className="Login_l2">
                <label> Please login using account detail below.</label>
            </div>
            <div className="Login_logindetails">
                <input type="text" placeholder=" Email Address" />
            </div>
            <div className="Login_logindetails">
                <input type="text" placeholder=" Password" />
            </div>
            <div className="Login_button1">
                <button> Forgot your password? </button>
            </div>
            <div className="Login_button2">
                <button>Sign In </button>
            </div>
            <div className="Login_lastline">
                <label> Don’t have an Account?</label>
                <button> Create account</button>
            </div>

        </div>
    </>
}
export default Login;