import './App.css';
import Halaman_Account from './components/halaman_account/account';
import Desc from './components/halaman_desc/desc';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Halaman_Login from './components/halaman_login/login';

function App() {
  return (
    <div>
      {/* <Halaman_Home_Guest /> */}
      <Halaman_Account />
      {/* <Login /> */}
      <Desc />
      {/* <Halaman_Login /> */}
      {/* <Desc /> */}
      {/* <Halaman_Login /> */}
      <Halaman_Home_Guest />
    </div>
  );
}

export default App;
