import './AgendamentoProduto.css';


export default function AgendamentoProduto() {

    
    return (
        <>
            <div className="container">
            <div className="produto">
            <img src="https://sintemais.com.br/wp-content/uploads/2017/05/L-_martelado_cinza_escuro_1-2_C07_com_malha.jpg" alt="Nome do Produto" className="imagem-produto" />
            <div className="info-produto">
                <h2>Nome do Produto</h2>
                <p>Descrição do Produto</p>
                <p>Preço do Produto</p>

            <label htmlFor="date">Escolha a data:</label>
            <input
                type="date"
                id="date"
                name="date"
            />
            <br></br>
            <br></br>

            <label htmlFor="time">Escolha o horário:</label>
            <input
                type="time"
                id="time"
                name="time"
            />
            <br></br>
            <br></br>

                <div>
                            <input type="radio" id="pequenoporte" name="porte" value="medio" />
                            <label htmlFor="pequenoporte">Pequeno porte</label> 
                            <br></br>
                            <input type="radio" id="grandeporte" name="porte" value="grande" />
                            <label htmlFor="grandeporte">Grande porte</label>
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

                <button className="botao-produtos">Adicionar ao Carrinho</button>
            </div>
            </div>
            </div>
        </>
    );
}