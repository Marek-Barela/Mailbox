import React, { useEffect, Fragment } from "react";
import Header from "../header";
import AppContainer from "../app-container";
import SidebarNavigation from "../sidebar-navigation";
import MailsContainer from "../mails-container";
import { fetchUserData } from "../../actions/userActions";
import { connect } from "react-redux";

const App = ({ fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Fragment>
      <Header />
      <AppContainer>
        <SidebarNavigation />
        <MailsContainer />
      </AppContainer>
    </Fragment>
  );
};

const mapDispatchToProps = {
  fetchUserData
};

export default connect(
  null,
  mapDispatchToProps
)(App);
