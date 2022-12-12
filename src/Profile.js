import { useState } from "react";

function Profile() {
  const [loggedIN, setloggedIN] = useState(3);
  return (
    <>
      {loggedIN == 1 ? (
        <h1>Rahul</h1>
      ) : loggedIN == 2 ? (
        <h2>Paswan</h2>
      ) : (
        <h1>Rohit</h1>
      )}
    </>
  );
}
export default Profile;
