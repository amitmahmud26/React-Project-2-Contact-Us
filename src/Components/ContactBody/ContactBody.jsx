import React, { useState } from "react";
import styles from "./ContactBody.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactBody = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  // console.log("ok")
  const onViaCall = () => {
    console.log("I'm from call");
  };
  const onViaSupportChat = () => {
    console.log("I'm from support chat");
  };
  const onViaEmailForm = () => {
    console.log("I'm from email form");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setName (event.target[0].value);
    setEmail (event.target[1].value);
    setText (event.target[2].value);
  };
  return (
    <div className={`${styles.contactBody}`}>
      <div className={`${styles.contactBodyForm}`}>
        <div className={styles.contactBtns}>
          <button onClick={onViaSupportChat}>
            <MdMessage /> Via Support Chat
          </button>
          <button onClick={onViaCall}>
            <IoIosCall /> Via Call
          </button>
        </div>
        <div className={styles.viaEmailBtn}>
          <button onClick={onViaEmailForm}>
            <MdEmail /> Via Email Form
          </button>
        </div>
        <form onSubmit={onSubmit} className={styles.formInputs}>
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
            <textarea rows={5} type="Text" name="text" />
          </div>
          <div className={`${styles.contactBtns} ${styles.submitBtn}`}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <label htmlFor=""> Name: {name} <br/>Email:  {email} <br />Text: {text}</label>
      </div>
      <div className={styles.contactBodyImg}>
        <img src="../../../public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactBody;
