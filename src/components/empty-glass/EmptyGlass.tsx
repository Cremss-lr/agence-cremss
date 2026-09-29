import { Bubbles } from "../bubbles";
import verreVide from "./svg/verre-vide.svg";

export function EmptyGlass() {
  return (
    <div aria-hidden="true" className="relative w-full max-w-[560px]">
      <img src={verreVide} alt="" className="w-full" />
      {/* Position from the Figma 404 frame: 317/560 from the left, 28/560 above the glass rim */}
      <div className="absolute left-[56.6%] top-[-5%] w-[10.4%]">
        <Bubbles />
      </div>
    </div>
  );
}
