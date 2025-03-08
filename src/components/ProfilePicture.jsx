import React from "react";

function ProfilePicture({ imageUrl }) {
  return (
    <div>
      <img
        src={imageUrl || "https://th.bing.com/th/id/OIP.XHy01a9BgJcKRzm9eJQpeAHaFH?rs=1&pid=ImgDetMain"}
        alt="Profile"
        className="rounded-circle"
        style={{ width: "150px", height: "150px" }}
      />
    </div>
  );
}

export default ProfilePicture;
