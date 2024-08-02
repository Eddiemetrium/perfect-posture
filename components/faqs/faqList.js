import FaqItem from "./faqItem"; // Corrected import name
import { faqs } from "@/assets/data/faqs";

const FaqList = () => {
  return (
    <div className="mt-[38px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
