'use client';

import React, { useState, createContext, useContext} from 'react'
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// using context component with children prop allows the children to be server components 
// while the context provider itself is a client component, located high in the tree

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); // don't want to access value outside of context provider component

export default function ActiveSectionContextProvider( {
    children} : ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [lastClick, setLastClick] = useState(0); // used to disable intersection observer updates for 1 second after a click on a nav link
    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, lastClick, setLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context; 
  }
