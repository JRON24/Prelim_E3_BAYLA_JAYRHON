import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <div>
      <h2>Profile</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />
      <label className="form-label mt-3">Name:</label>
      <input
        type="text"
        className="form-control"
        value={user.name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Profile;
