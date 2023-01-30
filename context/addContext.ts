import { createContext } from "react";
import { addressContextType } from "@/types";

const AddressContext = createContext<addressContextType | null>(null);

export default AddressContext;
