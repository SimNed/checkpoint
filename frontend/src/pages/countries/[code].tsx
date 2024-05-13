import { useRouter } from "next/router";

import { gql, useQuery } from "@apollo/client";
import styles from "./countries.module.css";

const GET_COUNTRY_BY_CODE = gql`
  query Query($code: String!) {
    country(code: $code) {
      code
      continent {
        name
      }
      emoji
      name
    }
  }
`;

const ArticlePage = () => {
  const router = useRouter();
  const { code } = router.query as {
    code: string;
  };

  console.log(code);

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code: code },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.countryDetailsContainer}>
      <div>
        <h1>
          {data.country.name} {data.country.emoji}
        </h1>
        {data.country.continent && (
          <p>Continent: {data.country.continent.name}</p>
        )}
        <p>Code: {data.country.code}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
