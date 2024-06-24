type HashtagItemProps = {
  comp: string;
  onSelectCompany: (comp: string) => void;
};
export default function HashtagItem({
  comp,
  onSelectCompany,
}: HashtagItemProps) {
  return (
    <li key={comp}>
      <button onClick={() => onSelectCompany(comp)}>#{comp}</button>
    </li>
  );
}
