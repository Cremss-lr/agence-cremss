import { ThankYou } from "./ThankYou";
import { ChoiceChip } from "../../components/choice-chip";
import { Field } from "../../components/field";
import { Button } from "../../components/button";

export function OrderForm() {
  return (
    <form>
      <ChoiceChip />
      <Field />
      <Button />
      <ThankYou />
    </form>
  );
}
