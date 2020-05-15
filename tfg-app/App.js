// packages
import React from "react";

// context and provider
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as GiantProvider } from "./src/context/GiantContext";

// navigation
import SwitchNavigator from "./src/navigation";
import { setNavigator } from "./src/navigation/navigationRef";

/* Start of app */
export default () => {
  return (
    <GiantProvider>
      <AuthProvider>
        <SwitchNavigator
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </GiantProvider>
  );
};
