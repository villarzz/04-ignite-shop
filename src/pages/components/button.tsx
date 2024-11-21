import Image from "next/image";
import bag from "../../assets/bag.svg";
import { ButtonBag } from "@/styles/components/button";

export default function Button() {
  return (
    <div>
      <ButtonBag>
        <Image src={bag} alt=""></Image>
      </ButtonBag>
    </div>
  );
}
