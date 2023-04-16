import React from "react";
import SelectPicker from "rsuite/SelectPicker";
import useFipe from "../../hooks/useFipe";

import Teste from "../../animations/CarTypes.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { MdOutlineFavoriteBorder } from "react-icons/md";

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
    resetStates,
    handleFavorite,
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
          onSelect={(value) => {
            resetStates.resetModel("");
            resetStates.resetYear("");
            setBrandCode(value ?? "");
          }}
          disabled={!brandsResponse || brandsHasError || isBrandsLoading}
        />

        {modelsResponse && (
          <SelectPicker
            data={modelsResponse ?? []}
            style={{ width: "100%" }}
            size={"lg"}
            placeholder={"Modelo"}
            onSelect={(value) => {
              resetStates.resetYear("");
              setModelCode(value ?? "");
            }}
            disabled={!modelsResponse || modelsHasError || isModelsLoading}
          />
        )}

        {yearsResponse && (
          <SelectPicker
            data={yearsResponse ?? []}
            style={{ width: "100%" }}
            size={"lg"}
            placeholder={"Anos"}
            onSelect={(value) => setYearCode(value)}
            disabled={!yearsResponse || yearsHasError || isYearsLoading}
          />
        )}
      </FormContainer>
      {modelsResponse && yearsResponse && carResponse && (
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
              {carResponse.price}
            </p>
          </div>
          <div
            onClick={() => handleFavorite()}
            style={{
              cursor: "pointer",
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            Favoritar <MdOutlineFavoriteBorder size={18} />
          </div>
        </ContainerFipe>
      )}
    </Container>
  );
};

export { Home };
