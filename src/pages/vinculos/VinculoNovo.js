import {

    SimpleGrid,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
    ButtonGroup,
    Select,
    Center,
    HStack,
    PinInputField,
    PinInput

} from "@chakra-ui/react";

import { useForm } from "react-hook-form";


const VinculoNovo = () => {
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
        <SimpleGrid columns={1} spacing={10}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Heading>
                    fontWeight="bold"
                    fontSize="1.5rem"
                    mb="50px"
                    textDecor="underline"

                </Heading>

                Cadastro de Vínculos - Instituição / Programa de Ensino
                <FormControl>
                    <Center bg='white' h='100px' color='black'>
                        Orientador*
                    </Center>
                    <Select placeholder='Selecione...'>
                        <option value=''></option>

                        <Input
                            id="option"
                            type="orientandor"
                            {...register("orientador")}
                        />
                    </Select>
                </FormControl>

                <FormControl>
                    <Center bg='white' h='100px' color='black'>
                        Participante*
                    </Center>
                    <Select placeholder='Selecione...'>
                        <option value=''></option>

                        <Input
                            id="option"
                            type="participante"
                            {...register("participante")}
                        />
                    </Select>
                </FormControl>
                <FormControl>
                    <Center bg='white' h='100px' color='black'>
                        Programa de Ensino*
                    </Center>
                    <Select placeholder='Selecione...'>
                        <option value=''></option>

                        <Input
                            id="option"
                            type="prgEnsino"
                            {...register("programaDeEnsino")}
                        />
                    </Select>
                </FormControl>


                <FormControl>
                <Center bg='white' h='100px' color='black'>
                        Data de término*
                    </Center>
                <HStack>
                    <PinInput defaultValue='dia mês ano'>
                        <PinInputField  {...register("dia")}/>
                        <PinInputField  {...register("mes")}/>
                        <PinInputField  {...register("ano")}/>
                    </PinInput>
                </HStack>
                </FormControl>





                <ButtonGroup variant='outline' spacing='6'>
                    <Button colorScheme='blue'>Salvar</Button>
                    <Button>Cancelar</Button>
                </ButtonGroup>



            </form>
        </SimpleGrid >
    );
};
export default VinculoNovo;
