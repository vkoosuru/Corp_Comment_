import { useFeedbackItemsContext } from "../lib/hooks";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((comp) => {
        return (
          <HashtagItem
            key={comp}
            onSelectCompany={handleSelectCompany}
            comp={comp}
          />
        );
      })}
    </ul>
  );
}
