import { LineShadowText } from "./ui/line-shadow-text";

export function Logo() {
  return (
    <div className="flex flex-col items-center leading-none font-semibold tracking-tighter">
      <span className="text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Anime
      </span>
      <LineShadowText className="italic dark:text-gray-300 text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Phillic
      </LineShadowText>
    </div>
  );
}