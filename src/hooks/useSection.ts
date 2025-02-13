import { useContext } from 'react';
import { SectionContext } from '../components/context/SectionContext';

export const useSection = () => useContext(SectionContext);
