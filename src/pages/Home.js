import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
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
          p={6}
          my={12}
        >
          <Text>
            Do you have a special someone you would like to express your feeling to?
            <br/>
            Click the button below to create a new lovenote
          </Text>
        </Stack>
      </Flex>
    </Page>
  );
};

export { Home };
