import React, {useState} from 'react';
import Icon from "../awesome-icon";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const MailsListItem = ({message, switchCheckbox}) => {
  const { id, author, subject, shortDescription, date, readed, isChecked } = message;
  const { listElement, checkbox, favorite, authorWrapper, subjectWrapper, messageDate } = styles;
  const fontThickness = readed ? "400" : "800";

  const [checkboxValue = false, setCheckboxValue] = useState();

  const handleCheckboxChange = () => {
    setCheckboxValue(!checkboxValue);
    // Change checkbox state in parent state
    switchCheckbox(!checkboxValue, id);
  }
  
  return (
    <article className={listElement}>
      <div className={checkbox}>
        <input type="checkbox" value={checkboxValue} onClick={() => handleCheckboxChange()} />
      </div>
      <div className={favorite}> 
        { isChecked ? <Icon icon={faStarFilled} style={{color: "#FFBD1B"}} /> : <Icon icon={faStar} /> }
      </div>
      <div className={authorWrapper}>
        <p style={{fontWeight: fontThickness}}>{author}</p>
      </div>
      <div className={subjectWrapper}>
        <h6 style={{fontWeight: fontThickness}}>{subject}</h6>
        <p>{shortDescription}</p>
      </div>
      <div className={messageDate}>
        <p style={{fontWeight: fontThickness}}>{date}</p>
      </div>
    </article>
  )
}

export default MailsListItem
