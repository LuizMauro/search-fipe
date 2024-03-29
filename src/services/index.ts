import { api } from "../http/api";
import { parseCarProps, parseResponseProps } from "./adapters";
import { ResponsePropsAPI } from "./types";
import { ResponseProps, CarProps } from "./types";

export const getCarBrands = (): Promise<ResponseProps[] | null> =>
  api
    .get("/carros/marcas")
    .then(({ data }) =>
      data.map((item: ResponsePropsAPI) => parseResponseProps(item))
    );

export const getCarModels = (
  brandCode: string
): Promise<ResponseProps[] | null> =>
  api.get(`/carros/marcas/${brandCode}/modelos`).then(({ data }) => {
    if (data) {
      return data.modelos.map((item: ResponsePropsAPI) =>
        parseResponseProps(item)
      );
    }
    return null;
  });

export const getYears = (
  brandCode: string,
  model: string
): Promise<ResponseProps[] | null> =>
  api
    .get(`/carros/marcas/${brandCode}/modelos/${model}/anos`)
    .then(({ data }) =>
      data.map((item: ResponsePropsAPI) => parseResponseProps(item))
    );

export const getCar = (
  brandCode: string,
  model: string,
  year: string
): Promise<CarProps | null> =>
  api
    .get(`/carros/marcas/${brandCode}/modelos/${model}/anos/${year}`)
    .then(({ data }) => parseCarProps(data));
