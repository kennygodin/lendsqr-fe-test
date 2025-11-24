import "./general-details.scss";
import { useOutletContext } from "react-router";
import type { UserDetailsOutletContext } from "@/types/context.type";

interface DetailsItemProps {
  label: string;
  value: string | number;
}

const DetailsItem = ({ label, value }: DetailsItemProps) => {
  return (
    <div className="general-detail-item">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  );
};

const GeneralDetailsPage = () => {
  const { user } = useOutletContext<UserDetailsOutletContext>();

  return (
    <div className="general-details-container">
      <section className="details-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="details-grid">
          <DetailsItem label="FULL NAME" value={user.personalInfo.fullName} />
          <DetailsItem label="PHONE NUMBER" value={user.personalInfo.phone} />
          <DetailsItem label="EMAIL ADDRESS" value={user.personalInfo.email} />
          <DetailsItem label="BVN" value={user.personalInfo.bvn} />
          <DetailsItem label="GENDER" value={user.personalInfo.gender} />
          <DetailsItem
            label="MARITAL STATUS"
            value={user.personalInfo.maritalStatus}
          />
          <DetailsItem
            label="CHILDREN"
            value={user.personalInfo.children || "None"}
          />
          <DetailsItem
            label="TYPE OF RESIDENCE"
            value={user.personalInfo.typeOfResidence}
          />
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Education and Employment</h3>
        <div className="details-grid">
          <DetailsItem
            label="LEVEL OF EDUCATION"
            value={user.educationAndEmployment.level}
          />
          <DetailsItem
            label="EMPLOYMENT STATUS"
            value={user.educationAndEmployment.employmentStatus}
          />
          <DetailsItem
            label="SECTOR OF EMPLOYMENT"
            value={user.educationAndEmployment.sector}
          />
          <DetailsItem
            label="DURATION OF EMPLOYMENT"
            value={user.educationAndEmployment.duration}
          />
          <DetailsItem
            label="OFFICE EMAIL"
            value={user.educationAndEmployment.officeEmail}
          />
          <DetailsItem
            label="MONTHLY INCOME"
            value={user.educationAndEmployment.monthlyIncome}
          />
          <DetailsItem
            label="LOAN REPAYMENT"
            value={user.educationAndEmployment.loanRepayment}
          />
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Socials</h3>
        <div className="details-grid">
          <DetailsItem label="TWITTER" value={user.socials.twitter} />
          <DetailsItem label="FACEBOOK" value={user.socials.facebook} />
          <DetailsItem label="INSTAGRAM" value={user.socials.instagram} />
        </div>
      </section>

      {user.guarantors && user.guarantors.length > 0 && (
        <>
          <section className="details-section">
            <h3 className="section-title">Guarantor</h3>
            <div className="details-grid">
              <DetailsItem
                label="FULL NAME"
                value={user.guarantors[0].fullName}
              />
              <DetailsItem
                label="PHONE NUMBER"
                value={user.guarantors[0].phone}
              />
              <DetailsItem
                label="EMAIL ADDRESS"
                value={user.guarantors[0].email}
              />
              <DetailsItem
                label="RELATIONSHIP"
                value={user.guarantors[0].relationship}
              />
            </div>
          </section>

          {user.guarantors.length > 1 && (
            <section className="details-section">
              <div className="details-grid">
                <DetailsItem
                  label="FULL NAME"
                  value={user.guarantors[1].fullName}
                />
                <DetailsItem
                  label="PHONE NUMBER"
                  value={user.guarantors[1].phone}
                />
                <DetailsItem
                  label="EMAIL ADDRESS"
                  value={user.guarantors[1].email}
                />
                <DetailsItem
                  label="RELATIONSHIP"
                  value={user.guarantors[1].relationship}
                />
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default GeneralDetailsPage;
