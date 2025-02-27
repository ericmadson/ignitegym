import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        mb="$3"
        rounded="$md"
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/f5/4c/a8/f54ca8ce21eb05de3599312300b75e93.jpg",
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Remada cavalinho
          </Heading>
          <Text
            fontSize="$sm"
            color="$gray200"
            fontFamily="$heading"
            mt="$1"
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
