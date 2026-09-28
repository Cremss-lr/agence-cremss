import { ContactInfo } from "./ContactInfo";
import { OrderForm } from "./OrderForm";
import { Wave } from "../../components/wave";

export function Contact() {
  return (
    <section id="contact">
      <ContactInfo />
      <OrderForm />
      <Wave />
    </section>
  );
}
