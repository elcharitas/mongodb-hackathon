import { Flex, Stack, Center, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Page } from "../layouts";

const Home = () => {
  return (
    <Page title="Welcome">
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
          textAlign={"center"}
          p={6}
          ml={2}
          my={12}
        >
          <Center>
            Do you have a special someone you would like to express your feeling
            to?
            <br />
            Click the button below to create a new lovenote.
          </Center>
          <Stack spacing={6}>
            <Link to="/new">
              <Button
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.400",
                }}
              >
                Create a new love note.
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Page>
  );
};

export { Home };
