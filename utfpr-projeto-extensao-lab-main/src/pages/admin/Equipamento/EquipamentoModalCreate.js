import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Flex,
    Input
  } from "@chakra-ui/react";
  

  
  import { useForm } from "react-hook-form";
  import { useQueryClient } from "react-query";
  
  import { useMutationCreateEquipamento } from "service/equipamento";
  
  const EquipamentoModalCreate = ({ isOpen, onClose }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationCreateEquipamento({
      onError: ({ response }) => {
        const message = response.data.message;
  
        toast({
          title: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
  
        return;
      },
      onSuccess: async () => {
        toast({
          title: "Equipamento cadastrada com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListEquipamento"]);
  
        return;
      },
    });
  
    const onSubmit = async (data) => {
      mutate(data);
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Equipamento</ModalHeader>
  
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" my="30px">
                <FormControl isInvalid={errors.nome}>
                  <FormLabel htmlFor="nome">Nome do Equipamento</FormLabel>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="ex: Impressora 3D"
                    {...register("nome", {
                      required: "O nome da equipamento é obrigatório!",
                    })}
                  />
  
                  {errors.nome && (
                    <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.sigla}>
                  <FormLabel htmlFor="sigla">Sigla do Equipamento</FormLabel>
                  <Input
                    id="sigla"
                    type="text"
                    placeholder="ex: I3D"
                    {...register("sigla", {
                      required: "A sigla do equipamento é obrigatória!",
                    })}
                  />
  
                  {errors.sigla && (
                    <FormErrorMessage>{errors.sigla.message}</FormErrorMessage>
                  )}
                </FormControl>
  
                <Flex justify="space-between" mt="30px">
                  <Button
                    variant="ghost"
                    mt="50px"
                    onClick={onClose}
                    isDisabled={isLoading}
                  >
                    Cancelar
                  </Button>
  
                  <Button
                    mt="50px"
                    type="submit"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
                    Salvar Equipamento
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default EquipamentoModalCreate;