import React from 'react';
import './style.css';

class App5 extends React.Component {
  render() {
    var employees = [
      { empId: 1001, name: 'Jack', designation: 'System Engineer' },
      { empId: 1002, name: 'Jill', designation: 'Power programmer' },
      { empId: 1003, name: 'Elle', designation: 'Special programmer' },
    ];
    return (
      <React.Fragment>
        <table style={{ width:'50' }} className="table">
          <thead className="react-thead">
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {
            employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default App5;