import arrow from "./arrow.svg";

const icons = { arrow };

export function Icon({ name = "arrow" }: { name?: keyof typeof icons }) {
  return <img src={icons[name]} alt="" aria-hidden="true" className="size-6 object-none" />;
}
