import { useReducer } from 'react';
import { Section } from '../interfaces/section.interface';
import defaultoSectionsPlaceholder from '../mock/defaultSections.json';
import {
  getSectionsFromStorage,
  removeSectionFromStorage,
  saveSectionsToStorage,
  updateSectionInStorage,
} from '../utils/sectionStore';
import { SectionContext } from './SectionContext';
import { sectionReducer } from './sectionReducer';

type Props = {
  children: React.ReactNode;
};
export interface SectionState {
  sections: Section[];
  defaultSections: Section[];
  sectionActive: Section | null;
}
const initialSection: Section = defaultoSectionsPlaceholder[0];

const initalState: SectionState = {
  sections: [],
  defaultSections: [],
  sectionActive: null,
};

const init = (): SectionState => {
  const sectionsInStorage =
    getSectionsFromStorage().length === 0 ? [initialSection] : getSectionsFromStorage();

  return {
    sections: sectionsInStorage,
    defaultSections: defaultoSectionsPlaceholder,
    sectionActive: initialSection,
  };
};
export const SectionProvider = ({ children }: Props) => {
  const [sections, dispatch] = useReducer(sectionReducer, initalState, init);

  const addSection = (section: Section) => {
    const isInSections = sections.sections.some((s) => s.id === section.id);
    if (isInSections) return;
    dispatch({ type: 'ADD_SECTION', payload: section });
    dispatch({ type: 'ADD_SECTION_ACTIVE', payload: section });

    saveSectionsToStorage([...sections.sections, section]);
  };
  const newSectionSort = (newSections: Section[]) => {
    dispatch({ type: 'NEW_SECTIONS_SORT', payload: newSections });
    saveSectionsToStorage(newSections);
  };
  const addSectionActive = (section: Section) => {
    dispatch({ type: 'ADD_SECTION_ACTIVE', payload: section });
  };
  const updateSection = (sectionId: string, content: string) => {
    dispatch({ type: 'UPDATE_SECTION', payload: { sectionId, content } });
    updateSectionInStorage(sectionId, content);
  };
  const removeSection = (sectionId: string) => {
    dispatch({ type: 'REMOVE_SECTION', payload: sectionId });

    removeSectionFromStorage(sectionId);
  };

  return (
    <SectionContext.Provider
      value={{
        ...sections,
        addSection,
        addSectionActive,
        newSectionSort,
        updateSection,
        removeSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
