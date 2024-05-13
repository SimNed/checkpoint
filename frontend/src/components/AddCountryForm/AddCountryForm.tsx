import { useEffect, useRef, useState } from "react";
import styles from "./AddCountryForm.module.css";
import { gql, useMutation } from "@apollo/client";

const AddCountryForm = () => {
  const CREATE_COUNTRY = gql`
    mutation Mutation($data: NewCountryInput!) {
      addCountry(data: $data) {
        name
        emoji
        code
      }
    }
  `;
  const [formData, setFormData] = useState({ name: "", emoji: "", code: "" });

  const [addCountry, { loading, error }] = useMutation(CREATE_COUNTRY);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <form
      className={styles.addCountryForm}
      onSubmit={(e) => {
        e.preventDefault();
        addCountry({ variables: { data: { ...formData } } });
      }}
    >
      <div className={styles.addCountryFormInputContainer}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            type="text"
            onBlur={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji</label>
          <input
            required
            name="emoji"
            type="emoji"
            onBlur={(e) => setFormData({ ...formData, emoji: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input
            required
            minLength={2}
            maxLength={2}
            name="code"
            type="code"
            onBlur={(e) => setFormData({ ...formData, code: e.target.value })}
          />
        </div>
      </div>
      <button type="submit">Add country</button>
    </form>
  );
};

export default AddCountryForm;
