import { Get } from "react-axios";
import { useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Page } from "../layouts";

const Create = () => {
  const [author, setName] = useState("");
  const [receiver, setOtherName] = useState("");
  const [message, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Page title="Add new Note">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Draft a new Note...
          </Heading>
          <FormControl id="name">
            <Input
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="her-name">
            <Input
              placeholder="Joy Doe"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => setOtherName(e.target.value)}
              type="text"
            />
          </FormControl>
          <FormControl id="phone">
            <Input
              placeholder="+xxx-xxx-xxx-xxx"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
            />
          </FormControl>
          <FormControl id="message">
            <Textarea
              placeholder="What would you like to tell Joy?"
              _placeholder={{ color: "gray.500" }}
              onChange={(e) => setMsg(e.target.value)}
            />
            <Text fontSize={{ base: "sm", sm: "md" }} color={"gray.800"}>
              You can split the message by a line break.
            </Text>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={() => onOpen(true)}
            >
              Create Note
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {isOpen ? (
              <Get
                url="https://mongodb-hackathon.vercel.app/api/create"
                params={{
                  author,
                  receiver,
                  message,
                  phone,
                  timeStamp: Date.now(),
                }}
              >
                
              </Get>
            ) : (
              ""
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Page>
  );
};

export { Create };
