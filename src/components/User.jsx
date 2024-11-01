import PropTypes from "prop-types";
const User = ({ user }) => {
  console.log(user);
  const userStyle = {
    border: "1px solid orange",
    borderRadius: "10px",
    padding: "20px 0",
  };
  return (
    <div>
      {
        <div style={userStyle}>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Company Name: {user.company.name}</p>
        </div>
      }
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
