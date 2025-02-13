import { useEffect, useState } from 'react';
import { Section } from '../../interfaces/section.interface';
import defaultoSectionsPlaceholder from '../../mock/defaultSections.json';
import { SectionContext } from './SectionContext';

type Props = {
  children: React.ReactNode;
};
const initialSection: Section[] = defaultoSectionsPlaceholder;
export const SectionProvider = ({ children }: Props) => {
  const [sections, setSections] = useState<Section[]>(initialSection);
  const [defaultSections, setDefaultSections] = useState<Section[]>([]);
  const [sectionActive, setSectionActive] = useState<Section | null>(null);

  const addSection = (section: Section) => {
    console.log(section);
  };
  const newSectionSort = (newSections: Section[]) => {
    setSections(newSections);
  };
  const addSectionActive = (section: Section) => {
    setSectionActive(section);
  };

  useEffect(() => {
    setDefaultSections(defaultoSectionsPlaceholder);
  }, [setDefaultSections]);
  return (
    <SectionContext.Provider
      value={{ sections, defaultSections, addSection, sectionActive, addSectionActive, newSectionSort }}
    >
      {children}
    </SectionContext.Provider>
  );
};
