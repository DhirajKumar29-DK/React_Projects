import Button from "../Button/Button"
import styles from "./Form.module.css"
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const FormDetail = () => {

const [name, setName] = useState("Dhiraj");
const [email, setEmail] = useState("dhiraj@gmail.com");
const [text, setText] = useState("i'm the boss")

 
  const onViaCallSubmit = () =>{
    console.log("I call you")
   }

   const onSubmit =(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
   }

  return (
    <section className={styles.container}>
     <div className={styles.contact_form}>
      <div className={styles.top_button}>
        <Button 
        
        text="VIA SUPPORT CHAT" icon={<MdMessage  fontSize="24px" />} />
        <Button 
        onClick={onViaCallSubmit}
        text="VIA Call" icon={<MdCall       fontSize="24px"/>}/>
      </div>
      <Button 
        isOutline={true}
        text="VIA EMAIL FORM!" icon={<HiMail   fontSize="24px"/>}/>

      <form 
      onSubmit={onSubmit}>
        <div className={styles.form_controller}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>

        <div className={styles.form_controller}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
        </div>

        <div className={styles.form_controller}>
          <label htmlFor="textarea">Text</label>
          <textarea name="textarea" id="textarea" rows="10"></textarea>
        </div>

        <div 
        style={{
          display: "flex",
          justifyContent: "end"
        }}>
          <Button text="SUBMIT"/>
        </div>
      </form>

      <div>
        {name+" "+email+" "+text}
      </div>
     </div>
        
     <div className={styles.contact_image}>
      <img src="/images/contact.svg" alt="contact_logo" />
     </div>
    </section>
  )
}

export default FormDetail
