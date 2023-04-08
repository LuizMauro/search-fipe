import { createContext, useEffect, useState } from "react";
import { CarProps, ResponseProps } from "../../services/types";
import { FipeContextProps, FipeContextProviderProps } from "./types";
import { getCar, getCarBrands, getCarModels, getYears } from "../../services";

import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

export const FipeContext = createContext<FipeContextProps>(
  {} as FipeContextProps
);

export const FipeProvider = ({ children }: FipeContextProviderProps) => {
  const [brandCode, setBrandCode] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [yearCode, setYearCode] = useState("");

  const {
    data: brandsResponse,
    isFetching: isBrandsLoading,
    isError: brandsHasError,
    refetch: brandsRefetch,
  } = useQuery<ResponseProps[] | null>(["brands"], async () => {
    const response = await getCarBrands();
    return response;
  });

  const {
    data: modelsResponse,
    isFetching: isModelsLoading,
    isError: modelsHasError,
    refetch: modelsRefetch,
  } = useQuery<ResponseProps[] | null>(
    ["models", brandCode],
    async () => {
      const response = await getCarModels(brandCode);
      return response;
    },
    { enabled: brandCode !== "" }
  );

  const {
    data: yearsResponse,
    isFetching: isYearsLoading,
    isError: yearsHasError,
    refetch: yearsRefetch,
  } = useQuery<ResponseProps[] | null>(
    ["years", modelCode],
    async () => {
      const response = await getYears(brandCode, modelCode);
      return response;
    },
    { enabled: modelCode !== "" }
  );

  const {
    data: carResponse,
    isFetching: isCarLoading,
    isError: carHasError,
  } = useQuery<CarProps | null>(
    ["car", yearCode],
    async () => {
      const response = await getCar(brandCode, modelCode, yearCode);
      return response;
    },
    { enabled: yearCode !== "" }
  );

  useEffect(() => {
    if (brandsHasError) {
      toast.error("Erro ao carrregar marcas!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      brandsRefetch();
    }
    if (modelsHasError) {
      toast.error("Erro ao carrregar modelos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      modelsRefetch();
    }
    if (yearsHasError) {
      toast.error("Erro ao carrregar anos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      yearsRefetch();
    }
  }, [carHasError, yearsHasError, brandsHasError]);

  const resetState = () => {
    setTimeout(() => {
      setBrandCode("");
      setModelCode("");
      setYearCode("");
    }, 2000);
  };

  return (
    <FipeContext.Provider
      value={{
        brandsResponse,
        isBrandsLoading,
        brandsHasError,
        modelsResponse,
        isModelsLoading,
        modelsHasError,
        yearsResponse,
        isYearsLoading,
        yearsHasError,
        brandCode,
        isCarLoading,
        carResponse,
        setBrandCode,
        setModelCode,
        setYearCode,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
};
