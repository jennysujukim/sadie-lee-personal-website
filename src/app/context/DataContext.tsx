"use client"

import React, { createContext, useState, useEffect } from "react";
import { WorkType } from '../../types/models/Work';
import { AboutType } from "@/types/models/About";
import { getData } from '../../../sanity/sanity.query';

type DataContextType = {
  works: WorkType[];
  about: AboutType | null;
};

type DataContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: DataContextType = {
  works: [],
  about: null
};

export const DataContext = createContext(defaultContextValue)


export const DataContextProvider = ({children}: DataContextProviderProps) => {

  const [ works, setWorks ] = useState<WorkType[]>([])
  const [ about, setAbout ] = useState<AboutType | null>(null)

  useEffect(() => {
    getData().then(data => { 
      const sortWorkRes = data.work.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id)
      setWorks(sortWorkRes)
      const aboutRes = data.about.find((data: AboutType) => data.title === "Updated")
      setAbout(aboutRes)
    }).catch((error) => console.error(error))
  }, [])

    return (
        <DataContext.Provider value={{ works, about }}> 
            {children}
        </DataContext.Provider>
    )
}
