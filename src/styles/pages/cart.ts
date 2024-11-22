import { styled } from "..";

export const CloseButton = styled("button", {
  position: "absolute",
  top: "20px",
  right: "20px",
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "$gray100",

  "&:hover": {
    color: "$gray700",
  },
});

export const ItemsList = styled("ul", {
  listStyle: "none",
  paddingLeft: 50,
  flexDirection: "column",
});

export const ListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: 20,
  marginTop: 20,
});

export const CartTitle = styled("h2", {
  marginTop: "5rem",
});

export const ItemImage = styled("img", {
  width: 100,
  height: 100,
  objectFit: "cover",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
});

export const ItemsInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  p: {
    color: "$gray100",
  },
  button: {
    background: "transparent",
    border: "none",
    color: "$green500",
    cursor: "pointer",
    fontSize: "$lg",
    textAlign: "left",
    "&:hover": {
      color: "$gray700",
    },
  },
});

