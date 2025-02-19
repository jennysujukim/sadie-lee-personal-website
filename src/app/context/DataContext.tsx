"use client"

import React, { createContext, useState, useEffect } from "react";
import { WorkType } from '../../types/models/Work';
import { AboutType } from "@/types/models/About";
import { getData } from '../../../sanity/sanity.query';

type DataContextType = {
  works: WorkType[];
  about: AboutType | null;
  setSelectedWorks: (works: WorkType[]) => void;
  selectedWorks: WorkType[];
  filterWorks: (filter: string) => void;
};

type DataContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: DataContextType = {
  works: [],
  about: null,
  setSelectedWorks: () => {},
  selectedWorks: [],
  filterWorks: () => {}
};

export const DataContext = createContext(defaultContextValue)


export const DataContextProvider = ({children}: DataContextProviderProps) => {

  const [ works, setWorks ] = useState<WorkType[]>([])
  const [ about, setAbout ] = useState<AboutType | null>(null)
  const [selectedWorks, setSelectedWorks] = useState<WorkType[]>([]);

  useEffect(() => {
    getData().then(data => { 
      const sortWorkRes = data.work.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id)
      setWorks(sortWorkRes)

      const aboutRes = data.about.find((data: AboutType) => data.title === "Updated")
      setAbout(aboutRes)
    }).catch((error) => console.error(error))
  }, [])


  const filterWorks = (filter: string) => {
    if (filter === 'all') {
      setSelectedWorks(works)
    } else {
      setSelectedWorks(works.filter((work: WorkType) => work.filter === filter))
    }
  }

    return (
        <DataContext.Provider value={{ works, about, selectedWorks, setSelectedWorks, filterWorks }}> 
            {children}
        </DataContext.Provider>
    )
}
