import { ContactInfo } from "./ContactInfo";
import { OrderForm } from "./OrderForm";
import { Wave } from "../../components/wave";

export function Contact() {
  return (
    <section id="contact">
      <ContactInfo />
      <OrderForm />
      <Wave compact Wave="#1E3A3C" UpWave="#F2F1EE" BotWave="#FBE3D6" />
    </section>
  );
}
