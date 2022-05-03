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



const NovoPessoa = () => {
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
                        Cadastro de Pessoas
                    </Text>


                </Flex>
                <FormControl isInvalid={errors.nome}>
                    <FormLabel htmlFor="nome">Nome*</FormLabel>
                    <Input
                        id="nome"
                        type="text"
                        {...register("", { required: "O nome é obrigatório!" })}
                    />

                    {errors.login && (
                        <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email*</FormLabel>
                    <Input
                        id="email"
                        type="text"
                        {...register("", { required: "O email é obrigatório!" })}
                    />

                    {errors.login && (
                        <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                    )}
                </FormControl>


                <Center bg='white' h='100px' color='black'>
                    Ativo*
                </Center>
                <Select placeholder='Selecione...'>
                    <option value='inativo'>Inativo</option>
                    <option value='ativo'>Ativo</option>


                </Select>

                <Center bg='white' h='100px' color='black'>
                    Tipo de Pessoa*
                </Center>
                <Select placeholder='Selecione...'>
                    <option value='fisica'>Física</option>
                    <option value='juridica'>Jurídica</option>


                </Select>

                <FormControl isInvalid={errors.cpf}>
                    <FormLabel htmlFor="cpf">CPF*</FormLabel>
                    <Input
                        id="cpf"
                        type="text"
                        {...register("", { required: "O cpf é obrigatório!" })}
                    />

                    {errors.cpf && (
                        <FormErrorMessage>{errors.cpf.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.cep}>
                    <FormLabel htmlFor="cep">CEP*</FormLabel>
                    <Input
                        id="cep"
                        type="text"
                        {...register("", { required: "O cep é obrigatório!" })}
                    />

                    {errors.cpf && (
                        <FormErrorMessage>{errors.cep.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.endereco}>
                    <FormLabel htmlFor="endereco">Endereço*</FormLabel>
                    <Input
                        id="endereco"
                        type="text"
                        {...register("", { required: "O endereço é obrigatório!" })}
                    />

                    {errors.endereco && (
                        <FormErrorMessage>{errors.endereco.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.bairro}>
                    <FormLabel htmlFor="bairro">Bairro*</FormLabel>
                    <Input
                        id="bairro"
                        type="text"
                        {...register("", { required: "O bairro é obrigatório!" })}
                    />

                    {errors.bairro && (
                        <FormErrorMessage>{errors.bairro.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.numero}>
                    <FormLabel htmlFor="numero">Número*</FormLabel>
                    <Input
                        id="numero"
                        type="text"
                        {...register("", { required: "O número é obrigatório!" })}
                    />

                    {errors.numero && (
                        <FormErrorMessage>{errors.numero.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl >
                    <FormLabel htmlFor="complemento">Complemento</FormLabel>
                    <Input
                        id="complemento"
                        type="text"
                        {...register("")}
                    />

                </FormControl>

                <FormControl isInvalid={errors.telefone}>
                    <FormLabel htmlFor="telefone">Telefone*</FormLabel>
                    <Input
                        id="telefone"
                        type="text"
                        {...register("", { required: "O telefone é obrigatório!" })}
                    />

                    {errors.telefone && (
                        <FormErrorMessage>{errors.telefone.message}</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.celular}>
                    <FormLabel htmlFor="celular">Celular*</FormLabel>
                    <Input
                        id="celular"
                        type="text"
                        {...register("", { required: "O celular é obrigatório!" })}
                    />

                    {errors.celular && (
                        <FormErrorMessage>{errors.celular.message}</FormErrorMessage>
                    )}
                </FormControl>

                            
                <Center bg='white' h='100px' color='black'>
                    Cidade*
                </Center>
                <Select placeholder='Selecione...'>
                    <option value='cabixi_RO'>Cabixi, RO</option>
                    <option value='cacoal_RO'>Cacoal, RO</option>
                    <option value='corumbiara_RO'>Corumbiara, RO</option>


                </Select>

                <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue'>Save</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                

            </form>
        </Flex>
    );
};

export default NovoPessoa;