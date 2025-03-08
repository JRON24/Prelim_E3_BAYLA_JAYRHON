import React from "react";

function ProfilePicture({ imageUrl }) {
  return (
    <div>
      <img
        src={imageUrl || "https://via.placeholder.com/150"}
        alt="Profile"
        className="rounded-circle"
        style={{ width: "150px", height: "150px" }}
      />
    </div>
  );
}

export default ProfilePicture;
