import { PlanCard } from "@/components/PlanCard";
import "./plans.css";
export default function Plans({ title, price, children }: any) {
  return (
    <div>
      <h1>Schedule time with us.</h1>
      <div className="plan-cards-container">
        <PlanCard.Root title="Private Training" price="120">
          <PlanCard.LineInfo textInfo="info 1" />
        </PlanCard.Root>
      </div>
    </div>
  );
}
