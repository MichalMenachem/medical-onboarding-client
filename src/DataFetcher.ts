import axios from "axios";
import { Patient } from "./contexts/PatientContext";

export declare namespace DbResults {
  export interface Gender {
    name: string;
    iconPath: string;
  }
  export interface Age {
    range: string;
    min: string;
    max: string;
    iconPath: string;
  }
  export interface Language {
    name: string;
    iconPath: string;
  }
  export interface Surgery {
    name: string;
  }
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const postPatient = (patient: Patient) => {
  return axiosInstance.post("/patients", patient);
};

export const getGenders = () => {
  return axiosInstance.get<DbResults.Gender[]>("/gender");
};

export const getAges = () => {
  return axiosInstance.get<DbResults.Age[]>("/age");
};

export const getLanguages = () => {
  return axiosInstance.get<DbResults.Language[]>("/language");
};

export const getSurgeries = () => {
  return axiosInstance.get<DbResults.Surgery[]>("/surgery");
};
