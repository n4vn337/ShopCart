import { Hero, Offers, Popular } from "../../components";
import { NewCollections } from "../../components/newCollections/NewCollections";
import "./shop.scss";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};
