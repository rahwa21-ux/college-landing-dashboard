import {
  FaBook,
  FaCalendarAlt,
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaTasks,
  FaBullhorn,
} from "react-icons/fa";
import { useState } from "react";

function Dashboard() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaBook /> },
    { name: "Courses", icon: <FaBook /> },
    { name: "Events", icon: <FaCalendarAlt /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Profile", icon: <FaUser /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];

  const cards = [
    {
      title: "My Courses",
      value: "5 Courses",
      description: "See your enrolled courses",
      color: "#060b51",
    },
    {
      title: "Upcoming Events",
      value: "3 Events",
      description: "Check your upcoming events",
      color: "#797d84",
    },
    {
      title: "Notifications",
      value: "12 Alerts",
      description: "Recent notifications",
      color: "#f5be0a",
    },
    {
      title: "Profile",
      value: "Update Info",
      description: "Manage your personal information",
      color: "#060b51",
    },
    {
      title: "Assignments",
      value: "3 Pending",
      description: "Your upcoming tasks",
      color: "#797d84",
      icon: <FaTasks size={30} />,
    },
    {
      title: "Announcements",
      value: "2 New",
      description: "College announcements",
      color: "#f5be0a",
      icon: <FaBullhorn size={30} />,
    },

    {
      title: "Profile",
      value: "Update Info",
      description: "Manage your personal information",
      color: "#060b51",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="logo">Premier College</div>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={active === item.name.toLowerCase() ? "active" : ""}
              onClick={() => setActive(item.name.toLowerCase())}
            >
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header>
          <h1>Welcome to Your Dashboard!</h1>
          <p>Manage your courses, events, and notifications efficiently.</p>
        </header>

        <div className="dashboard-cards">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="dashboard-card"
              style={{ borderTop: `5px solid ${card.color}` }}
            >
              <h3>{card.title}</h3>
              <p className="card-value">{card.value}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
