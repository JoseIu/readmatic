import { useContext } from 'react';
import { SectionContext } from '../context/SectionContext';

export const useSection = () => useContext(SectionContext);
