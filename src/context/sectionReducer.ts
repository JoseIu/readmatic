import { Section } from '../interfaces/section.interface';
import { SectionState } from './SectionProvider';

type SectionAction =
  | { type: 'SET_DEFAULT_SECTIONS'; payload: Section[] }
  | { type: 'ADD_SECTION'; payload: Section }
  | { type: 'NEW_SECTIONS_SORT'; payload: Section[] }
  | { type: 'ADD_SECTION_ACTIVE'; payload: Section }
  | { type: 'UPDATE_SECTION'; payload: { sectionId: string; content: string } };

export const sectionReducer = (state: SectionState, action: SectionAction) => {
  switch (action.type) {
    case 'SET_DEFAULT_SECTIONS':
      return {
        ...state,
        defaultSections: action.payload,
      };
    case 'ADD_SECTION':
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
    case 'NEW_SECTIONS_SORT':
      return {
        ...state,
        sections: action.payload,
      };
    case 'ADD_SECTION_ACTIVE':
      return {
        ...state,
        sectionActive: action.payload,
      };
    case 'UPDATE_SECTION': {
      const sectionToUpdate = state.sections.findIndex((section) => section.id === action.payload.sectionId);

      if (sectionToUpdate === -1) return state;

      return {
        ...state,
        sections: state.sections.map((section, index) =>
          index === sectionToUpdate ? { ...section, content: action.payload.content } : section
        ),
      };
    }

    default:
      return state;
  }
};
