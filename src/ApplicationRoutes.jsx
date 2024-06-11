import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../pages/Header/Header';

import Home from '../pages/Home/Home';
import Servicos from '../pages/Servicos/Servicos';
import Produtos from '../pages/Produtos/Produtos';
import Contato from '../pages/Contato/Contato';

import CadastroUsuario from '../pages/Cadastro/CadastroUsuario/CadastroUsuario';
import CadastroPet from '../pages/Cadastro/CadastroPet/CadastroPet';
import Conta from '../pages/Cadastro/Conta/Conta';
import TelaCadastro from '../pages/Cadastro/TelaCadastro/TelaCadastro';

import DadosUsuario from '../pages/Cadastro/DadosUsuario/DadosUsuario';
import Historico from '../pages/Cadastro/Historico/Historico';
import Login from '../pages/Cadastro/Login/Login';

import Servico from '../pages/Servicos/Servico/Servico';
import AgendamentoServico from '../pages/Servicos/AgendamentoServico';

import Produto from '../pages/Produtos/Produto/Produto';
import AgendamentoProduto from '../pages/Produtos/AgendamentoProduto';

import Pagamento from '../pages/Pagamento/Pagamento';
import CompraNegada from '../pages/Pagamento/CompraNegada/CompraNegada';
import CompraSucesso from '../pages/Pagamento/CompraSucesso/CompraSucesso';



export default function ApplicationRoutes (){
    return(
        <BrowserRouter>
            <Header />
                <Routes>

                    <Route path="/" element={ <Home/> } />
                    <Route path="/servicos" element={ <Servicos/> } />
                    <Route path="/produtos" element={ <Produtos/> } />
                    <Route path="/contatos" element={ <Contato/> } />

                    <Route path="/cadastro" element={ <TelaCadastro/> } />
                    <Route path="/cadastroUsuario" element={ <CadastroUsuario/> } />
                    <Route path="/minhaConta" element={ <Conta/> } />
                    <Route path="/cadastroPet" element={ <CadastroPet/> } />

                    <Route path="/login" element={ <Login/> }/>
                    <Route path="/dadosUsuario" element={ <DadosUsuario/> } />
                    <Route path="/historico" element={ <Historico/> } />

                    <Route path="/servico" element={ <Servico/> } />
                    <Route path="/agendamentoServico" element={ <AgendamentoServico/> } />

                    <Route path="/produto" element={ <Produto/> } />
                    <Route path="/agendamentoProduto" element={ <AgendamentoProduto/> } />

                    <Route path="/pagamento" element={ <Pagamento/> } />

                    <Route path="/compraSucesso" element={ <CompraSucesso/> } />
                    <Route path="/compraNegada" element={ <CompraNegada/> }/>

                </Routes>
        </BrowserRouter >
    )
}