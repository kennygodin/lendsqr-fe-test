interface UserCardProps {
  icon: string;
  label: string;
  value: string;
  bgColor: string;
}

const UserCard = ({ icon, label, value, bgColor }: UserCardProps) => {
  return (
    <div className="user-card">
      <div
        className="icon-container"
        style={{ backgroundColor: `${bgColor}20` }}
      >
        <img src={icon} alt="icon" />
      </div>

      <p className="card-label">{label}</p>
      <h2 className="card-value">{value}</h2>
    </div>
  );
};

export default UserCard;
