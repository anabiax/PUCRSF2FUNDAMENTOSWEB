import './Servicos.css';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';


const servicos = [
    {
        id: 1,
        title: 'Banho',
        description: 'Banho completo para cães de todos os portes.',
        price: 'R$ 50,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfIrUbxuCDKY3wXJx9pVOl_fJUusc3roj-A&s'
    },
    {
        id: 2,
        title: 'Banho e Tosa',
        description: 'Banho completo e tosa higiênica para cães de todos os portes.',
        price: 'R$ 80,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GyfZ_Hhq2THOT07vK1xiWt6JUBzY_Xlvgw&s'
    }
];


export default function Servicos() {
    return (
        <>
           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px',  }}>
            {servicos.map((servico) => (
                <Link to="/agendamentoServico" key={servico.id} style={{ margin: '10px 20px', width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                    <img src={servico.image} alt={servico.title} style={{ width: '100%', borderRadius: '5px' }} />
                    <h3>{servico.title}</h3>
                    <p>{servico.description}</p>
                    <p><strong>{servico.price}</strong></p>
                </Link>
            ))}
        </div>
        </>
    );
}