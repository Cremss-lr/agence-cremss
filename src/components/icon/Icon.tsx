import arrow from "./arrow.svg";
import external from "./external-link.svg";

const icons = { arrow, external };

type IconProps = {
  name?: keyof typeof icons;
  className?: string;
};

export function Icon({ name = "arrow", className = "size-6 object-none" }: IconProps) {
  return <img src={icons[name]} alt="" aria-hidden="true" className={className} />;
}
