import AddCountryForm from "@/components/AddCountryForm/AddCountryForm";
import CountryList from "@/components/CountryList/CountryList";

export default function Home() {
  return (
    <main>
      <AddCountryForm />
      <CountryList />
    </main>
  );
}
