import { createContext } from 'react';
import { Section } from '../../interfaces/section.interface';

interface SectionsContextProps {
  defaultSections: Section[];
  sections: Section[];
  sectionActive: Section | null;
  newSectionSort: (newSections: Section[]) => void;
  addSectionActive: (section: Section) => void;
  addSection: (section: Section) => void;
  //   updateSection: (sectionId: string, content: string) => void;
}

export const SectionContext = createContext<SectionsContextProps>({} as SectionsContextProps);
