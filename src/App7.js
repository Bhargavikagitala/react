import React from 'react';
import './style.css';

class App7 extends React.Component {
  render() {
    var employees = [
      { empId: 1001, name: 'Jack', designation: 'System Engineer' },
      { empId: 1002, name: 'Jill', designation: 'Power programmer' },
      { empId: 1003, name: 'Elle', designation: 'Special programmer' },
    ];
    return (
      <React.Fragment>