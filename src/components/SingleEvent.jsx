/** @format */

import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";
import MyDrawer from "./SideBarMenu";
import { View } from "native-base";

export default function SingleEvent() {
  return (
    <NativeBaseProvider>
      <MyDrawer />

      <Box shadow={2} rounded="lg" maxWidth="90%">
        <Image
          source={{
            uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png",
          }}
          alt="image base"
          width={"100%"}
          height={150}
          roundedTop="md"
        />
        <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
          NEWS
        </Text>
        <Stack space={4} p={[4, 4, 8]}>
          <Text color="gray.400">June 22, 2021</Text>
          <Heading size={["md", "lg", "md"]} noOfLines={2}>
            The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
            Floating in Air
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
            With lush green meadows, rivers clear as crystal, pine-covered
            hills, gorgeous waterfalls, lakes and majestic forests, the
            mesmerizing. Meghalaya is truly a Nature lover’s paradise…
          </Text>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
}

// export default function () {
//   return (
//   <NativeBaseProvider>
//     <Center flex={1}>
//       <SingleEvent/>
//     </Center>
//   </NativeBaseProvider>
//   );
// }
