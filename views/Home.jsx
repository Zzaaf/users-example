/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const Registration = require('./Registration');

module.exports = function Home({ users, authUser }) {
  return (
    <Layout>
      <div className="container">
        {!authUser ? <h1 className="mt-5">Users</h1> : (
          <h1 className="mt-5">
            User:
            {' '}
            {`${authUser.email}`}
          </h1>
        )}

        <ul id="list" className="list-group mt-5">
          {users.length ? users.map((user) => <li key={user.id} data-id={user.id} className="list-group-item">{user.email}</li>) : <li className="list-group-item disabled">No data!</li>}
        </ul>

        <Registration />
      </div>
    </Layout>
  );
};
