import React, { useCallback, useState, useEffect } from "react";

import { getAllFavavorites, favoritesType } from "../../utils/localStorage";
import { CardModel, Container } from "./styles";

import useFipe from "../../hooks/useFipe";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<favoritesType[] | null>([]);
  const { searchAgain, setBrandCode, setModelCode, setYearCode } = useFipe();

  const loadFavores = useCallback(() => {
    const resp = getAllFavavorites();
    setFavorites(resp);
  }, [getAllFavavorites]);

  useEffect(() => {
    loadFavores();
  }, [loadFavores]);

  const searchFavorite = (data: favoritesType) => {
    searchAgain();
    setBrandCode(data.brandCode);
    setModelCode(data.modelCode);
    setYearCode(data.yearCode);
  };

  return (
    <Container>
      {favorites &&
        favorites.length > 0 &&
        favorites.map((item) => (
          <CardModel
            key={JSON.stringify(item)}
            onClick={() =>
              searchFavorite({
                brandCode: item.brandCode,
                modelCode: item.modelCode,
                nameModel: item.nameModel,
                yearCode: item.yearCode,
              })
            }
          >
            <h4>{item.nameModel}</h4>
            <p>Buscar novamente</p>
          </CardModel>
        ))}
    </Container>
  );
};

export { Favorites };
