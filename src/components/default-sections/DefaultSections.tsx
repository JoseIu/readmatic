import { useState } from 'react';
import { useSection } from '../../hooks/useSection';
import { Section } from '../../interfaces/section.interface';
import { Search } from '../search/Search';
import { DefaultSectionItem } from './DefaultSectionItem';

export const DefaultSections = () => {
  const { defaultSections } = useSection();

  const [searchTerm, setSearchTerm] = useState('');

  const defaultSectionsFiltered = SearchSectionByTerm(defaultSections, searchTerm);
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <ul className="sections">
        {defaultSectionsFiltered.map((section) => (
          <DefaultSectionItem key={section.id} section={section} />
        ))}
      </ul>
    </>
  );
};

const SearchSectionByTerm = (sections: Section[], searchTerm: string) => {
  if (!searchTerm) return sections;

  const searchTermLower = searchTerm.toLowerCase();

  return sections.filter((section) => section.title.toLowerCase().includes(searchTermLower));
};
