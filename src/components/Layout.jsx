import { Outlet, useLocation, matchPath } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const pageModes = {
  "/": { theme: "light", footer: "light" },
  "/about": { theme: "light", footer: "light" },
  "/destinations": { theme: "light", footer: "light" },
  "/tours": { theme: "light", footer: "light" },
  "/journal": { theme: "light", footer: "dark" },
};

const detailPaths = [
  { pattern: "/destinations/:slug" },
  { pattern: "/tours/:slug" },
  { pattern: "/journal/:slug" },
];

export default function Layout() {
  const location = useLocation();
  const mode = pageModes[location.pathname] ?? pageModes["/"];
  const isDetail = detailPaths.some(({ pattern }) =>
    matchPath({ path: pattern, end: true }, location.pathname),
  );

  return (
    <div
      className={styles.shell}
      data-theme={mode.theme}
      data-page={isDetail ? "detail" : "page"}
    >
      <Navbar theme={mode.theme} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer variant={mode.footer} />
    </div>
  );
}
