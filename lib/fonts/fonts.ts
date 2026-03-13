import localFont from "next/font/local";

export const notoNaskhArabicFont = localFont({
  src: [
    {
      path: "../../public/fonts/NotoNaskhArabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NotoNaskhArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NotoNaskhArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NotoNaskhArabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});
