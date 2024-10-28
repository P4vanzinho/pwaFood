/* eslint-disable camelcase */
import {
  Bebas_Neue,
  Poppins,
  Inter,
  DM_Sans,
  Urbanist,
} from "next/font/google";

export const bebasNeue = Bebas_Neue({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const poppins = Poppins({
  display: "swap",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const urbanist = Urbanist({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const inter = Inter({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const dmsSans = DM_Sans({
  display: "swap",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
