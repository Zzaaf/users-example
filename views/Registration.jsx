const React = require('react');

module.exports = function Registration() {
  return (
    <form id="form" className="mt-5">
      <div className="mb-3">
        <input type="email" autoFocus name="email" className="form-control" placeholder="Email" />
      </div>
      <div className="mb-3">
        <input type="password" name="password" placeholder="Password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Registration!</button>
    </form>
  );
};
