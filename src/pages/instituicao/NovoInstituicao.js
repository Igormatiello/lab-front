import {
    Grid,
    GridItem,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    FormHelperText,
    Center,
    Select,




} from "@chakra-ui/react";

import { useForm , useState} from "react-hook-form";
import { isError } from "react-query";


const NovoInstituicao = () => {
    const {
        register,
        handleSubmit,
    } = useForm();



    const onSubmit = (data) => {
        localStorage.setItem("USER", data);

        window.location.reload();
    };


  //  function errorMessageExample() {
    //    const [input, setInput] = useState;

      //  const handleInputChange = (e) => setInput(e.target.value)

        //const isError = input === ''
    //}



    return (


        <Grid templateColumns='repeat(1, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />


            <form onSubmit={handleSubmit(onSubmit)}>



                Cadastro de instituicao


                <FormControl isInvalid={isError}>
                    <FormLabel htmlFor='nome'>Nome</FormLabel>
                    <Input
                        id='nome'
                        type='nome'
                        value={<input type="text" />}
                       // onChange={handleInputChange}
                    />
                    {!isError ? (
                        <FormHelperText>
                            O Nome é Obrigatório
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>O Nome é Obrigatório.</FormErrorMessage>
                    )}
                </FormControl>


                <Center bg='white' h='100px' color='black'>
                    Tipo:
                </Center>
                <Select placeholder='Select option'>
                    <option value='interno'>Interno</option>
                    <option value='externo'>Externo</option>

                </Select>

                <Center bg='white' h='100px' color='black'>
                    Cidade:
                </Center>
                <Select placeholder='Select option'>
                    <option value='cidade1'>Pato Branco</option>
                    <option value='cidade2'>Curitiba</option>
                    <option value='cidade3'>Xaxim</option>
                    <option value='cidade4'>Floripa</option>
                    <option value='cidade5'>São Paulo</option>

                </Select>




            </form>
        
        </Grid >
    );
  };
export default NovoInstituicao;
