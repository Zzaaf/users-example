const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth() {
  return (
    <Layout>
      <div className="container">
        <h1 className="mt-5">Auth</h1>
        <form method="post" action="/auth" className="mt-5">
          <div className="mb-3">
            <input type="email" autoFocus name="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" name="password" placeholder="Password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Login!</button>
        </form>
      </div>
    </Layout>

  );
};
