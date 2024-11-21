import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  marginTop: "4rem",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1380,
  margin: "0 auto",
});

export const Button = styled("button", {
  backgroundColor: "$gray800",
  color: "$white",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  transition: "filter 0.2s",
  "&:hover": {
    filter: "brightness(0.9)",
  },
});
