import {ButtonGroup,
Button
 } from "@chakra-ui/react";
import { Route } from "react-router-dom";


//import { useQueryGetFilms } from "service/films";

const instituicao = () => {


    const rows = instituicao.map(cadastro => {
        return (

            <tr key={instituicao.doc}>
                <td>{instituicao.nome}</td>
                <td>{instituicao.telefone}</td>
                <td>{instituicao.celular}</td>
                <td>

                </td>
            </tr>
        )



    })


    return (
        <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>


    <ButtonGroup variant='outline' spacing='6'>
<Button onClick={Route.call} colorScheme='blue'>Novo</Button>
</ButtonGroup>


</div>


    )




}

export default instituicao;
