import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
