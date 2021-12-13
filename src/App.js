import "./App.css";
import ProfilePhoto from "./component/profile/profilePhoto.js";
import FullName from "./component/profile/fullName.js";
import Address from "./component/profile/address.js";

function App() {
  return (
    <div className="App">
      <FullName />
      <ProfilePhoto />

      <Address />
    </div>
  );
}

export default App;
