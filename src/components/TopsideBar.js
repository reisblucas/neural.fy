import '../styles/topsideBar.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageController from './PageController';
import ProfileHeader from './ProfileHeader';
import InputSearch from './InputSearch';

class TopsideBar extends Component {
  render() {
    const { location: { pathname } } = this.props;

    if (pathname === '/search') {
      return (
        <div className="controller-hero padding-search">
          <PageController />
          <InputSearch { ...this.props } />
          <ProfileHeader />
        </div>
      );
    }

    return (
      <div className="controller-hero">
        <PageController />
        <InputSearch { ...this.props } />
        <ProfileHeader />
      </div>
    );
  }
}

TopsideBar.propTypes = {
  location: PropTypes.string,
}.isRequired;

export default withRouter(TopsideBar);
