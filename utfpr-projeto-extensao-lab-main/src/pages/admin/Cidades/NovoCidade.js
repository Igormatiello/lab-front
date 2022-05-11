import {
    Flex,
    Input,
    FormControl,
    FormLabel,
    Center,
    Select,
    Text,
    ButtonGroup,
    Button,
    FormErrorMessage,
} from "@chakra-ui/react";



import { useForm } from "react-hook-form";
import { Image } from '@chakra-ui/react'



const NovoCidade = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("USER", data);

        window.location.reload();
    };

    return (
        <Flex height="100vh" width="100%" align="center" justify="center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column">
                    <Text
                        fontWeight="bold"
                        fontSize="1.5rem"
                        mb="50px"
                        textDecor="underline"
                    >
                        Cadastro de Cidades
                    </Text>

                    <FormControl isInvalid={errors.nome}>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <Input
                            id="nome"
                            type="text"
                            {...register("", { required: "O nome é obrigatório!" })}
                        />

                        {errors.login && (
                            <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                        )}
                    </FormControl>

                    <Center bg='white' h='100px' color='black'>
                        UF:
                    </Center>
                    <Select placeholder='Select option'>
                        <option value='estado1'>Acre</option>
                        <option value='estado2'>Alagoas</option>
                        <option value='estado3'>Amapá</option>
                        <option value='estado4'>Amazonas</option>
                        <option value='estado5'>Bahia</option>

                    </Select>

                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue'>Save</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                </Flex>
            </form>
        </Flex>
    );
};

export default NovoCidade;