type addedFavoriteTypes = {
  brandCode: string;
  modelCode: string;
  yearCode: string;
  nameModel: string;
};

type findFavoriteTypes = {
  brandCode: string;
  modelCode: string;
  yearCode: string;
};

export type favoritesType = {
  brandCode: string;
  modelCode: string;
  yearCode: string;
  nameModel: string;
};

const KEY = "favorites";

export const getAllFavavorites = (): favoritesType[] | null => {
  const resp = localStorage.getItem(KEY);

  if (resp) {
    const favorites = JSON.parse(resp).favorites as favoritesType[];
    return favorites;
  }

  return null;
};

export const addedFavorite = (data: addedFavoriteTypes) => {
  const exists = findFavorite(data);

  if (exists) {
    return;
  }

  const favorites = getAllFavavorites() ?? ([] as favoritesType[]);
  favorites.push(data);

  localStorage.setItem(KEY, JSON.stringify({ favorites: favorites }));
};

export const findFavorite = (data: findFavoriteTypes) => {
  const { brandCode, modelCode, yearCode } = data;
  const favorites = getAllFavavorites();

  return favorites?.find(
    (f) =>
      f.brandCode === brandCode &&
      f.modelCode === modelCode &&
      f.yearCode === yearCode
  );
};

export const removeFavorite = () => {};
