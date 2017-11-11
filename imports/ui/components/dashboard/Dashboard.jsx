import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import { ChatScreenContainer } from '../../containers';

import { LayoutMainStyled } from '../../stylesheets/Layout.style';
import {
  DashboardStyled,
  DashboardContentStyled,
  ErrorBlockStyled,
} from '../../stylesheets/dashboard/Dashboard.style';

const Dashboard = ({ error }) => (
  <LayoutMainStyled>
    <DashboardStyled>
      <DashboardContentStyled>
        Welcome to Meteor React Redux Workshop
        {error && <ErrorBlockStyled>{error}</ErrorBlockStyled>}
        <ChatScreenContainer />
      </DashboardContentStyled>
    </DashboardStyled>
  </LayoutMainStyled>
);

Dashboard.propTypes = {
  error: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  return {
    error: state.messages.error,
  }
};

export default connect(mapStateToProps)(Dashboard);
