"use client"

import React, { createContext, useState, useEffect } from "react";
import { WorkType } from '../../types/models/Work';
import { getData } from '../../../sanity/sanity.query'

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
    console.log(getData())
    // getWork().then(data => { 
    //   const sortRes = data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id)
    //   setWorks(sortRes)
    // }).catch((error) => console.error(error))
  }, [])

    return (
        <WorkContext.Provider value={{ works }}> 
            {children}
        </WorkContext.Provider>
    )
}
