import '../styles/topsideBar.css';
import React, { Component } from 'react';
import PageController from './PageController';
import ProfileHeader from './ProfileHeader';
import InputSearch from './InputSearch';

export default class TopsideBar extends Component {
  render() {
    return (
      <div className="controller-hero">
        <PageController />
        <InputSearch { ...this.props } />
        <ProfileHeader />
      </div>
    );
  }
}
