const Login = ({ switchToSignup }) => {
  return (
    <div className="form">
      <h2>Login Form</h2>

      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />

      <a href="#">Forget password?</a>

      <button>Login</button>

      <div className="form1">
        <p>Not a member?</p>
        <a href="#" onClick={switchToSignup}>
          Signup now
        </a>
      </div>
    </div>
  );
};

export default Login;
