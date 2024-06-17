import './AgendamentoServico.css';
import { useNavigate } from 'react-router-dom';


export default function AgendamentoServico() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/pagamento'); 
    };

    return (
        <>
            <div className="container">
                <div className="servico">
                    <img src="https://sintemais.com.br/wp-content/uploads/2017/05/L-_martelado_cinza_escuro_1-2_C07_com_malha.jpg" alt="Servico" className="imagem-servico" />
                    <div className="info-servico">
                        <h2>Nome do Serviço</h2>
                        <p>Descrição do Serviço</p>
                        <p>Preço do Serviço</p>

                        <div>
                            <input type="radio" id="pacoteMedio" name="pacote" value="medio" />
                            <label htmlFor="pacoteMedio">Pacote Médio</label> 
                            <br></br>
                            <input type="radio" id="pacoteGrande" name="pacote" value="grande" />
                            <label htmlFor="pacoteGrande">Pacote Grande</label>
                            <br></br>
                            <br></br>
                        </div>

                        <div>
                            <input type="checkbox" id="entregaCasa" name="entregaCasa" />
                            <label htmlFor="entregaCasa">Desejo que seja entregue em casa</label>
                            <br></br>
                            <br></br>
                        </div>

                        <div className="simulador-frete">
                            <div>Simulador de Frete</div>
                            <div>
                                <input type="text" placeholder="CEP" />
                            </div>
                            <div>R$ 30,00</div>
                            <br></br>
                        </div>

                        <button className="botao-servicos" onClick={handleButtonClick}>Agendar Serviço</button>
                    </div>
                </div>
            </div>
        </>
    );
}