function shuffle(array) {
  //Mistura os resultados
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class pergunta {
  constructor(titulo, texto, q1, q2, q3, tipo, correta) {
    var titulo1 = titulo;
    var texto1 = texto;
    var resp1 = q1;
    var resp2 = q2;
    var resp3 = q3;
    var tipo = tipo;
    var correta = correta;
  }
}

var perg1 = new pergunta(
  "?",
  "A Krill está estudando a melhor forma de receber o pagamento referente ao envio dos produtos ao exterior. Ao analisar as várias opções existentes, definiu uma forma de pagamento que traz garantias tanto ao exportador quanto ao importador. Trata-se de:",
  "Transferência por PIX",
  "Carta de Crédito",
  "Pagamento por boleto bancário",
  "jur",
  "a"
);
var perg2 = new pergunta(
  "?",
  "O CEO da empresa Krill deseja internacionalizar o seu produto daqui a 2 anos, a partir do qual iniciará as exportações. Levando em consideração que a Krill juntou um dinheiro de reserva, qual o melhor tipo de investimento a se fazer com essa quantia para resgatar no final do período mencionado?",
  "Previdência privada",
  "Ações",
  "CDB",
  "mar",
  "b"
);
var perg3 = new pergunta(
  "?",
  "Percebeu-se que um cliente está atrasando no pagamento das mercadorias. A Krill quer efetuar a cobrança, mas de uma forma que não afete a permanência do cliente. Com base nisso, o que a Krill não deve fazer na hora de realizar a cobrança?",
  "Exigir uma resposta",
  "Tomar uma ação legal drástica por meio de um advogado",
  "Pagamento por boleto bancárioEnviar e-mail e fazer ligação telefônica de forma mais insistente",
  "fin",
  "a"
);
var perg4 = new pergunta(
  "?",
  "A Krill quer exportar a sua mercadoria para um cliente no exterior e, recentemente, conheceu 3 empresas estrangeiras numa feira de negócios com os quais realizou a troca de contao. Ao trocar ideia e buscar informações, descobriu-se que uma dessas empresas está localizada na Espanha, a outra em Portugal e a última na Itália. A primeira quer importar em grande quantidade, mas tem pouco crédito. A segunda quer importar em pequena quantidade, mas possui um crédito bom. A terceira quer importar em média quantidade e possui um crédito mediano/baixo. Para qual empresa seria mais prudente exportar?",
  "A da Espanha",
  "A de Portugal",
  "A da Italia",
  "exp",
  "b"
);
var perg5 = new pergunta(
  "?",
  "A Krill quer exportar os seus produtos, porém não possui caixa no momento. Visando fazer o envio da mercadoria dentro do prazo determinado pelo cliente, qual a melhor opção para captar recurso? Lembrando-se que o prazo de entrega está próximo.",
  "Solicitar um ACC ou um financiamento com juros baixos ao banco",
  "Desistir de exportar",
  "Realizar Day Trade no mercado de ações para captar recursos no curto prazo",
  "imp",
  "c"
);

var questionList = [];
questionList.push(perg1, perg2, perg3, perg4, perg5);
shuffle(questionList);

function getPergunta(tipo) {
  var filterList = [];
  for (pergunta of questionList) {
    if (pergunta.tipo == tipo) {
      filterList.push(pergunta);
    }
  }
  return filterList;
}
