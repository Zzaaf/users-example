/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Card({ user }) {
  return (
    <li key={user.id} className="list-group-item">{user.email}</li>
  );
};
