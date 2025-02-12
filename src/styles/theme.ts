"use client";
import { createTheme, rem } from "@mantine/core";
import { themeColors } from "./themeColors";

export const theme = createTheme({
  primaryColor: 'defaultColor',
  fontFamily: 'Sulphur Point, serif',
  fontFamilyMonospace: 'Space Mono, monospace',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  colors: themeColors,
});
