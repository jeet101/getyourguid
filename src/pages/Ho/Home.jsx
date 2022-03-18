import { Banner } from "../../components/banner/Banner";
import { Destinations } from "../../components/destinations/Destinations";
import { Escape } from "../../components/escape/Escape";
import { Experiences } from "../../components/experiences/Experiences";
import { Find } from "../../components/find/Find";
import { Navbar } from "../../components/navBar/Navbar";
import { Trip } from "../../components/trip/Trip";


export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Experiences/>
      <Destinations/>
      <Find/>
      <Trip/>
      <Escape/>
    </>
  );
};
