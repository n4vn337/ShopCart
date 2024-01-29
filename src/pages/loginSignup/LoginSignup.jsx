import "./loginSignup.scss";
export const LoginSignup = () => {
  return (
    <div className="login">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
          />
          <input
            type="email"
            name="emailId"
            id="emailId"
            placeholder="john@mailer.com"
          />
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="Password"
          />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have and account? <span>Login here</span>
        </p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the Terms and Policy.</p>
        </div>
      </div>
    </div>
  );
};
