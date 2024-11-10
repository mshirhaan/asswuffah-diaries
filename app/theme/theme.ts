import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#f0f9f4",
    100: "#d5eee0",
    200: "#b3dfc8",
    300: "#88ccac",
    400: "#5cb88e",
    500: "#429972", // primary color
    600: "#357b5b",
    700: "#285c44",
    800: "#1b3e2d",
    900: "#0d1f16",
  },
  accent: {
    50: "#fff9e6",
    100: "#ffefbf",
    200: "#ffe499",
    300: "#ffd54d",
    400: "#ffc51a",
    500: "#e6ab00", // secondary color
    600: "#b38600",
    700: "#806100",
    800: "#4d3a00",
    900: "#1a1400",
  },
  neutral: {
    50: "#f7fafc",
    100: "#edf2f7",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a202c",
    900: "#171923",
  },
};

const fonts = {
  heading: `'Playfair Display', serif`,
  body: `'Source Sans Pro', sans-serif`,
};

const styles = {
  global: {
    "html, body": {
      bg: "neutral.50",
      color: "neutral.800",
    },
    ".prose": {
      h1: {
        fontSize: "3xl",
        fontWeight: "bold",
        mb: 4,
        fontFamily: "heading",
        color: "brand.700",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "semibold",
        mb: 3,
        mt: 6,
        fontFamily: "heading",
        color: "brand.600",
      },
      h3: {
        fontSize: "xl",
        fontWeight: "medium",
        mb: 2,
        mt: 4,
        fontFamily: "heading",
        color: "brand.500",
      },
      p: {
        mb: 4,
        lineHeight: 1.8,
        fontSize: "md",
      },
      ul: {
        ml: 6,
        mb: 4,
      },
      li: {
        mb: 2,
      },
      blockquote: {
        borderLeft: "4px",
        borderColor: "accent.300",
        pl: 4,
        py: 2,
        my: 4,
        bg: "accent.50",
        rounded: "sm",
      },
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "semibold",
      borderRadius: "md",
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
      outline: {
        borderColor: "brand.500",
        color: "brand.500",
        _hover: {
          bg: "brand.50",
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "heading",
      fontWeight: "semibold",
    },
  },
  Card: {
    baseStyle: {
      container: {
        bg: "white",
        borderRadius: "lg",
        boxShadow: "base",
        p: 6,
      },
    },
  },
  Link: {
    baseStyle: {
      color: "brand.500",
      _hover: {
        textDecoration: "none",
        color: "brand.600",
      },
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config,
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;
