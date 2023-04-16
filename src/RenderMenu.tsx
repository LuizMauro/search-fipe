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
      {isMobile ? (
        <MenuMobile>
          <BiHomeAlt2
            size={40}
            onClick={() => setIndexPage(0)}
            color={indexPage === 0 ? "#34c3ff" : "#fff"}
          />
          <MdOutlineFavoriteBorder
            onClick={() => setIndexPage(1)}
            size={40}
            color={indexPage === 1 ? "#34c3ff" : "#fff"}
          />
        </MenuMobile>
      ) : (
        <MenuDesktop>
          <BiHomeAlt2
            onClick={() => setIndexPage(0)}
            size={40}
            color={indexPage === 0 ? "#34c3ff" : "#fff"}
          />
          <MdOutlineFavoriteBorder
            onClick={() => setIndexPage(1)}
            size={40}
            color={indexPage === 1 ? "#34c3ff" : "#fff"}
          />
        </MenuDesktop>
      )}

      {indexPage === 0 && <Home />}
      {indexPage === 1 && <Favorites />}
    </>
  );
};

export { RenderMenu };
