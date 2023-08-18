import { useContext } from "react";
import { EmailContext } from "../provider";

export const useAppContext = () => useContext(EmailContext);