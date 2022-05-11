import {
    MenuItem,
    useDisclosure,
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
    Input,
    Select,
  } from "@chakra-ui/react";
  
  import FormFieldCities from "components/FormFieldCities";
  
  import { useForm, Controller } from "react-hook-form";
  import { useQueryClient } from "react-query";
  
  import { useMutationEditInstitution } from "service/institutions";
  
  const PessoaTableActionsEdit = ({ pessoa }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        cidade: pessoa.cidade,
      },
    });
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationEditInstitution({
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
          title: "Pessoa cadastrada com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListPessoa"]);
  
        return;
      },
    });
  
    const onSubmit = async (data) => {
      mutate({ id: pessoa.documento, ...data });
    };
  
    return (
      <>
        <MenuItem onClick={onOpen}>Editar</MenuItem>
  
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Pessoa</ModalHeader>
  
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" my="30px">
                  <FormControl isInvalid={errors.nome}>
                    <FormLabel htmlFor="nome">Nome da Pessoa</FormLabel>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="ex: João Luis"
                      defaultValue={pessoa.nome}
                      {...register("nome", {
                        required: "O nome da pessoa é obrigatório!",
                      })}
                    />
  
                    {errors.nome && (
                      <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                    )}
                  </FormControl>
  
                  <FormControl isInvalid={errors.tipoPessoa} mt="30px">
                    <FormLabel htmlFor="tipoPessoa">
                      Tipo de Pessoa
                    </FormLabel>
  
                    <Select
                      id="tipoPessoa"
                      placeholder="Selecione"
                      defaultValue={pessoa.tipoPessoa}
                      {...register("tipoPessoa", {
                        required: "O tipo de pessoa é obrigatório!",
                      })}
                    >
                      <option value="Fisica">Física</option>
                      <option value="Juridica">Jurídica</option>
                    </Select>
  
                    {errors.tipoPessoa && (
                      <FormErrorMessage>
                        {errors.tipoPessoa.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
  
                  <Flex mt="30px">
                    <Controller
                      rules={{ required: true }}
                      render={({ field: { ref, ...rest } }) => (
                        <FormFieldCities
                          errors={errors}
                          id="cidade"
                          label="Cidade da Pessoa"
                          errorMessage="A cidade é obrigatória!"
                          {...rest}
                        />
                      )}
                      control={control}
                      name="cidade"
                    />
                  </Flex>
  
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
                      Salvar Pessoa
                    </Button>
                  </Flex>
                </Flex>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default PessoaTableActionsEdit;