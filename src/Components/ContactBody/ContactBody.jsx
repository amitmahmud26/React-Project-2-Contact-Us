import React from "react";
import styles from "./ContactBody.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const ContactBody = () => {
  return (
    <div className={`${styles.contactBody}`}>
      <div className={`${styles.contactBodyForm}`}>
        <div className={styles.contactBtns}>
          <button>
            <MdMessage /> Via Support Chat
          </button>
          <button>
            <IoIosCall /> Via Call
          </button>
        </div>
        <div className={styles.viaEmailBtn}>
          <button>
            <MdMessage /> Via Email Form
          </button>
        </div>
        <div className={styles.formInputs}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="Name" placeholder="" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="Email" name="email" />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input type="Text" name="text" />
          </div>
        </div>
        <div className={`${styles.contactBtns} ${styles.submitBtn}`}>
          <button>Submit</button>
        </div>
      </div>
      <div className={styles.contactBodyImg}>
        <img src="../../../public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactBody;
