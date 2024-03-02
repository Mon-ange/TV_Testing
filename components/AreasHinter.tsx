import { Card, Text, VStack, HStack, Box } from "@gluestack-ui/themed"
import React from "react"

export const AreasHinter: React.FC = () => {
    return (
        <Card margin={3}>
            <Text color="$text500" lineHeight="$xs" margin={3}>
                TV Areas(s) Grid
            </Text>
            <VStack space="xs">
                <HStack space="xs">
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >1</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >2</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >3</Text>
                    </Box>
                </HStack>
                <HStack space="xs">
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >4</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >5</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >6</Text>
                    </Box>
                </HStack>
                <HStack space="xs">
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >7</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >8</Text>
                    </Box>
                    <Box bgColor="grey" w="$20" h="$20" p="$5">
                        <Text color="white" size="4xl" >9</Text>
                    </Box>
                </HStack>
            </VStack>
        </Card>)
}