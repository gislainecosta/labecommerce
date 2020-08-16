import React from 'react'
import styled from 'styled-components'

const ContainerProduto = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const FotoProduto = styled.img`
    height:15vw;
    width: 15vw;
    -webkit-transition: all 1.5s ease; /* Safari e Chrome */
    -moz-transition: all 1.5s ease; /* Firefox */
    -ms-transition: all 1.5s ease; /* IE 9 */
    -o-transition: all 1.5s ease; /* Opera */
    transition: all 1.5s ease;
    :hover{    
        -webkit-transform:scale(3); /* Safari e Chrome */
        -moz-transform:scale(3); /* Firefox */
        -ms-transform:scale(3); /* IE 9 */
        -o-transform:scale(3); /* Opera */
        transform:scale(3);
    }
`
const PrecoProduto = styled.p `
    margin: 0.5vw;
    font-size:1vw;
`

const BotaoAdicionarCarrinho = styled.button`
    width:12vw;
    border-radius: 20%;
    background-color: #001020;
    color: #ddeeff;
    cursor: pointer;
    font-size:1.2vw;
`

const TituloProduto = styled.p`
    margin: 0.5vw 0 0 0.5vw;
    font-size:1.5vw;
`

class Produtos extends React.Component {
    state = {
        carrinho: [
            {
                nome: '',
                valor: '',
            },
        ]
        }
        
    adicionarAoCarrinho = () => {
    const produtoAoCarrinho = {
        nome: this.props.titulo,
        valor: this.props.valor,
    }
    const arrayDoCarrinho = [produtoAoCarrinho, ...this.state.carrinho]
    this.setState({carrinho: arrayDoCarrinho})
    }
    
    render() {
        console.log(this.state.carrinho)
        return (
            <ContainerProduto>
                <FotoProduto src={this.props.foto}/>
                <TituloProduto>{this.props.titulo}</TituloProduto>
                <PrecoProduto> R$ {this.props.valor} </PrecoProduto>
                <BotaoAdicionarCarrinho 
                onClick={this.adicionarAoCarrinho}>
                Adicionar ao carrinho
                </BotaoAdicionarCarrinho>
            </ContainerProduto>
        )
    }
}

export default Produtos;