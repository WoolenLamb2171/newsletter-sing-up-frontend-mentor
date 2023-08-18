import { useContext } from "react";
import { Context } from "../provider";

export const useAppContext = () => useContext(Context);