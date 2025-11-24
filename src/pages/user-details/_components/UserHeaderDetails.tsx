import type { User } from "@/types/user.type";
import { formatCurrency } from "@/utils/formatCurrency";

interface UserDetailsHeaderProps {
  user: User;
}

export const UserDetailsHeader = ({ user }: UserDetailsHeaderProps) => {
  const renderStars = (tier: number) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <img
          key={i}
          src={
            i <= tier ? "/icons/star-filled.svg" : "/icons/star-unfilled.svg"
          }
          alt={i <= tier ? "filled star" : "unfilled star"}
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div className="user-header-details">
      <div className="user-profile-section">
        <div className="user-avatar">
          <img src="/icons/avatar-user.svg" alt="user avatar" />
        </div>
        <div className="user-name-info">
          <h2 className="user-fullname">{user.personalInfo.fullName}</h2>
          <p className="user-id">{user.username}</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="user-tier-section">
        <p className="tier-label">User's Tier</p>
        <div className="tier-stars">{renderStars(user.accountInfo.tier)}</div>
      </div>

      <div className="divider"></div>

      <div className="user-bank-section">
        <h2 className="account-balance">
          {formatCurrency(Number(user.accountInfo.accountBalance))}
        </h2>
        <p className="bank-info">
          {user.accountInfo.accountNumber}/{user.accountInfo.bank}
        </p>
      </div>
    </div>
  );
};
