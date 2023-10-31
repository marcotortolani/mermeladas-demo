import { useState, useId } from "preact/hooks";
import { Star } from "lucide-react";

export default function ButtonFav({id}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const buttonID = useId();
  
  return (
    <button id={buttonID} onClick={() => setSelectedItem(!selectedItem)}>
      <Star
        size={30}
        stroke={"#000"}
        fill={`${selectedItem ? "#FCCE73" : "#0000"}`}
      />
    </button>
  );
}
