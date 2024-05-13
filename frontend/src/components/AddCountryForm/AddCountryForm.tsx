import { useRef, useState } from "react";
import styles from "./AddCountryForm.module.css";

const AddCountryForm = () => {
  const [formData, setFormData] = useState();

  const addCountry = () => {
    console.log("ok");
  };

  return (
    <form
      className={styles.addCountryForm}
      onSubmit={(e) => {
        e.preventDefault();
        addCountry();
      }}
    >
      <div className={styles.addCountryFormInputContainer}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="emoji">Emoji</label>
          <input name="emoji" type="emoji" />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input name="code" type="code" />
        </div>
      </div>
      <button type="submit">Add country</button>
    </form>
  );
};

export default AddCountryForm;
