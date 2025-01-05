import React from "react";

const TableData = ({ userData }) => {

  console.log("TableData", userData);

  return (
    <center>
      {userData.map((item, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <>
                  <th>{item.name}</th>
                  <th>{item.email}</th>
                  <th>{item.password}</th>
                </>
              </tr>
            </tbody>
          </table>
        );
      })}
    </center>
  );
};

export default TableData;
