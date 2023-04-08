import { CarProps, ResponseProps } from "../../services/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type FipeContextProps = {
  brandsResponse: ResponseProps[] | undefined | null;
  brandCode: string;
  isBrandsLoading: boolean;
  brandsHasError: boolean;
  modelsResponse: ResponseProps[] | undefined | null;
  isModelsLoading: boolean;
  modelsHasError: boolean;
  yearsResponse: ResponseProps[] | undefined | null;
  isYearsLoading: boolean;
  isCarLoading: boolean;
  yearsHasError: boolean;
  carResponse: CarProps | undefined | null;
  setBrandCode: Dispatch<SetStateAction<string>>;
  setModelCode: Dispatch<SetStateAction<string>>;
  setYearCode: Dispatch<SetStateAction<string>>;
};

export type FipeContextProviderProps = {
  children: ReactNode;
};
