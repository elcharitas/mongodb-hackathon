import { Get } from "react-axios";
import { createRef, useState } from "react";
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
} from "@chakra-ui/react";
import { Page } from "../layouts";

const Create = () => {
  const fname = createRef();
  const fhname = createRef();
  const fmsg = createRef();
  const fphone = createRef();
  const [submit, setSubmit] = useState(false);
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
          {submit ?(
            <Get url="https://mongodb-hackathon.vercel.app" params={{
              author: fname.current.value,
              receiver: fhname.current.value,
              message: fmsg.current.value,
              phone: fphone.current.value,
              timeStamp: Date.now()
            }}>
              {(data, error) => (
                data
              )}
            </Get>
          ): (
          <>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Draft a new Note...
            </Heading>
            <FormControl id="name">
              <Input
                ref={fname}
                placeholder="John Doe"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="her-name">
              <Input
                ref={fhname}
                placeholder="Joy Doe"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="her-name">
              <Input
                ref={fphone}
                placeholder="+xxx-xxx-xxx-xxx"
                _placeholder={{ color: "gray.500" }}
                type="phone"
              />
            </FormControl>
            <FormControl id="message">
              <Textarea
                ref={fmsg}
                placeholder="What would you like to tell Joy?"
                _placeholder={{ color: "gray.500" }}
              />
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color={"gray.800"}
              >
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
                onClick={() => setSubmit(true)}
              >
                Create Note
              </Button>
            </Stack>
            </>
          )}
        </Stack>
      </Flex>
    </Page>
  );
};

export { Create };
