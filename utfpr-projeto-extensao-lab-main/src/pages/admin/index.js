import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

import { Flex } from "@chakra-ui/react";

import "service/axiosConfig";


const Dashboard = lazy(() => import("./Dashboard"));
const Institutions = lazy(() => import("./Institutions"));
const NovoInstituicao = lazy(() => import("./instituicao"));
const NovaCidade= lazy( ()=>import ("./Cidades") );
const NovoEquipamento=lazy(()=>import  ("./Equipamento"));
const Pessoas=lazy (( ) =>import ("./Pessoa")  );
const Perfil=lazy(()=>import ("./Perfil"));
const PrgNovo= lazy(()=>import ("./ProgEnsino"));
const VinculoNovo =lazy(()=>import ("./Vinculos"))

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Flex minHeight="100vh" direction="column">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/1" element={<Institutions />} />
          <Route path="/2" element={<NovoInstituicao />} />
          <Route path="/3" element={<NovaCidade/>} /> 
          <Route path="/4" element={<NovoEquipamento/>} />
          <Route path="/5" element={<Pessoas/>}/>
          <Route path= "/6" element={<Perfil/>}/>
          <Route path= "/7" element={<PrgNovo/>}/>
          <Route path="/8" element={<VinculoNovo/>}/>
         

          
          
        </Routes>
      </Flex>
    </Suspense>
  );
};

export default Admin;
