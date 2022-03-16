import '../styles/topsideBar.css';
import React, { Component } from 'react';
import PageController from './PageController';
import ProfileHeader from './ProfileHeader';

export default class TopsideBar extends Component {
  render() {
    return (
      <div className="controller-hero">
        <PageController />
        <ProfileHeader />
      </div>
    );
  }
}
