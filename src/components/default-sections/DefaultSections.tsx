import { useSection } from '../../hooks/useSection';
import { DefaultSectionItem } from './DefaultSectionItem';

export const DefaultSections = () => {
  const { defaultSections } = useSection();
  return (
    <ul className="sections">
      {defaultSections.map((section) => (
        <DefaultSectionItem key={section.id} section={section} />
      ))}
    </ul>
  );
};
