/* eslint-disable no-unused-expressions */
import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding:0.5vw;
`
const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5vw;
    margin-bottom: 1vw;
    border: 1px solid #001020;
    box-shadow:-1px 2px 5px 0px rgba(50, 50, 50, 0.75);
    padding: 0.4vw;
`

const Cabecalho = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 1vw;
    flex-flow: row wrap;
    justify-content:space-around;
`

const Catalogo = styled.section `
    display: flex;
    flex-flow: row wrap;
`

const CardProdutos = styled.article `
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
`

const Ordenar = styled.select`
    border-radius: 10%;
    width: 10vw;
    height: 2vw;
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
   -moz-appearance: none; /* Remove estilo padrão do FireFox */
   appearance: none; /* Remove estilo padrão do FireFox*/
   background-color: #001020;
   color: #ddeeff;
   padding: 0.5vw;
   cursor: pointer;
`
const TituloCarrinho = styled.p` 
    font-weight: bold;
    font-size: 2vw;
    align-self: center;
    margin-bottom: 2vw;
`

const Titulo = styled.p ` 
    font-weight: bold;
    font-size: 2vw;
    margin: 0 12vw;
`
const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #001020;
    color: #ddeeff;
    border: 1px solid black;
    padding: 1vw;
    width: 35vw;
    height:95vh;
    display: ${props =>{
       if (props.ismostra) {
           return "flex"
       } else {
           return "none"
       }
    }};    `

const BotaoAdicionarCarrinho = styled.button`
    width:12vw;
    border-radius: 20%;
    height: 2vw;
    background-color: #001020;
    color: #ddeeff;
    cursor: pointer;
`

class Display extends React.Component {
    state ={
        ordem: 'nenhuma',
        produtosOriginais: [
        ],
        postsOrdenados:[

        ]
        //carrinho: [
        //    produto= {
        //        nome: '',
        //        preco: '',
        //    }
        //],
    }  

    componentDidMount(){
    const listaOriginal = this.props.listaDeProdutos
    this.setState({produtosOriginais: listaOriginal})
    }

    componentDidUpdate(){

        //const crescente = this.state.produtosOriginais.map((produto) => {
        //    return (produto)
        //}).sort(function (a, b) {
        //    return a.preço - b.preço
        //})
        //
        //const decrescente = this.state.produtosOriginais.map((produto) => {
        //    return (produto)
        //}).sort(function (a, b) {
        //    return b.preço - a.preço
        //})
//
        //if (this.state.ordem === 'crescente') {
        //    let ordenados = [crescente, ...this.state.postsOrdenados]
        //    this.setState({postsOrdenados:ordenados})
        //} else if (this.state.ordem === 'decrescente') {
        //    let ordenados = [decrescente, ...this.state.postsOrdenados]
        //    this.setState({postsOrdenados:ordenados})
        //} else {
        //    this.setState({postsOrdenados:this.state.produtosOriginais})
        //}
    }
    
    onClickAdicionarCarrinho = () => {
    //console.log(this.props.listaDeProdutos)
    }
    

    render(){

        const produtosSite = this.state.produtosOriginais.map((produto) => {
            return <CardProduto >
                <Produtos key
                    foto={produto.url}
                    titulo={produto.nome}
                    valor={produto.preço}
                />
                <BotaoAdicionarCarrinho onClick={this.onClickAdicionarCarrinho}>
                    Adicionar ao carrinho
                </BotaoAdicionarCarrinho>
                </CardProduto>
        }); 
        

        return(
            <Container>
                <Catalogo>
                    <Cabecalho>
                        <Titulo>Quantidade de Produtos: {produtosSite.length}</Titulo> 
                        <Ordenar onChange = {e => this.setState({ordem: e.target.value})}>
                            <option value="nenhuma">Ordenar</option>
                            <option value="crescente">Preço: Crescente</option>
                            <option value="decrescente">Preço: Decrescente</option>
                        </Ordenar>
                    </Cabecalho>
                    <CardProdutos> 
                        {produtosSite}
                    </CardProdutos>
                </Catalogo>
                <ContainerCarrinho ismostra={this.props.mostrar}>
                    <TituloCarrinho>Carrinho:</TituloCarrinho>
                    <p>Total:<strong>R$ 0.00</strong></p>
                </ContainerCarrinho>
            </Container>
) 
}
}
export default Display;