import { SiteHeader } from "../../../layouts/site-header";
import { Customization } from "./Customization";
import { LivePreview } from "./LivePreview";
import { Button } from "../../../components/button";

export function Welcome() {
  return (
    <section>
      <SiteHeader />
      <Customization />
      <LivePreview />
      <Button />
    </section>
  );
}
