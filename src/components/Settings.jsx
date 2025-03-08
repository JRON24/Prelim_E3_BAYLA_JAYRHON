import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        darkMode: !user.settings.darkMode,
      },
    });
  };

  return (
    <div>
      <h2>Settings</h2>
      <label className="form-check-label">Dark Mode</label>
      <input
        type="checkbox"
        className="form-check-input ms-2"
        checked={user.settings.darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
}

export default Settings;
