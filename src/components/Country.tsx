import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
    const { country } = props; //p tagında props.country.name yazmak yerine destructure yapılabilir.
  return (
    <p>
      {country.name} - {country.capital} 
    </p> // ekrana yazdırılır
  );
};

export default Country;
