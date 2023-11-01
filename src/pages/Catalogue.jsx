
import { catalogueItems } from "../data/products";
import ItemCatalogue from "../components/ItemCatalogue";

export default function Catalogue() {

  return (
    <div className=" relative top-14 w-full h-full px-4 py-2  flex flex-col items-center justify-center gap-3 ">
      <ul className=" w-full h-full min-h-screen pt-4 flex flex-col items-center justify-start gap-3 ">
        {catalogueItems.map((item) => (
          <ItemCatalogue item={item} key={item.id} />
        ))}
      </ul>
      <div className=" w-full h-20 bg-transparent content-normal" />
    </div>
  );
}
