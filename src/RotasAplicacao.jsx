import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importacao dos componentes
import Header from '../pages/Header/Header';

import Home from '../pages/Home/Home';
import Servicos from '../pages/Servicos/Servicos';
import Produtos from '../pages/Produtos/Produtos';
import Contato from '../pages/Contato/Contato';

import CadastroUsuario from '../pages/Cadastro/CadastroUsuario/CadastroUsuario';
import CadastroPet from '../pages/Cadastro/CadastroPet/CadastroPet';

import DadosUsuario from '../pages/Cadastro/DadosUsuario/DadosUsuario';
import Login from '../pages/Cadastro/Login/Login';

import Servico from '../pages/Servicos/Servico/Servico';
import AgendamentoServico from '../pages/Servicos/AgendamentoServico';

import Produto from '../pages/Produtos/Produto/Produto';
import AgendamentoProduto from '../pages/Produtos/AgendamentoProduto';

import Pagamento from '../pages/Pagamento/Pagamento';
import CompraNegada from '../pages/Pagamento/CompraNegada/CompraNegada';
import CompraSucesso from '../pages/Pagamento/CompraSucesso/CompraSucesso';

import Footer from '../pages/Footer/Footer';

// Header e Footer foram estabelecidos como elementos estaticos para que possam ser acessados em qqr caminho 
// em path sao definidas as urls + o componente a ser exibido contendo as informacoes concernentes 

export default function RotasAplicacao (){
    return(
        <BrowserRouter>
            <Header />  
                <Routes>

                    <Route path="/" element={ <Home/> } />
                    <Route path="/servicos" element={ <Servicos/> } />
                    <Route path="/produtos" element={ <Produtos/> } />
                    <Route path="/contatos" element={ <Contato/> } />

                    <Route path="/cadastro" element={ <CadastroUsuario/> } />

                    <Route path="/minhaConta" element={ <DadosUsuario/> } />
                    <Route path="/cadastroPet" element={ <CadastroPet/> } />

                    <Route path="/login" element={ <Login/> }/>

                    <Route path="/servico" element={ <Servico/> } />
                    <Route path="/agendamentoServico" element={ <AgendamentoServico/> } />

                    <Route path="/produto" element={ <Produto/> } />
                    <Route path="/agendamentoProduto" element={ <AgendamentoProduto/> } />

                    <Route path="/pagamento" element={ <Pagamento/> } />

                    <Route path="/compraSucesso" element={ <CompraSucesso/> } />
                    <Route path="/compraNegada" element={ <CompraNegada/> }/>
                </Routes>
            <Footer />
        </BrowserRouter >
    )
}