import { gql, useQuery } from "@apollo/client";
import styles from "./CountryList.module.css";
import { useRouter } from "next/router";

const ContryList = () => {
  const GET_COUNTRIES = gql`
    query Countries {
      countries {
        emoji
        name
        code
      }
    }
  `;

  const router = useRouter();
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul className={styles.countryContainer}>
      {data &&
        data.countries &&
        data.countries.map(
          (country: { emoji: string; name: string; code: string }) => (
            <li>
              <a
                href="#"
                onClick={() => router.push(`/countries/${country.code}`)}
              >
                <p>{country.name}</p>
                <p>{country.emoji}</p>
              </a>
            </li>
          )
        )}
    </ul>
  );
};

export default ContryList;
