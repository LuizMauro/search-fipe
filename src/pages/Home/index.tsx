import React from "react";
import SelectPicker from "rsuite/SelectPicker";
import useFipe from "../../hooks/useFipe";

import Teste from "../../animations/CarTypes.json";
import { Player } from "@lottiefiles/react-lottie-player";

import {
  Container,
  FormContainer,
  Modal,
  ContainerFipe,
  ContainerTitle,
} from "./styles";

const Home: React.FC = () => {
  const {
    brandsResponse,
    isBrandsLoading,
    brandsHasError,
    modelsResponse,
    isModelsLoading,
    modelsHasError,
    yearsResponse,
    isYearsLoading,
    yearsHasError,
    isCarLoading,
    carResponse,
    setBrandCode,
    setModelCode,
    setYearCode,
  } = useFipe();

  return (
    <Container>
      {(isModelsLoading ||
        isBrandsLoading ||
        isYearsLoading ||
        isCarLoading) && (
        <Modal>
          <Player
            src={Teste}
            autoplay
            loop
            style={{ height: 300, width: 500 }}
          />

          {isBrandsLoading && <p>Buscando marcas...</p>}
          {isModelsLoading && <p>Buscando modelos...</p>}
          {isYearsLoading && <p>Buscando anos...</p>}
          {isCarLoading && <p>Buscando FIPE...</p>}
        </Modal>
      )}
      <ContainerTitle>
        <h1>Busca FIPE</h1>
        <p>Consulte a FIPE de forma fácil</p>
      </ContainerTitle>

      <FormContainer>
        <SelectPicker
          data={brandsResponse ?? []}
          style={{ width: "100%" }}
          size={"lg"}
          placeholder={"Marca"}
          onSelect={(value) => value !== "" && setBrandCode(value ?? "")}
          disabled={!brandsResponse || brandsHasError || isBrandsLoading}
        />

        {modelsResponse && (
          <SelectPicker
            data={modelsResponse ?? []}
            style={{ width: "100%" }}
            size={"lg"}
            placeholder={"Modelo"}
            onSelect={(value) => value !== "" && setModelCode(value ?? "")}
            disabled={!modelsResponse || modelsHasError || isModelsLoading}
          />
        )}

        {yearsResponse && (
          <SelectPicker
            data={yearsResponse ?? []}
            style={{ width: "100%" }}
            size={"lg"}
            placeholder={"Anos"}
            onSelect={(value) => value !== "" && setYearCode(value)}
            disabled={!yearsResponse || yearsHasError || isYearsLoading}
          />
        )}
      </FormContainer>
      {carResponse && (
        <ContainerFipe>
          <h3 style={{ textAlign: "center" }}>{carResponse.model}</h3>
          <p style={{ textAlign: "center" }}>
            Tabela referente ao mês de {carResponse.referenceMonth}
          </p>
          <div
            style={{
              background: "#00DDB3",
              padding: 10,
              margin: 10,
              borderRadius: 15,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "700",
                color: "#0f131a",
              }}
            >
              {carResponse.price}{" "}
            </p>
          </div>
        </ContainerFipe>
      )}
    </Container>
  );
};

export { Home };