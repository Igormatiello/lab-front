import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

import { Flex } from "@chakra-ui/react";

import "service/axiosConfig";


const Dashboard = lazy(() => import("./Dashboard"));
const Institutions = lazy(() => import("./Institutions"));
const NovoInstituicao = lazy(() => import("../instituicao/NovoInstituicao"));
const NovaCidade= lazy( ()=>import ("../cidades/NovoCidade")  );
const NovoEquipamento=lazy(()=>import  ("../equipamento/EquipamentoNovo"));
const NovoPesssoa=lazy (( ) =>import ("../pessoa/novoPessoa")  );
//const perfil=lazy(()=>import ("../perfil/EditarPerfil") );
const PrgNovo= lazy(()=>import ("../progEnsino/ProgramaEnsinoNovo"));
const VinculoNovo =lazy(()=>import ("../vinculos/VinculoNovo"))

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Flex minHeight="100vh" direction="column">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/instituicoes" element={<Institutions />} />
          <Route path="/instituicao/novo" element={<NovoInstituicao />} />
          <Route path="/cidade/novo" element={<NovaCidade/>} /> 
          <Route path="/equipamento/novo" element={<NovoEquipamento/>} />
          <Route path="/pessoa/novo" element={<NovoPesssoa/>}/>
          <Route path= "/perfil" element={<perfil/>}/>
          <Route path= "/prgEnsino/novo" element={<PrgNovo/>}/>
          <Route path="/vinculo/novo" element={<VinculoNovo/>}/>
         

          
          
        </Routes>
      </Flex>
    </Suspense>
  );
};

export default Admin;
