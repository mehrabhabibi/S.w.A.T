import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.wine.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>S.W.A.T</Text>
    </HStack>
  );
};

export default NavBar;
