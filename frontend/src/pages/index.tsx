import Header from "@/components/Header";
import AddCountryForm from "@/components/AddCountryForm/AddCountryForm";
import CountryList from "@/components/CountryList/CountryList";

export default function Home() {
  return (
    <main>
      <Header />
      <AddCountryForm />
      <CountryList />
    </main>
  );
}
