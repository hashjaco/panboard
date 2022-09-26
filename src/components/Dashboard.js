import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import AppsSeen from "../views/AppsSeen";
import ConnectedZones from "../views/ConnectedZones";
import Policies from "../views/Policies";
import BPA from "../views/BPA";
import ShadowRules from "../views/ShadowRules";
import GFRAM from "../views/GFRAM";
import BestPracticeAssessments from "../views/BestPracticeAssessments";
import RITM from "../views/RITM";
import "../styles.scss";

const views = [
  {
    name: "Apps Seen",
    url: "/apps-seen",
    iconPath: "",
    component: AppsSeen,
  },
  {
    name: "Connected Zones",
    url: "/connected-zones",
    iconPath: "",
    iconAlt: "",
    component: ConnectedZones,
  },
  {
    name: "Policies",
    url: "/policies",
    iconPath: "",
    iconAlt: "",
    component: Policies,
  },
  {
    name: "GFRAM",
    url: "/gfram",
    iconPath: "",
    iconAlt: "",
    component: GFRAM,
  },
  {
    name: "Shadow Rules",
    url: "/shadow-rules",
    iconPath: "",
    iconAlt: "",
  },
  {
    name: "Services",
    url: "/services",
    iconPath: "",
    iconAlt: "",
  },
  {
    name: "BPA",
    url: "/bpa",
    iconPath: "",
    iconAlt: "",
  },
];

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("Apps Seen");

  const getView = target => {
    const view = views[target] || null;

    if (view) {
      const View = view.component;
      return <View />;
    }
  };

  return (
    <div className="dashboard">
      <DashboardNav
        onClick={setCurrentView}
        views={views}
        vertical={true}
        activeView={currentView}
      />
    </div>
  );
};

export default Dashboard;
