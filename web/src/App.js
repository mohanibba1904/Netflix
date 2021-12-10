import logo from './logo.svg';
import './App.css';
// import Profile from './components/profile/Profile';
// import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <div className="App" style={{}}>
      <LoginForm/>
      <br/>
      <Profile/>
    </div>
  );
}

export default App;
