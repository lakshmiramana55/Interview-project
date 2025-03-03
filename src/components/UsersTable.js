import React, { useEffect, useState } from "react";
import "./UsersTable.css";
import { fetchUsers } from "../api/fetchUsers";

const UsersTable = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUsers();
      setUser(response);
      console.log(response)
    };
    getUser();
  }, []);

  return (
    <div className="users-table">
      <h2>User Details</h2>
      {user ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={index}>
                  <td>
                    <img src={user.picture?.large} alt="Profile" className="profile-img" />
                  </td>
                  <td>{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob?.age}</td>
                  <td>{user.gender}</td>
                  <td>{`${user.location.street?.name}, ${user.location?.city}, ${user.location?.state}, ${user.nat}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersTable;
