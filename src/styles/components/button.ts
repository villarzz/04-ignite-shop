import { styled } from "..";

export const ButtonBag = styled("button", {
  color: "$white",
  padding: "1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  transition: "filter 0.2s",
  "&:hover": {
    filter: "brightness(0.9)",
  },
  variants: {
    color: {
      gray: { backgroundColor: "$gray800" },
      green: { backgroundColor: "$green300" },
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

