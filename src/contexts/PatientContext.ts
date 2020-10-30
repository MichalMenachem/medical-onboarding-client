import React from "react";

export interface Patient {
  gender: string;
  age: string;
  language: string;
  surgery: string;
}

export interface PatientSetters {
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setLanguage: (language: string) => void;
  setSurgery: (surgery: string) => void;
}

export const PatientContext = React.createContext<
  Partial<Patient> & PatientSetters
>({
  gender: undefined,
  age: undefined,
  language: undefined,
  surgery: undefined,
  setGender: () => {},
  setAge: () => {},
  setLanguage: () => {},
  setSurgery: () => {},
});
