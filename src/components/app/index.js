import React from "react";
import Header from "../header";
import AppContainer from "../app-container";
import SidebarNavigation from "../sidebar-navigation";
import MailsContainer from "../mails-container";

const App = () => {
  return (
    <div>
      <Header />
      <AppContainer>
        <SidebarNavigation />
        <MailsContainer />
      </AppContainer>
    </div>
  );
};

export default App;
