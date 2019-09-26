import React from "react";
import Icon from "../awesome-icon";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { switchMailCheckbox } from "../../actions/mailsActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const MailsListItem = ({ message, switchMailCheckbox }) => {
  const {
    id,
    author,
    subject,
    shortDescription,
    date,
    readed,
    isFavorite,
    isChecked
  } = message;
  const {
    listElement,
    listElementActive,
    checkbox,
    favorite,
    authorWrapper,
    subjectWrapper,
    messageDate
  } = styles;
  const fontThickness = readed ? "400" : "800";

  const handleCheckboxChange = (isChecked, id) => {
    // Change checkbox state in parent state
    switchMailCheckbox(!isChecked, id);
  };

  const mailClassName = `${listElement} ${isChecked ? listElementActive : ""}`;

  return (
    <article className={mailClassName}>
      <div className={checkbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckboxChange(isChecked, id)}
        />
      </div>
      <div className={favorite}>
        {isFavorite ? (
          <Icon icon={faStarFilled} style={{ color: "#FFBD1B" }} />
        ) : (
          <Icon icon={faStar} />
        )}
      </div>
      <div className={authorWrapper}>
        <p style={{ fontWeight: fontThickness }}>{author}</p>
      </div>
      <div className={subjectWrapper}>
        <h6 style={{ fontWeight: fontThickness }}>{subject}</h6>
        <p>{shortDescription}</p>
      </div>
      <div className={messageDate}>
        <p style={{ fontWeight: fontThickness }}>{date}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = {
  switchMailCheckbox
}

export default connect(null, mapDispatchToProps)(MailsListItem);
