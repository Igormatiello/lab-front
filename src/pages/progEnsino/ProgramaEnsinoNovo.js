import {

    SimpleGrid,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
    ButtonGroup
    
  } from "@chakra-ui/react";
  
  import { useForm } from "react-hook-form";

  
  const ProgramaEnsinoNovo = () => {
    const {
      register,
      handleSubmit,
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
             
              Cadastro de Programas de Ensimo
           
  
            <FormControl >
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <Input
                id="nome"
                type="text"
                {...register("nome")}
              />
  
              
            </FormControl>
  
            <FormControl mt="30px" >
              <FormLabel htmlFor="sigla">Sigla</FormLabel>
              <Input
                id="sigla"
                type="sigla"
                {...register("sigla")}
              />
  
            </FormControl>
  
            <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Save</Button>
              <Button>Cancel</Button>
              </ButtonGroup>



        </form>
        </SimpleGrid >
    );
  };
  export default ProgramaEnsinoNovo ;
  