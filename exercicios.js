// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
//  implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01 
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  var altura = prompt("Digite a altura do retângulo:")
  var largura = prompt("Digite a largura do retângulo:")

  altura = alturaRec(altura)
  largura = larguraRec(largura)

  var area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(imprimeIdade) {
   // implemente sua lógica aqui
   const anoAtual = prompt("Qual ano atual?")
   const anoNascimento = prompt("Qual seu ano de nascimento?")
  
  imprimeIdade = anoAtual - anoNascimento
  console.log(imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso / (altura * altura)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const meuNome1 = prompt('Qual seu nome?')
  const minhaIdade = prompt('Quantos anos você tem?')
  const meuEmail = prompt('Digite seu email aqui')

  const dadosDoUsuario = `Meu nome é ${meuNome1}, tenho ${minhaIdade} anos, e o meu email é ${meuEmail}.`
  console.log(dadosDoUsuario)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05   ------------------------------  OK PASSOU
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
   const cor1 = prompt('Me fale sua primeira cor favorita?')
   const cor2 = prompt('Me fale sua segunda cor favorita?')
   const cor3 = prompt('Me fale sua terceira cor favorita?')

   const coresFavoritas = [cor1, cor2, cor3]
   console.log(coresFavoritas)

}

// EXERCÍCIO 06
   function retornaStringEmMaiuscula(hello) {
    // implemente sua lógica aqui
    const textoMaiusculo = hello.toUpperCase();

    return textoMaiusculo;
  }
  
//}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  if (valorIngresso <= 0) {
    return "Valor de ingresso inválido";
  }

  const quantidadeIngressos = Math.ceil(custo / valorIngresso);
  return quantidadeIngressos;
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  if (array.length < 2) {
    return array;
  }

  var temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;

  return array;
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // Pede ao usuário o ano atual, o ano de nascimento e o ano de emissão da carteira de identidade
  var anoAtual = prompt("Digite o ano atual:");
  var anoNascimento = prompt("Digite o ano de nascimento:");
  var anoEmissao = prompt("Digite o ano de emissão da carteira de identidade:");

  // Converte as entradas do usuário em números
  anoAtual = parseInt(anoAtual);
  anoNascimento = parseInt(anoNascimento);
  anoEmissao = parseInt(anoEmissao);

  // Calcula a idade da pessoa
  var idade = anoAtual - anoNascimento;

  // Calcula há quantos anos a carteira foi emitida
  var anosEmissao = anoAtual - anoEmissao;

  // Verifica se a carteira precisa ser renovada de acordo com a idade da pessoa
  var precisaRenovar = false;

  if (idade <= 20 || idade === 20) {
    precisaRenovar = (anosEmissao >= 5);
  } else if (idade > 20 && idade <= 50 || idade === 50) {
    precisaRenovar = (anosEmissao >= 10);
  } else {
    precisaRenovar = (anosEmissao >= 15);
  }

  // Imprime no console se a carteira precisa ser renovada ou não
  console.log("A carteira de identidade precisa ser renovada? " + precisaRenovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}