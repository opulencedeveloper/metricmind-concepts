import { Geist, Instrument_Serif } from "next/font/google";

export const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

/** Apply to a page's <main> together with the `mm` class */
export const mmFonts = `${geist.variable} ${instrumentSerif.variable}`;
