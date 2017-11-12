import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import { ChatScreenContainer } from '../../containers';

import { LayoutMainStyled, TitleStyled } from '../../stylesheets/Layout.style';
import {
  DashboardStyled,
  DashboardContentStyled,
  ErrorBlockStyled,
} from '../../stylesheets/dashboard/Dashboard.style';

const Dashboard = ({ error }) => (
  <LayoutMainStyled>
    <DashboardStyled>
      <DashboardContentStyled>
        <TitleStyled>Meteor React Redux Workshop</TitleStyled>
        {/*{error && <ErrorBlockStyled>{error}</ErrorBlockStyled>}*/}
        {/*<ChatScreenContainer />*/}
      </DashboardContentStyled>
    </DashboardStyled>
  </LayoutMainStyled>
);

// Dashboard.propTypes = {
//   error: PropTypes.string,
// };
//
// Dashboard.defaultProps = {
//   error: null,
// };
//
// const mapStateToProps = state => ({
//   error: state.messages.error,
// });

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;