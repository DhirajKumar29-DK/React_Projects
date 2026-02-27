import "../App.css"

const SignUp = ({ switchToLogin }) => {
  return (
    <>
    <div className='form'>
                <h2>Sign Up Form</h2>
       
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Password'/>
                <button>Sign Up</button>

                <div className="form1">
                  <p>Already have an account?</p>
                  <a href="#" onClick={switchToLogin} >
                    Login now
                  </a>
                </div>

        </div>
    </>
  )
}

export default SignUp
