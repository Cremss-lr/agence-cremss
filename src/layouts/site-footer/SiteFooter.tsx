import { Wave } from "../../components/wave";
import { Logo } from "../../components/logo";
import { Icon } from "../../components/icon";
import { Button } from "../../components/button";

export function SiteFooter() {
  return (
    <footer>
      <Wave Wave="#1E3A3C" UpWave="#F2F1EE" BotWave="#FBE3D6" />
      <Logo />
      <Icon />
      <Button />
    </footer>
  );
}
