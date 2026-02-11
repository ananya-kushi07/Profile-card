import React, { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ name, role, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile-card">
      <div className="avatar">
        {name.charAt(0)}
      </div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>

      <button
        className={isFollowing ? "following" : ""}
        onClick={toggleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;