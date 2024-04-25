import { useContext } from "react";
import { WorkContext } from "../context/WorkContext";

export const useWorkContext = () => {
  const context = useContext(WorkContext)

  if(!context){
    throw new Error('useWorkContext must be inside an useWorkContext Provider.')
  }

  return context
}