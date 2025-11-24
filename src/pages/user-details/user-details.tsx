import { useNavigate } from "react-router";
import "./user-details.scss";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="user-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <img src="/icons/arrow-back.svg" alt="back-arrow" />
        <span>Back to Users</span>
      </button>
    </div>
  );
};

export default UserDetailsPage;
