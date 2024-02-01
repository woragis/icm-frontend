import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledNavLinks,
  StyledLogo,
  StyledNavTheme,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  setAutomaticTheme,
  setManualTheme,
  toggleManualTheme,
} from "../../../redux/themeSlice";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  interface INavLinks {
    name: string;
    path: string;
  }
  const navLinks: INavLinks[] = [
    { name: "Home", path: "/" },
    { name: "Contato", path: "/report" },
    { name: "Registrar", path: "/register" },
    { name: "Login", path: "/login" },
  ];
  const navLinksComponent = navLinks.map(({ name, path }: INavLinks) => {
    return (
      <Link key={name} to={path}>
        {name}
      </Link>
    );
  });
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.theme);

  const switchCurrentTheme = () => {
    dispatch(toggleManualTheme());
  };

  const [automatic, setAutomatic] = useState(
    theme === "automatic" ? true : false
  );
  const [manual, setManual] = useState(
    theme === "light" || theme === "dark" ? true : false
  );
  const handleThemeChange = () => {
    if (automatic) {
      setAutomatic((prevState) => !prevState);
      setManual((prevState) => !prevState);
      dispatch(setManualTheme());
    } else if (manual) {
      setAutomatic((prevState) => !prevState);
      setManual((prevState) => !prevState);
      dispatch(setAutomaticTheme());
    }
  };

  return (
    <StyledHeader>
      <Link to={"/"}>
        <StyledLogo
          className="logo"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="900.000000pt"
          height="275.000000pt"
          viewBox="0 0 900.000000 275.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M1585 2344 c-11 -2 -45 -9 -75 -15 -50 -10 -150 -53 -150 -64 0 -2
35 -2 78 2 68 5 80 3 102 -15 49 -40 27 -123 -66 -243 -24 -32 -44 -60 -44
-63 0 -30 159 82 231 162 52 59 93 144 85 177 -4 14 -16 31 -29 39 -24 15
-100 26 -132 20z"
            />
            <path
              d="M1311 1855 c-52 -44 -294 -366 -469 -625 -113 -165 -301 -417 -380
-508 -57 -65 -63 -76 -50 -89 13 -13 22 -7 72 49 78 85 247 309 349 461 l84
124 6 -142 c8 -180 28 -278 77 -383 67 -140 184 -237 337 -277 93 -25 259 -21
374 9 163 41 316 114 427 204 58 47 278 271 507 516 142 151 183 179 264 179
114 -1 156 -41 181 -171 15 -76 8 -269 -15 -387 -62 -326 -63 -355 -15 -355
26 0 145 130 265 290 134 178 278 326 356 364 145 70 262 35 319 -97 20 -45
24 -77 31 -252 5 -110 11 -224 14 -253 7 -61 44 -112 80 -112 42 0 114 94 203
266 106 207 256 468 311 544 71 97 140 139 231 139 67 1 123 -29 153 -81 35
-58 46 -114 62 -303 8 -88 21 -183 31 -211 33 -103 132 -196 239 -225 23 -7
84 -9 145 -6 122 5 207 30 395 112 210 92 297 112 522 122 230 9 416 -23 696
-122 286 -101 546 -146 832 -146 213 1 467 38 582 86 43 18 85 54 77 66 -9 15
-43 10 -199 -26 -185 -42 -262 -52 -435 -54 -267 -3 -491 36 -820 144 -288 94
-379 112 -595 119 -143 4 -330 -8 -426 -28 -42 -9 -156 -45 -255 -80 -230 -82
-310 -100 -425 -94 -79 4 -94 8 -131 34 -51 36 -92 111 -107 198 -6 34 -16
138 -21 231 -14 252 -42 332 -137 398 -59 42 -161 49 -227 17 -124 -59 -288
-286 -474 -655 -119 -234 -163 -292 -177 -232 -2 12 -9 87 -15 167 -13 198
-54 334 -124 417 -82 97 -266 103 -390 13 -53 -39 -239 -222 -329 -325 -39
-44 -74 -81 -78 -83 -3 -2 -3 16 2 40 16 84 22 301 10 373 -32 189 -155 296
-326 283 -106 -9 -183 -63 -336 -236 -302 -340 -492 -523 -627 -600 -128 -73
-302 -103 -447 -78 -283 49 -466 264 -468 551 -2 209 70 381 243 583 103 119
118 154 74 160 -12 2 -35 -9 -53 -23z"
            />
          </g>
        </StyledLogo>
        Contribuicoes
      </Link>
      <StyledNavLinks className="links">
        {navLinksComponent}
        <StyledNavTheme>
          <label htmlFor="automatic">Automatic</label>
          <input
            type="radio"
            name="theme-control"
            id="automatic"
            onChange={handleThemeChange}
            checked={automatic}
          />
          <label htmlFor="manual">Manual</label>
          <input
            type="radio"
            name="theme-control"
            id="manual"
            onChange={handleThemeChange}
            checked={manual}
          />
          <br />
          <label htmlFor="theme-switch" onClick={switchCurrentTheme}>
            {theme === "light" && <MdLightMode />}
            {theme === "automatic" &&
              window.matchMedia("(prefers-color-scheme: light)").matches && (
                <MdLightMode />
              )}
            {theme === "dark" && <MdDarkMode />}
            {theme === "automatic" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches && (
                <MdDarkMode />
              )}
          </label>
          <input
            type="checkbox"
            name="theme-switch"
            id="theme-switcher"
            onClick={switchCurrentTheme}
            checked={
              theme === "light" ||
              (theme === "automatic" &&
                window.matchMedia("(prefers-color-scheme: light)").matches)
                ? false
                : true
            }
            disabled={automatic}
          />
        </StyledNavTheme>
      </StyledNavLinks>
    </StyledHeader>
  );
};

export default Header;
