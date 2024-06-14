import './Contato.css';
//import img from '../../components/img/acessorios.jpg';  // importando a imagem p/ ser chamada como variável lá embaixo


export default function Contato() {
 
    return (
        <>
            <div >

                <div className="header">
                    <h1>Contatos</h1>
                </div>

                <div className="container">
                    <div className="content">
                        <h3>Nosso telefone</h3> 
                        <p>+55 (11) 4002 8922</p>

                        <hr className="divider" />

                        <h3>Endereço de email</h3>
                        <p>petshop@gmail.com</p>

                        <hr className="divider" />

                        <h3>Horário de atendimento</h3>
                        <p>9h - 18h de segunda à sexta-feira</p>


                    </div>
                </div>

            </div>
        </>
    )
}