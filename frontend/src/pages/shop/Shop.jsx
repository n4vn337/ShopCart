import {
  Hero,
  NewsLetter,
  Offers,
  Popular,
  NewCollections,
} from "../../components";
import "./shop.scss";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
