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
