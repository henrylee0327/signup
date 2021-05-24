import './App.css';
import logo from './assets/logo.svg';
import styled from 'styled-components';

const SignupForm = () => {
  return (
    <div className='form-container'>
      <div className='logo-image'>
        <img src={logo} />
      </div>
      <div>
        {/* <Form>
          <h3>Sign Up</h3>
          <Input placeholder='Full Name' />
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Confrim Password' />
          <button>Sign Up</button>
        </Form> */}
        <form className='signup-form'>
          <h3>Sign Up</h3>
          <input placeholder='Full Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confrim Password' />
          <button>Sign Up</button>
        </form>
      </div>

      <div className='policy'>
        <p>
          By Signing up, I agree to the Privacy Policy <br></br>
          and Terms of Service
        </p>
      </div>
      <div className='sign-in'>
        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </div>
    </div>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

function App() {
  return (
    <div className='App'>
      <SignupForm />
    </div>
  );
}

export default App;
