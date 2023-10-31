import recipesIcon from "../assets/img/recipe.png";
import offersIcon from "../assets/img/best-price.png";
import newsIcon from "../assets/img/newspaper.png";
import eventsIcon from "../assets/img/planner.png";

import ButtonFav from "../components/ButtonFav";

const listItems = [
  {
    id: 1,
    icon: recipesIcon,
    title: "Recetas",
    description:
      "Officia Lorem minim est sit culpa exercitation pariatur sit veniam.",
  },
  {
    id: 2,
    icon: offersIcon,
    title: "Ofertas",
    description:
      "Officia Lorem minim est sit culpa exercitation pariatur sit veniam.",
  },
  {
    id: 3,
    icon: newsIcon,
    title: "Noticias",
    description:
      "Officia Lorem minim est sit culpa exercitation pariatur sit veniam.",
  },
  {
    id: 4,
    icon: eventsIcon,
    title: "Eventos",
    description:
      "Officia Lorem minim est sit culpa exercitation pariatur sit veniam.",
  },
];

export default function Blog() {
  return (
    <div className=" w-full h-full p-4">
      <ul className=" w-full h-full min-h-[550px] py-4  flex flex-col items-center justify-center gap-5 ">
        {listItems.map((item) => (
          <li
            className=" w-full h-full  p-2 bg-gradient-to-br from-gray-300 to-gray-500 shadow-inner shadow-white flex items-center justify-center gap-2 rounded-xl"
            key={item.id}
          >
            <div className=" w-1/6 p-1 cursor-default select-none pointer-events-none">
              <img src={item.icon} alt={`${item.title} Icon`} />
            </div>
            <div className=" w-4/6 flex flex-col items-start justify-center gap-4 cursor-default select-none pointer-events-none">
              <h5 className=" font-title font-semibold text-xl">
                {item.title}
              </h5>
              <p className=" leading-4">{item.description}</p>
            </div>
            <div className=" ">
              <ButtonFav id={item.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-star"
>
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>; */
}
