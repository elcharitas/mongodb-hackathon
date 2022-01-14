import { useState } from "react";
import { Wave } from "react-animated-text";
import { useParams } from "react-router-dom";
import { Get } from "react-axios";
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

const View = () => {
  const [accepted, setAccept] = useState(0);
  const [cmessage, setMessage] = useState("Hello!");
  const [display, setDisplay] = useState(false);
  const { timeStamp } = useParams();
  const bgSound = new Audio(BackgroundSound);
  bgSound.addEventListener("ended", () => setAccept(3));

  return (
    <Get
      url="https://mongodb-hackathon.vercel.app/api/find"
      params={{ timeStamp }}
    >
      {(error, response, isLoading) => {
        if (error) {
          return "Something happend";
        } else if (response && response.data.result) {
          const { author, message, receiver, phone } = response.data.result;
          let messages = message.split("\n");
          if (messages.indexOf(cmessage) > -1) {
            messages = messages.slice(
              messages.indexOf(cmessage) + 1,
              messages.length
            );
          }
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
                        text={cmessage}
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
                          <Get
                            url="https://mongodb-hackathon.vercel.app/api/view"
                            params={{ timeStamp }}
                          />
                          <Text
                            textAlign="center"
                            fontSize={{ base: "sm", sm: "md" }}
                            color={"gray.400"}
                          >
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
                                  "https://wa.me/" + phone + "?send=Yes";
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
                            Dear {receiver}, A certain {author} left a message
                            for you!
                            <br />
                            This message can only be viewed once. Do you
                            consent?
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
        } else
          return (
            <Center h="80vh">
              <Spinner size="xl" emptyColor="gray.200" color="red.400" />
            </Center>
          );
      }}
    </Get>
  );
};

export { View };
