import data from "./faqs.json";
import FAQ from "@/libs/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 ml-5 mt-3">
      {data.map((item, index) => (
        <FAQ key={index} {...item} />
      ))}
    </div>
  );
}
