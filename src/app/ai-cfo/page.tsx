import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import PromptBox from "../../components/ai/PromptBox";
import Recommendation from "../../components/ai/Recommendation";
import RiskBadge from "../../components/ai/RiskBadge";
import ImpactCard from "../../components/ai/ImpactCard";
import ActionPlan from "../../components/ai/ActionPlan";
import ConfidenceCard from "../../components/ai/ConfidenceCard";
import SuggestionCards from "../../components/ai/SuggestionCards";
import QuestionHistory from "../../components/ai/QuestionHistory";
export default function AICFOPage() {
  return (
    <div className="flex bg-[#F8F9FA] min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8 space-y-8">

          <div>
            <h1 className="text-4xl font-bold">
              AI CFO
            </h1>

            <p className="text-gray-500 mt-2">
              Your executive financial advisor powered by AI.
            </p>
          </div>

          <PromptBox />

          <div className="grid grid-cols-3 gap-6">

            <Recommendation />

            <RiskBadge />

            <ConfidenceCard />

          </div>
          <div className="grid grid-cols-2 gap-8">

    <SuggestionCards />

    <QuestionHistory />

</div>

          <ImpactCard />

          <ActionPlan />

        </main>

      </div>

    </div>
  );
}