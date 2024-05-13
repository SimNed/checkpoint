import styles from "./CountryList.module.css";
const ContryList = () => {
  const countries = [
    {
      emoji: "🇫🇷",
      name: "France",
    },
    {
      emoji: "🇨🇳",
      name: "China",
    },
    {
      emoji: "🇨🇦",
      name: "Canada",
    },
    {
      emoji: "🇦🇺",
      name: "Australia",
    },
    {
      emoji: "🇰🇪",
      name: "Kenya",
    },
    {
      emoji: "🇧🇷",
      name: "Brazil",
    },
  ];

  return (
    <ul className={styles.countryContainer}>
      {countries.map((country) => (
        <li>
          <p>{country.name}</p>
          <p>{country.emoji}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContryList;
