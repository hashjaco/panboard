import { Nav, NavItem, NavLink } from "reactstrap";
import "../styles.scss";

const DashboardNav = ({ activeView, views = [], vertical = true, onClick }) => {
  return (
    <Nav vertical={vertical} className="dashboard-nav-menu">
      {views.map(view => (
        <NavItem
          key={view.name}
          active={activeView === view.name}
          className="dashboard-nav-item"
          onClick={onClick(view.name)}>
          {view.name}
        </NavItem>
      ))}
    </Nav>
  );
};

export default DashboardNav;
