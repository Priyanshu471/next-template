import useStep from "@/hooks/use-step";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = ({ page }: { page: string }) => {
  const { step, setStep } = useStep();
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="absolute flex justify-between items-center top-0 w-full px-10 py-6 border-b">
      <button
        onClick={() => handlePrev()}
        disabled={step === 1}
        className={`disabled:opacity-0 hover:bg-gray-200 p-1 rounded-md`}
      >
        <ChevronLeft />
      </button>
      <h1 className="text-2xl font-medium">{page}</h1>
      <button
        onClick={() => handleNext()}
        disabled={step === 3}
        className={`disabled:opacity-0 hover:bg-gray-200 p-1 rounded-md`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Header;
