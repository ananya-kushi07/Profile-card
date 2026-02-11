import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    {
      id: 1,
      name: "Ananya Kushi",
      role: "Frontend Developer",
      description: "Passionate about building interactive web applications using React."
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "UI/UX Designer",
      description: "Designing clean and user-friendly interfaces."
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Backend Developer",
      description: "Building scalable APIs and server-side logic."
    }
  ];

  return (
    <div className="app">
      <h1>Interactive Profile Card System</h1>
      <div className="card-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;