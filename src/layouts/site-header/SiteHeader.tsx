import { Logo } from "../../components/logo";
import { Button } from "../../components/button";
import { MobileMenu } from "../../components/mobile-menu";

export function SiteHeader() {
  return (
    <header>
      <Logo />
      <Button />
      <MobileMenu />
    </header>
  );
}
