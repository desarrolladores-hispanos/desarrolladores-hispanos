import {
    Heading,
    Avatar,
    Box,
    Text,
    Link,
    Image,
    Stack,
    SlideFade,
} from "@chakra-ui/react";

export default function ListItem(props) {
    return (
        <>
            <SlideFade
                direction="top"
                in={true}
                transition={{ enter: { duration: 0.4, delay: 0.4 } }}
            >
                <Box
                    maxW={"550px"}
                    w={"full"}
                    bg={"gray.900"}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                //  p={6}
                // textAlign={'center'}
                >
                    <Image
                        rounded={"lg"}
                        h={"220px"}
                        w={"full"}
                        alt={""}
                        boxShadow={"2xl"}
                        src={props.banner}
                        objectFit={"cover"}
                    />

                    <Box ml={5} mt={3} pb={3} w={"80%"}>
                        <Stack>
                            <Link href={props.url}>
                                <Heading
                                    color={'white'}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    {props.title}
                                </Heading>
                            </Link>
                        </Stack>

                        <Stack mt={3} direction={'row'} spacing={4} align={'center'}>
                            <Avatar
                                src={props.authorImage}
                            />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Link href={`/u/${props.username}`}>
                                    <Text fontWeight={600}> {props.name} </Text>
                                </Link>
                                <Text color={'gray.500'}> {props.date} </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </SlideFade>
        </>
    );
}
