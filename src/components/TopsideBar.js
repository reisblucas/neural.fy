import React, { Component } from 'react';
import PageController from './PageController';
import ProfileHeader from './ProfileHeader';

export default class TopsideBar extends Component {
  render() {
    return (
      <div>
        <PageController />
        <ProfileHeader />
      </div>
    );
  }
}
