import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import useFipe from "./hooks/useFipe";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { MenuDesktop, MenuMobile } from "./styles";
import { WindowResize } from "./utils/windowResize";

const RenderMenu = () => {
  const { indexPage, setIndexPage } = useFipe();

  const [isMobile, setIsMobile] = React.useState(true);
  const windowSize = WindowResize();

  React.useEffect(() => {
    if (windowSize <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <>
      <Home />
    </>
  );
};

export { RenderMenu };
