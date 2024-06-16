import './Produtos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


// array de objetos contendo as informacoes dos produtos p/ que sejam mapeados no return
const produtos = [
    {
        id: 1,
        title: 'Ração Premium',
        description: 'Ração de alta qualidade para cães adultos.',
        price: 'R$ 89,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC91K2jpnvPW4YI8lnAmY7cBUqd7asdkSNyJwMrYe41dGW7KrWd-IDTMVtY4_1fLUCd7Qzu_8bE5fZSDv_NHY4PVyK21p3ULCtHXCrwcoF2ZLXURq8qnsFBg&usqp=CAE'
    },
    {
        id: 2,
        title: 'Shampoo para Cães',
        description: 'Shampoo especial para manter seu cão limpo e cheiroso.',
        price: 'R$ 34,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSf9yGNcMOQqOWc2PXinwIN5BgqZYFiT6gJ0zY_S01CrN7P6F_L27dEwcMJTckfsMTF0RIdxhrsUzdM8wvGCO3Dfk6U1ihppNRQRSiNbprRgdSnJCAwbbT9&usqp=CAE'
    },
    {
        id: 3,
        title: 'Coleira Ajustável',
        description: 'Coleira ajustável para cães de todos os tamanhos.',
        price: 'R$ 24,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRiZB3aFo0YG63Qfm7POUG2Fk2Be1pMIa5IS9IQ8fQjBvH8Ump93gxMdnMwr3RMMJcwjopRSmxUoJjmf8xF_SvJl-o-jgIxjGiJ7sw5ETo-KCJ6RLa1euj3&usqp=CAE'
    },
    {
        id: 4,
        title: 'Brinquedo de Borracha',
        description: 'Brinquedo de borracha resistente para cães.',
        price: 'R$ 19,90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTAR7XoP2L8AcqxtwtF6FwCSBkTuPbQpZKqXrtxDNor6crkWO4TyHV8MygLkq87P8iEBAGtpKZzvcNBXqIE5MBfg8PUTPu4A&usqp=CAE'
    },
    {
        id: 5,
        title: 'Cama Confortável',
        description: 'Cama confortável e macia para cães de pequeno porte.',
        price: 'R$ 129,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6B2eaDjFY_CCC2YcVsC-Fl0j96Zw7eMoDecy5OIoNCdxYXrPHtFoaMv5yWS0KGYXwuvj7XDgJ_gyJZ6naQC8P37IbK-9LzLaWkMbEOttu3ZP-Ak4yqu8FOEQ&usqp=CAE'
    },
    {
        id: 6,
        title: 'Biscoitos Caninos',
        description: 'Biscoitos saudáveis e saborosos para cães.',
        price: 'R$ 14,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRywdVI5EmaIdQ6N0I2zltFWlH4zVGvIMKTxyYjbRSRclUgnZs6717G6js_EUQDw_ZgJloVAoOFOhDMd3mLmXNvDKUK-ZKLtdKGhIw1_imp3MACN5kJ6YOX&usqp=CAE'
    },
    {
        id: 7,
        title: 'Ração Hipoalergênica',
        description: 'Ração especial para cães com alergias alimentares.',
        price: 'R$ 109,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSijSqQxclSx0kp2Vlm3qW2vkD063kb9-HqpWrAu4KLfCB1ZIz_-FwBKeGRsbd3cjHScBr_3E61pi19xAryOqgtHwz5xezPQdYE5c_ScJd8B82YSscGHf5zFQ&usqp=CAE'
    },
    {
        id: 8,
        title: 'Tapete Higiênico',
        description: 'Tapete higiênico descartável para cães.',
        price: 'R$ 39,90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhI-ATuJhUhEf5Lx1EXQiyPSZd2Dk-sRc1oAuBQUjojyfvn2MS8sAkC3kgDfbOt5gu0qrmHeU_XeJxKD9jkRHZ-4MTAIXyS0fx_Rh_1QbWLUjnBsBOF_5_rg&usqp=CAE'
    },
    {
        id: 9,
        title: 'Cortador de Unhas',
        description: 'Cortador de unhas para cães de todas as raças.',
        price: 'R$ 29,90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrD9Nnn7VkO4G6iz9zdi8N3GNOBVVzg7ZZxxYQXtc3wkyVFr5Txsy-pAkDX_D4nKR2hwwCMVRfWvfwq_ztZmt0wS5-H_AuVaN8-C7_aGK2SYjB15F7x4jTCA&usqp=CAE'
    },
    {
        id: 10,
        title: 'Escova de Dentes',
        description: 'Escova de dentes para higiene bucal de cães.',
        price: 'R$ 19,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPk3UB5u55hwmtvyTxTwA6xh44bLBtXt-N0ss2UfGU1f5a1oAuDRmxms1JKNjbuG5ojcdtd43WFF_yAc2ig-4VKf_wGJsoAtUug6lB4fs&usqp=CAE'
    }
];

const produtosVariados = [
    {
        id: 1,
        title: 'Coleira Anti-Pulgas',
        description: 'Coleira para proteger seu cão contra pulgas e carrapatos.',
        price: 'R$ 49,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQdrvT1bRMB2IxjKdMGYX4z9Vgf6UWJGFOPFdaNltBnmkg-eN_yY4XTqqXa1S8EEzn8iwLRoWJF8yy8pwOdL7RoST9LV2M9wFwCkrb1GULuCKHgDGBgsPhY&usqp=CAE'
    },
    {
        id: 2,
        title: 'Osso de Nylon',
        description: 'Osso de nylon durável para cães que gostam de mastigar.',
        price: 'R$ 22,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmUBGNeB1rNWhRQcdvK4DNUOKooO2cjDtU0d3v2dBiF_nypkynRzqyFSXJd3OWfv0bBK3yj7qAm-4j51JiTTMRnTPBOH6yOC1d5h6gOHUr9fXJ5G38v7xJ&usqp=CAE'
    },
    {
        id: 3,
        title: 'Roupa para Cães',
        description: 'Roupa confortável e estilosa para cães pequenos.',
        price: 'R$ 59,90',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTdA2UHA7igHfntJ66fh3Ltk5RzDxCNsNyDP9O2bnGAjWNmZIgQ_e8y5UI-U30LX6bYiwVjn_3e4Eq8bsgdAkEM_12vaTZz-pH90Dksrpr1n4FU4FIUfRh0g&usqp=CAE'
    },
    {
        id: 4,
        title: 'Guia Retrátil',
        description: 'Guia retrátil para passeios seguros com seu cão.',
        price: 'R$ 69,90',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAdON7Gnoqdjjcrn7Zz3yz8okZ2rLCrcHG8PHRqG4sRqAkToSA--iEx-d-bG5npvMr-EtSMFightuG7Zwo8S87DHA2zqu6r6Sjx4kYbDNWGC7AJAMSsiyc&usqp=CAE'
    },
    {
        id: 5,
        title: 'Bolsa de Transporte',
        description: 'Bolsa de transporte prática para cães de pequeno porte.',
        price: 'R$ 149,90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTM94fgQUCZgn_ALu8g9D-Q-IuZ6iCl6_xLxplR16l9Hj6_pDEniQuiEXuP7u0nbz4xA5TxK-TrOmsjkRUT4jrCM2yawV8NESWhkYrXnma7QLkKstRgd-7yKA&usqp=CAE'
    },
    {
        id: 6,
        title: 'Ração para Filhotes',
        description: 'Ração balanceada para filhotes em crescimento.',
        price: 'R$ 79,90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_T_QzRDGF19L7f4pXVD8XRzhODouj6SfcQ-7LA3N164okcv1OkmE828uBMa2Cd29mSqcZci4DCpCKFXpYE-HwNYoMdfNev7aub1uihw2u4B4Ol_0qTOPFkg&usqp=CAE'
    },
    {
        id: 7,
        title: 'Bebedouro Automático',
        description: 'Bebedouro automático para manter seu cão sempre hidratado.',
        price: 'R$ 89,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8a2ROARd_grg26xmNn18lLBYiqoCIEuOvD-phfgPIqENnPhfi_YJi5Ka90efLzHpoxpbd-aQFN_5jLUecWAUSawoZ6dXSTp9dJ2IxWLynygmktq0aQHGg_A&usqp=CAE'
    },
    {
        id: 8,
        title: 'Petiscos Naturais',
        description: 'Petiscos naturais e saudáveis para recompensar seu cão.',
        price: 'R$ 12,90',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmWNhdZBUBaaasVM3aC5IhZW01XdhtB4XE2r7sPgPknSToI7mH8O4gKGdmxJMPxGsH6MUCrtmQkgi8-DfRJ8EFFNDgCiEZR-itnupc1B1ilvb3Ykfz39rVMQ&usqp=CAE'
    },
    {
        id: 9,
        title: 'Cama Ortopédica',
        description: 'Cama ortopédica para cães idosos ou com problemas articulares.',
        price: 'R$ 199,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsINle94JY_IYKgXnm-HzSBu-EnKltZbQO6E-F36MC05KwQNVEmJlKWhSFfA9opJxkIH8PEXp3f_YGLO6Fw8tBOmQd2S6ShcVxslyl5X5kpJtxk1O2kf3n&usqp=CAE'
    },
    {
        id: 10,
        title: 'Kit de Higiene Bucal',
        description: 'Kit completo para manter a saúde bucal do seu cão.',
        price: 'R$ 29,90',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTJPSxFwTGXfYUShxXMiKkYpGqHnkxJ1xqSRqNBp-V1Vl1eDyQQhpn7WpxANteNwaawm7YqF5NUQpY-D8F_lPGys1hfB6bM8hu7Wup0xwQYeX3fGgKKJ8J&usqp=CAE'
    }
];


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Produtos() {
    return (
        <>
            <div className="produtos-container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all 0.8s"
                    transitionDuration={800}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                >
                    {produtosVariados.map(produto => (
                        <Link to="/agendamentoProduto" key={produto.id} className="produto-card">
                            <div className="produto-image-container">
                                <img src={produto.image} alt={produto.title} className="produto-image" />
                            </div>

                            <div className="produto-details">
                                <h3 className="produto-title">{produto.title}</h3>
                                <p className="produto-description">{produto.description}</p>
                                <p className="produto-price">{produto.price}</p>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>

            <div className="produtos-container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all 0.8s"
                    transitionDuration={800}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                >
                    {produtos.map(produto => (
                        <Link to="/agendamentoProduto" key={produto.id} className="produto-card">
                            <img src={produto.image} alt={produto.title} className="produto-image" />
                            <div className="produto-details">
                                <h3 className="produto-title">{produto.title}</h3>
                                <p className="produto-description">{produto.description}</p>
                                <p className="produto-price">{produto.price}</p>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </>
    );
}