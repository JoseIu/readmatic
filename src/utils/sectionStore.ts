import { Section } from '../interfaces/section.interface';
const SECTION_KEY = 'sections';
export const getSectionsFromStorage = (): Section[] => {
  const sections = JSON.parse(localStorage.getItem(SECTION_KEY) || '[]') as Section[];

  return sections;
};

export const saveSectionsToStorage = (sections: Section[]) => {
  localStorage.setItem(SECTION_KEY, JSON.stringify(sections));
};

export const updateSectionInStorage = (sectionId: string, content: string) => {
  const sections = getSectionsFromStorage();
  const sectionToUpdate = sections.findIndex((section) => section.id === sectionId);

  if (sectionToUpdate === -1) return;

  sections[sectionToUpdate].content = content;

  saveSectionsToStorage(sections);
};

export const removeSectionFromStorage = (sectionId: string) => {
  const sections = getSectionsFromStorage();
  const newSections = sections.filter((section) => section.id !== sectionId);
  saveSectionsToStorage(newSections);
};
