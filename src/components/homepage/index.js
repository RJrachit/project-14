import { PASSWORD } from "../../constant";
import { Navigate } from "react-router-dom";

function Homepage(props) {
  return (
    <>
      {props.password !== PASSWORD ? (
        <>
          <Navigate to="/project-14" />
        </>
      ) : (
        <>
          <div className="homepage">Rachit</div>
        </>
      )}
    </>
  );
}

export default Homepage;
