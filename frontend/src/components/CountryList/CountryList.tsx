import { gql, useQuery } from "@apollo/client";
import styles from "./CountryList.module.css";

const ContryList = () => {
  const GET_COUNTRIES = gql`
    query Countries {
      countries {
        emoji
        name
      }
    }
  `;

  const { loading, error, data } = useQuery<any>(GET_COUNTRIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul className={styles.countryContainer}>
      {data &&
        data.countries &&
        data.countries.map((country) => (
          <li>
            <a href="">
              <p>{country.name}</p>
              <p>{country.emoji}</p>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ContryList;
