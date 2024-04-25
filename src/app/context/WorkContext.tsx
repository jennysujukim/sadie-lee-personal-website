"use client"

import React, { createContext, useState, useEffect } from "react";
import { WorkType } from '../../types/models/Work';
import { getWork } from '../../../sanity/sanity.query'

type WorkContextType = {
  works: WorkType[];
};

type WorkContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: WorkContextType = {
  works: [],
};

export const WorkContext = createContext(defaultContextValue)


export const WorkContextProvider = ({children}: WorkContextProviderProps) => {

  const [ works, setWorks ] = useState<WorkType[]>([])

  useEffect(() => {
    getWork().then(data => { 
      setWorks(data)
    }).catch((error) => console.error(error))
  }, [])

  console.log(works)

    return (
        <WorkContext.Provider value={{ works }}> 
            {children}
        </WorkContext.Provider>
    )
}
