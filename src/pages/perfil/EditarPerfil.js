import React from "react";

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
    Grid,
    GridItem,
} from "@chakra-ui/react";


import {mensagemErro} from ''


class EditarPerfil extends React.Component {
    
    

     state ={

        email:'',
        senha:''

    }
    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            this.context.iniciarSessao(response.data)
            this.props.history.push('/home')
        }).catch( erro => {
           mensagemErro(erro.response.data)
        })
    }
     onSubmit = (data) => {
        localStorage.setItem("USER", data);

        window.location.reload();
    };


    
render(){
    return (
        <Flex height="100vh" width="100%" align="center" justify="center">
            <form onSubmit={this.onSubmit}>


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

                <Grid>

                    <GridItem>
                        <FormControl >
                            <FormLabel htmlFor="nome">Nome*</FormLabel>
                            <input type="nome"
                                value={this.state.nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                                className="form-control"
                                id="exampleInputNome"
                                aria-describedby="emailHelp"
                                placeholder="Digite o Nome" />

                        </FormControl>

                    </GridItem>

                    <GridItem>


                        <FormControl >
                            <FormLabel htmlFor="email">Email*</FormLabel>
                            <input type="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Digite o Email" />

                           
                        </FormControl>

                    </GridItem>


                </Grid>

                <Grid>
                    <GridItem>
                        <Center bg='white' h='100px' color='black'>
                            Tipo de Pessoa*
                        </Center>
                        <Select placeholder='Selecione...'>
                            <option value='fisica'>Física</option>
                            <option value='juridica'>Jurídica</option>


                        </Select>
                    </GridItem>

                    <GridItem>

                        <FormControl >
                            <FormLabel htmlFor="documento">Documento*</FormLabel>
                            <input type="documento"
                                value={this.state.email}
                                onChange={e => this.setState({ document: e.target.value })}
                                className="form-control"
                                id="exampleInputDocumento"
                                aria-describedby="emailHelp"
                                />

                            
                        </FormControl>
                    </GridItem>
                </Grid>

                <Grid>
                <GridItem>

                <FormControl >
                    <FormLabel htmlFor="cep">CEP*</FormLabel>
                    <Input
                        id="cep"
                        type="text"
                        value={this.state.cep}
                        onChange={e => this.setState({ cep: e.target.value })}
                        className="form-control"
                    />

                    
                </FormControl>
                </GridItem>

                <GridItem>
                <FormControl >
                    <FormLabel htmlFor="endereco">Endereço*</FormLabel>
                    <Input
                        id="endereco"
                        type="text"
                        value={this.state.endereco}
                        onChange={e => this.setState({ endereco: e.target.value })}
                        className="form-control"

                    />

                    
                </FormControl>
                </GridItem>

                <GridItem>
                <FormControl >
                    <FormLabel htmlFor="bairro">Bairro*</FormLabel>
                    <Input
                        id="bairro"
                        type="text"
                        value={this.state.bairro}
                        onChange={e => this.setState({ bairro: e.target.value })}
                        className="form-control"
                    />

                    
                </FormControl>
                </GridItem>

                <GridItem>
                <FormControl >
                    <FormLabel htmlFor="numero">Número*</FormLabel>
                    <Input
                        id="bairro"
                        type="text"
                        value={this.state.numero}
                        onChange={e => this.setState({ numero: e.target.value })}
                        className="form-control"
                        aria-describedby="emailHelp"
                    />

                    
                </FormControl>
                </GridItem>
                </Grid>

                <Grid>
                <GridItem>
                <FormControl >
                    <FormLabel htmlFor="complemento">Complemento</FormLabel>
                    <Input
                        id="complemento"
                        type="text"
                        value={this.state.complemento}
                        onChange={e => this.setState({ complemento: e.target.value })}
                        className="form-control"
                    />
                    </FormControl>
                    </GridItem>
                     </Grid>


                     <Grid>
                <GridItem>

            

                <FormControl>
                    <FormLabel htmlFor="telefone">Telefone*</FormLabel>
                    <Input
                        id="telefone"
                        type="text"
                        value={this.state.telefone}
                        onChange={e => this.setState({ telefone: e.target.value })}
                        className="form-control"
                        aria-describedby="emailHelp"
                    />

                   
                </FormControl>

                </GridItem>
                </Grid>


                <Grid>
                <GridItem>

                
                

                <FormControl>
                    <FormLabel htmlFor="celular">Celular*</FormLabel>
                    <Input
                        id="celular"
                        type="text"
                        value={this.state.celular}
                        onChange={e => this.setState({ celular: e.target.value })}
                        className="form-control"
                        aria-describedby="emailHelp"
                    />

                   
                </FormControl>

                </GridItem>




                <GridItem>

                <Center bg='white' h='100px' color='black'>
                    Cidade*
                </Center>
                <Select placeholder='Selecione...'>
                    <option value='cabixi_RO'>Cabixi, RO</option>
                    <option value='cacoal_RO'>Cacoal, RO</option>
                    <option value='corumbiara_RO'>Corumbiara, RO</option>


                </Select>

                </GridItem>
                </Grid>
                <ButtonGroup variant='outline' spacing='6'>
                    <Button colorScheme='blue'>Save</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>


            </form>
        </Flex>

)


}


}

export default EditarPerfil;

