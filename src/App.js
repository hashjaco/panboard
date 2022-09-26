import "./App.css";
import { Container } from "reactstrap";
import AppBar from "./components/AppBar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const dropdownOptions = [
    { name: "Profile", url: "/profile" },
    { name: "Account Settings", url: "/account" },
  ];

  const navbarLinkOptions = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div>
      <AppBar
        dropdownOptions={dropdownOptions}
        navbarLinkOptions={navbarLinkOptions}
        imageUrl="/armaturesystemslogo3.jpeg"
      />
      <Dashboard />
    </div>
  );
};

export default App;
