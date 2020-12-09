import React from "react";
import useDarkMode from "use-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  console.log(darkMode.value);

  return <DarkModeSwitch onChange={darkMode.toggle} checked={darkMode.value} />;
};

export default DarkModeToggle;
