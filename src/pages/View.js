import { useState } from "react";
import { Wave } from "react-animated-text";
import Lottie from "lottie-react";
import {
  Box,
  Text,
  Button,
  Flex,
  Stack,
  Spinner,
  Center,
} from "@chakra-ui/react";

import "@fontsource/akaya-kanadaka";
import "./index.css";

import BackgroundSound from "../assets/background.mp3";
import Charge from "../assets/4461-love-as-energy-charge.json";
import Hearts from "../assets/67021-love-animation-with-particle.json";

const messages = [
  "To My Queen...",
  "My desire for you is to be happy always...",
  "To have fun adventures each day!",
  "To enjoy each moment to its fullest!",
  "To share in your smiles!",
  "And stay by you when you're pained!",
  "Babe, for this....",
  "I'll do anything!",
  "I promise to treasure you!",
  "Your King promises to be there for you!",
  "Frank promises to protect you",
  "Jonathan Promises to care for you!",
  "Oluwaseun promises to beautify you!",
  "Aduragbeminiyi promises to pray for you!",
  "Omokueve promises to help you grow!",
  "Irewale promises to spoil you!",
  "I will always love You!",
  "My one, My better half, My Quarter",
];
const View = () => {
  const [accepted, setAccept] = useState(0);
  const [message, setMessage] = useState("Hello!");
  const [display, setDisplay] = useState(false);
  const bgSound = new Audio(BackgroundSound);
  bgSound.addEventListener("ended", () => setAccept(3));
  if (accepted === 1) {
    setTimeout(() => {
      messages.length > 0 ? setMessage(messages.shift()) : setAccept(2);
    }, 3000);
  }
  if (!display) {
    setTimeout(setDisplay, 3000, true);
  }

  return (
    <Box bgPosition={"left"}>
      <Box h="95vh">
        {accepted === 1 ? (
          <>
            <Text
              id="text"
              fontSize="1.5em"
              fontWeight="700"
              color="black"
              as="div"
              w="100vw"
              d="block"
              pt="5em"
              px=".8em"
              pb="-4em"
              opacity="1"
              textAlign="center"
            >
              <Wave
                text={message}
                delay={3}
                iterations={1}
                effect="verticalFadeIn"
                effectChange={2}
                effectDirection="up"
              />
            </Text>
            <Lottie animationData={Hearts} />
          </>
        ) : display ? (
          <Flex
            minH={"95vh"}
            align={"center"}
            justify={"center"}
            bg={"gray.50"}
          >
            <Stack
              spacing={4}
              w={"full"}
              maxW={"md"}
              bg={"gray.700"}
              rounded={"xl"}
              boxShadow={"lg"}
              p={8}
              my={10}
              mx={8}
            >
              {accepted === 3 ? (
                <>
                  <Text
                    textAlign="center"
                    fontSize={{ base: "sm", sm: "md" }}
                    color={"gray.400"}
                  >
                    Babe, the day of love is approaching... Do me this honour...
                    "Let me feel like a MAN!!"
                    <br />
                    <b>Will you be my Valentine?</b>
                  </Text>
                  <Stack spacing={6}>
                    <Button
                      bg={"red.500"}
                      color={"white"}
                      _hover={{
                        bg: "red.400",
                      }}
                      onClick={() => {
                        bgSound.pause();
                        window.location.href =
                          "https://wa.me/+2349055981982?send=Yes";
                      }}
                    >
                      Yes!
                    </Button>
                  </Stack>
                </>
              ) : accepted === 2 ? (
                <Lottie
                  animationData={Charge}
                  loop={1}
                  onComplete={() => setAccept(3)}
                />
              ) : (
                <>
                  <Text
                    textAlign="center"
                    fontSize={{ base: "sm", sm: "md" }}
                    color={"gray.400"}
                  >
                    Dear Ebube, A certain Jonathan left a message for you!
                    <br />
                    This message can only be viewed once. Do you consent?
                  </Text>
                  <Stack spacing={6}>
                    <Button
                      bg={"red.500"}
                      color={"white"}
                      _hover={{
                        bg: "red.400",
                      }}
                      onClick={() => {
                        setAccept(1);
                        bgSound.play();
                      }}
                    >
                      Yes I Do! Let's View It
                    </Button>
                  </Stack>
                </>
              )}
            </Stack>
          </Flex>
        ) : (
          <Center h="80vh">
            <Spinner size="xl" emptyColor="gray.200" color="red.400" />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export { View };
