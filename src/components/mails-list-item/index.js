import React, { useState } from "react";
import Icon from "../awesome-icon";
import { Redirect } from "react-router-dom";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import {
  switchMailCheckbox,
  switchFavoriteMessage
} from "../../actions/mailsActions";
import { convertDate } from "../../utils/convertDate";
import { connect } from "react-redux";
import styles from "./index.module.css";

const MailsListItem = ({
  message,
  switchMailCheckbox,
  switchFavoriteMessage
}) => {
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
  const [redirect, setRedirect] = useState(false);
  const fontThickness = readed ? "400" : "800";

  const handleCheckboxChange = (isChecked, id) => {
    switchMailCheckbox(isChecked, id);
  };

  const handleFavoriteChange = (isFavorite, id) => {
    switchFavoriteMessage(isFavorite, id);
  };

  const mailClassName = `${listElement} ${isChecked ? listElementActive : ""}`;

  const handleMessageClick = () => {
    setRedirect(true)
  }

  return (
    <article className={mailClassName} onClick={() => handleMessageClick()}>
      {redirect && <Redirect to={{ pathname: "/read-message", state: message }} />}
      <div className={checkbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckboxChange(isChecked, id)}
        />
      </div>
      <div className={favorite}>
        {isFavorite ? (
          <Icon
            icon={faStarFilled}
            style={{ color: "#FFBD1B" }}
            onClick={() => handleFavoriteChange(isFavorite, id)}
          />
        ) : (
          <Icon
            icon={faStar}
            onClick={() => handleFavoriteChange(isFavorite, id)}
          />
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
        <p style={{ fontWeight: fontThickness }}>{convertDate(date)}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = {
  switchMailCheckbox,
  switchFavoriteMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MailsListItem);
