import LoginForm from "./_components/LoginForm";
import "./login.scss";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="left">
        <img className="logo" src="/images/logo.svg" alt="lendsqr" />
        <img src="/images/pablo-sign-in.svg" alt="pablo-sign-in" />
      </div>
      <div className="right">
        <img className="logo-mobile" src="/images/logo.svg" alt="lendsqr" />
        <div className="content">
          <div className="header">
            <h1 className="title">Welcome.</h1>
            <p className="desc">Enter details to login.</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
