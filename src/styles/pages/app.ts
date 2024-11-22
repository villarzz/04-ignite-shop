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

export const CartContainer = styled("div", {
  display: "flex",
  position: "fixed",
  alignContent: "center",
  zIndex: 9999,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "$gray800",
  width: "100%",
  maxWidth: 600,
  boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.5)",
});
