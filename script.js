// Seleciona o elemento da tela onde os resultados serão exibidos
let resultado = document.getElementById('resultado');

// Variáveis para armazenar valores e operadores durante os cálculos
let valorAtual = ''; // Armazena o valor digitado atualmente
let operador = null; // Armazena o operador selecionado (+, -, *, /, %)
let valorAnterior = null; // Armazena o valor anterior antes de aplicar uma operação

// Função para adicionar valores (números ou pontos decimais) à tela
function adicionarValor(valor) {
  valorAtual += valor; // Concatena o valor atual com o novo valor
  atualizarTela(); // Atualiza a tela para refletir a mudança
}

// Função para definir o operador matemático
function operar(op) {
  if (valorAtual === '') return; // Ignora a função se não houver valor atual
  if (valorAnterior !== null) calcular(); // Se já houver um cálculo pendente, executa-o
  operador = op; // Define o operador selecionado
  valorAnterior = parseFloat(valorAtual); // Converte o valor atual para número e armazena como valor anterior
  valorAtual = ''; // Limpa o valor atual para permitir a entrada do próximo número
}

// Função para realizar o cálculo baseado no operador selecionado
function calcular() {
  if (operador === null || valorAtual === '') return; // Se não houver operador ou valor atual, não faz nada
  let resultadoFinal; // Variável para armazenar o resultado do cálculo
  const atual = parseFloat(valorAtual); // Converte o valor atual para número
  switch (operador) { // Executa a operação com base no operador
    case '+':
      resultadoFinal = valorAnterior + atual; // Soma
      break;
    case '-':
      resultadoFinal = valorAnterior - atual; // Subtração
      break;
    case '*':
      resultadoFinal = valorAnterior * atual; // Multiplicação
      break;
    case '/':
      resultadoFinal = valorAnterior / atual; // Divisão
      break;
    case '%':
      resultadoFinal = valorAnterior % atual; // Módulo (resto da divisão)
      break;
  }
  valorAtual = resultadoFinal.toString(); // Converte o resultado para string e armazena como valor atual
  operador = null; // Reseta o operador
  valorAnterior = null; // Reseta o valor anterior
  atualizarTela(); // Atualiza a tela com o resultado
}

// Função para limpar todos os valores e operadores
function limpar() {
  valorAtual = ''; // Reseta o valor atual
  operador = null; // Reseta o operador
  valorAnterior = null; // Reseta o valor anterior
  atualizarTela(); // Atualiza a tela para mostrar '0'
}

// Função para atualizar o display da calculadora
function atualizarTela() {
  resultado.value = valorAtual || '0'; // Se valorAtual estiver vazio, exibe '0'
}
