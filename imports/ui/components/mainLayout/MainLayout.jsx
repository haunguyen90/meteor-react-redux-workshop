import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { DefaultThemes } from '/imports/ui/stylesheets/themes/DefaultThemes.style';
import TopNavBar from './TopNavBar';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={DefaultThemes}>
    <div className="app-wrapper">
      <TopNavBar />
      {children}
    </div>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
