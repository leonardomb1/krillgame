class pergunta {
  constructor(titulo, texto, q1, q2, q3, tipo, correta) {
    this.titulo1 = titulo;
    this.texto1 = texto;
    this.resp1 = q1;
    this.resp2 = q2;
    this.resp3 = q3;
    this.tipo = tipo;
    this.correta = correta;
  }
}
var questionList = [
  new pergunta(
    "Exportação",
    "Por qual meio de transporte possui maior capacidade de armazenar cargas na rota Brasil - Espanha?",
    "Marítimo",
    "Ferroviário",
    "Aéreo",
    "exp",
    "a"
  ),

  new pergunta(
    "Exportação",
    "Qual meio de transporte tem a melhor capacidade de reposição de estoque de cachaça artesanal?",
    "Marítimo", //Alternativa a
    "Aéreo", //Alternativa b
    "Ferroviário", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "b" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Como é chamado o documento que comprova a origem do produto", //Pergunta
    "Certificado de Origem", //Alternativa a
    "Comprovante de nacionalidade de produto", //Alternativa b
    "Nota Fiscal", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "a" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Qual órgão internacional rege o meio de transporte aéreo?", //Pergunta
    "União das Nações Unidas", //Alternativa a
    "Organização Mundial das Rotas Aéreas", //Alternativa b
    "Associação Internacional de Transportes Aéreos", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Qual é o maior porto brasileiro?", //Pergunta
    "Porto do Rio de Janeiro", //Alternativa a
    "Porto de Santos", //Alternativa b
    "Portonave", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "b" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Por qual modal é mais adequado o transporte urgente de um tanque feito para armazenar cachaça do Brasil para a Espanha?", //Pergunta
    "Ferroviário", //Alternativa a
    "Marítimo", //Alternativa b
    "Aéreo ", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Qual é o nome do tipo de contrato padronizado entre exportador e importador para ser utilizado em operações de comércio exterior?", //Pergunta
    "Carta de crédito", //Alternativa a
    "Termo de envio internacional", //Alternativa b
    "Incoterm", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "O que é um agente de cargas?", //Pergunta
    "O despachante aduaneiro", //Alternativa a
    "O profissional responsável por fiscalizar a carga", //Alternativa b
    "Um profissional responsável pela coordenação de embarques, consolidação e desconsolidação da carga X", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Para qual tipo de produto o modal aéreo é mais recomendado?", //Pergunta
    "Qualquer um, pois é o meio de transporte mais usado no mundo", //Alternativa a
    "Minérios", //Alternativa b
    "Itens pequenos e de alto valor", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "O que é levado em consideração para calcular o valor do frete internacional?", //Pergunta
    "Tamanho e peso", //Alternativa a
    "Tipo de produto", //Alternativa b
    "Nada, a empresa cobra o quanto quiser", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "a" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Qual é o maior aeroporto de cargas do Brasil?", //Pergunta
    "Galeão (GIG – RJ)", //Alternativa a
    "Guarulhos (GRU – SP)", //Alternativa b
    "Viracopos (VCP – SP)", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "c" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Qual é a função dos Incoterms?", //Pergunta
    "Estabelecer um preço justo de frete e seguro (quando há) e evitar valores abusivo", //Alternativa a
    "Determinar os direitos e obrigações do exportador e do importador estabelecendo responsabilidades e deveres entre eles", //Alternativa b
    "Definir as responsabilidades do exportador quanto à integridade física da mercadoria", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "b" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Que registro uma empresa deve possuir para se tornar uma empresa exportadora?", //Pergunta
    "Registro da habilitação no ambiente de registro e rastreamento da atuação dos intervenientes aduaneiros", //Alternativa a
    "Certificado de probidade administrativa em recebimentos advindos do exterior", //Alternativa b
    "Registro básico de exportador em potencial", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "a" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Em que idioma é permitido a emissão de documentos de exportação?", //Pergunta
    "Inglês", //Alternativa a
    "Inglês ou idioma do país de origem", //Alternativa b
    "Inglês ou espanhol, pois são as duas línguas mais falada mundialmente", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "b" //Qual a alternativa correta
  ),

  new pergunta(
    "Exportação", //Título
    "Em que modal é mais recorrente o embarque de cargas projeto?", //Pergunta
    "Aéreo", //Alternativa a
    "Marítimo", //Alternativa b
    "Dutoviário", //Alternativa c
    "exp", //Qual área (jur, fin, mar, etc..)
    "b" //Qual a alternativa correta
  ),
  new pergunta(
    "Finanças",
    "A empresa Krill Ltda precisará levantar recursos para se expandir para a União Europeia. Qual dos seguintes é a melhor opção de captação de recursos caso você queira pagar menos com juros?",
    "Negociar um empréstimo com um banco ",
    "Emitir debêntures ",
    "Negociar com agiotas ",
    "fin",
    "a"
  ),

  new pergunta(
    "Finanças",
    "Quais são os documentos necessários para o fechamento de câmbio ao utilizar a Carta de Crédito?",
    "Proforma Invoice e certificado de origem ",
    "Certificado de fumigação (fitossanitário) e cartão de crédito VISA ",
    "Fatura comercial e conhecimento de transporte internacional assinado ou extrato do Registro de Exportação (RE) averbado, Declaração de Despacho de Exportação (DDE). Licença de Importação (LI) e extrato do Despacho de Importação (DI), adicionado ao formulário de saque fornecido pela instituição financeira e demais documentos, como certificados ou outros constantes no corpo da carta ou exigidos pelo banco.",
    "fin",
    "c"
  ),

  new pergunta(
    "Finanças",
    "Qual é a modalidade de pagamento mais segura e, portanto, mais utilizada no comércio internacional?",
    "Cobrança documentária",
    "Carta de crédito",
    "Pagamento antecipado",
    "fin",
    "b"
  ),

  new pergunta(
    "Finanças",
    "É possível a empresa Krill exportar mercadorias para a União Europeia e receber em Reais?",
    "Sim",
    "Não",
    "Depende do acordo firmado entre o Brasil e o país europeu em questão",
    "fin",
    "b"
  ),

  new pergunta(
    "Finanças",
    "Qual dos seguintes é um código utilizado para fazer transferências bancárias internacionais?",
    "NCM",
    "MORSE",
    "SWIFT",
    "fin",
    "c"
  ),

  new pergunta(
    "Finanças",
    "Qual das seguintes alternativas é a menos eficiente para assegurar que o cliente fará o pagamento das mercadorias?",
    "Análise de crédito do cliente",
    "Criação de uma sistemática de cobrança",
    "Verificar o tamanho da empresa do cliente e o seu comprometimento com a proteção do meio ambiente",
    "fin",
    "c"
  ),

  new pergunta(
    "Finanças",
    "Quais dos seguintes representam os cinco elementos dos chamados 5C’s do crédito, os quais são importantes para se conhecer a credibilidade do cliente?",
    "Caráter, capacidade, capital, colateral e condições",
    "Contexto, companhia, colaborador, cliente e concorrência",
    "Clima, comunicação, controle, cultura e capciosidade",
    "fin",
    "a"
  ),

  new pergunta(
    "Finanças",
    "Caso haja uma apreciação do Euro em relação a outras moedas, isso significa que:",
    "A empresa Krill Ltda lucrará mais com as exportações",
    "A empresa Krill Ltda lucrará menos com as exportações",
    "O cliente importador comprará menos devido ao aumento no valor do produto",
    "fin",
    "a"
  ),

  new pergunta(
    "Finanças",
    "Dos seguintes, qual o risco financeiro que a empresa Krill enfrentará ao exapndir-se para o exterior?",
    "Risco de câmbio",
    "Risco de crédito",
    "Todas as alternativas estão corretas",
    "fin",
    "c"
  ),

  new pergunta(
    "Finanças",
    "Qual dos seguintes acordos foi firmado recentemente e pode ajudar a empresa Krill Ltda a exportar seus produtos para o seu mercado alvo?",
    "Tratado de Livre Comércio entre Mercosul e União Europeia",
    "Acordo Geral sobre Tarifas e Comércio (GATT)",
    "Acordo de Paris",
    "fin",
    "a"
  ),
  new pergunta(
    "?",
    "A Krill está estudando a melhor forma de receber o pagamento referente ao envio dos produtos ao exterior. Ao analisar as várias opções existentes, definiu uma forma de pagamento que traz garantias tanto ao exportador quanto ao importador. Trata-se de:",
    "Transferência por PIX",
    "Carta de crédito",
    "Pagamento por boleto",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "O CEO da empresa Krill deseja internacionalizar o seu produto daqui a 2 anos, a partir do qual iniciará as exportações. Levando em consideração que a Krill juntou um dinheiro de reserva, qual o melhor tipo de investimento a se fazer com essa quantia para registrar no final do período mencionado?",
    "Previdência privada",
    "Ações",
    "CDB",
    "cen",
    "c"
  ),

  new pergunta(
    "?",
    "Percebeu-se que um cliente está atrasado no pagamento das mercadorias. A Krill quer efetuar a cobrança, mas de uma forma que não afete a permanência do cliente. Com base nisso, o que a Krill não deve fazer na hora de realizar a cobrança?",
    "Exigir uma resposta",
    "Tomar uma ação legal drástica por meio de um advogado",
    "Enviar e-mail e fazer ligação telefônica de forma mais insistente",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "A Krill quer exportar a sua mercadoria para um cliente no exterior e, recentemente, conheceu 3 empresas estrangeiras numa feira de negócios com os quais realizou a troca de contrato. Ao trocar ideia e buscar informações descobriu-se que uma dessas empresas está localizada na Espanha, a outra em Portugal e a última na Itália. A primeira quer importar em grande quantidade, mas tem pouco crédito A segunda quer importar em pequena quantidade, mas possui um crédito bom. A terceira quer importar em média quantidade e possui um crédito mediano/baixo. Para qual empresa seria mais prudente exportar?",
    "A da Espanha",
    "A de Portugal",
    "A da Itália",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "A Krill quer exportar os seus produtos, porém não possui caixa no momento. Visando fazer o envio da mercadoria dentro do prazo determinado pelo cliente e sabendo que o prazo de entrega está próximo, qual a melhor opção para captar recurso?",
    "Solicitar um ACC ou um financiamento com juros baixos ao banco",
    "Desistir de exportar",
    "Realizar Day Trade no mercado de ações para captar recursos no curto prazo",
    "cen",
    "a"
  ),

  new pergunta(
    "?",
    "Ao entrar em um mercado externo, a empresa possuidora da propriedade intelectual consegue diminuir barreiras à penetração na Europa. Uma dessas barreiras é a de aspecto cultural, presente em países com sistemas jurídicos fracos. Qual aa melhor estratégia para se diminuir este entrave dentro do continente europeu?",
    "Fazer propaganda em todos os meios de comunicação possível, assim diminuindo a estranheza da população com a mercadoria",
    "Procurar formar alianças com empresas locais, dessa forma conseguindo a confiança da população europeia",
    "Realizar pedidos as autoridades da Europa para que essas barreiras sejam extinguidas",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "A Krill, com o intuito de exportar seu produto principal, recorre a obtenção de seguro. A fim de proteger a cachaça artesanal que oferta, qual seria a melhor cobertura, pensando que este é um produto de baixo valor agregado.",
    "Alta",
    "Média",
    "Baixa",
    "cen",
    "c"
  ),

  new pergunta(
    "?",
    "Visando exportar sua mercadoria para a Europa, a Krill procura mercados dentro do continente que garantam incentivos financeiros e que possuam um ambiente legal propício aos negócios. Com isso a Krill deve buscar um mercado que possua um nível alto de segurança jurídica, sendo que sem ela, a empresa terá problemas nestes dois âmbitos no processo de internacionalização. Quais problemas, nos sentidos financeiro e legal, a Krill enfrentará se não se preocupar com a segurança jurídica oferecida pelo país?",
    "Afastamento de investimentos e gastos desnecessários devido a maior demanda de ações judicias, obrigando a empresa a fazer reservas de dinheiro para usar em possíveis casos de contrafação",
    "Problemas com o ambiente legal, propício à concorrência desleal e análise de crédito mais detalhada por ser estrangeiro",
    "Dificuldades em entender o sistema jurídico europeu e maiores riscos financeiros, de câmbio e crédito",
    "cen",
    "a"
  ),

  new pergunta(
    "?",
    " Qual é o melhor equílibrio entre aplicação financeira e alcance da propaganda e qual é o meio mais adequado?",
    "Ônibus e outdoors - EUR 1500",
    "Redes sociais e sites (Instagram, google ads & facebook ads) - EUR 400",
    "Rádio e Televisão - EUR 12.000",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "A Krill precisa importar um acessório chamado de refratômetro para auxiliar na produção de cachaça. O refratômetro é um eletrônico frágil, e precisa ser transportado com cautela para que não haja riscos de ser danificado. Dentre as opções abaixo, qual é a melhor opção de embalagem para utilizar no transporte?",
    "Caixa de aço inoxidável",
    "Caixa de papelão com isopor",
    "Caixa de fábrica do refratômetro",
    "cen",
    "c"
  ),

  new pergunta(
    "?",
    "O refratômetro importado chegou na fábrica da Krill, porém ao abrir o pacote o acessório está visivelmente danificado. A produção da Krill vai ser afetada por esse imprevisto, e a administração vai precisar agir o mais rápido possível para conseguir o refratômetro. Qual é a melhor ação a ser tomada em casos assim?",
    "Cobrar do vendedor estrangeiro",
    "Contatar a empresa seguradora",
    "Exigir uma indenização da transportadora",
    "cen",
    "b"
  ),

  new pergunta(
    "?",
    "Foi feita uma pesquisa de mercado na Espanha e seus resultados foram que a maioria dos jovens (com idade entre 18 e 29 anos) gostaram do produto, enquanto no público mais velho (entre 34 à 40 anos) houve uma aceitação de 17% e o público de entre 45 e 64 anos teve baixíssima taxa de aprovação. SCom base nesta análise, qual é o ponto de venda ideal do produto?",
    "Clubes Noturnos",
    "Bares e Restaurantes",
    "Adegas",
    "cen",
    "a"
  ),
  new pergunta(
    "Jurídico",
    "Para proteger seu produto no mercado europeu, a Krill deve realizar o registro da patente da sua marca. Levando em conta questões como tempo e gastos financeiros, qual a melhor forma da empresa fazer esse registro?",
    "Patentear usando o PCT (Tratado de Cooperação de Patentes)",
    "Confiar no registro feito no Brasil, não realizando a proteção da marca no exterior",
    "Registrar a marca já estando no território europeu",
    "jur",
    "a"
  ),

  new pergunta(
    "Jurídico",
    "Por meio da obtenção da propriedade intelectual da marca Krill, quem tem direito de explorar comercialmente os produtos da marca?",
    "Apenas empresas do mesmo segmento",
    "Qualquer empresa interessada em utilizar a imagem da marca",
    "Apenas a Krill tem direito de explorar sua marca",
    "jur",
    "c"
  ),

  new pergunta(
    "Jurídico",
    "Qual é o órgão brasileiro responsável pela concessão de patentes?",
    "MDIC",
    "INPI",
    "PCT",
    "jur",
    "b"
  ),
  new pergunta(
    "Jurídico",
    "No Brasil, a segurança jurídica oferecida às empresas não é muito boa. Quais aõs alguns motivos que se pode citar que causam essa situação no país?",
    "Falta de interesse dos empresários e fiscalização mal feita",
    "Grande quantidade de empresas e poucos órgãos reguladores",
    "Falta de clareza nas leis e muitas ações junto ao sistema Judiciário, havendo assim muita lentidão",
    "jur",
    "c"
  ),

  new pergunta(
    "Jurídico",
    "Em média, de quantos anos é a validade da patente de um produto/marca no Brasil?",
    "De 5 a 10 anos;",
    "De 15 a 20 anos",
    "De 25 a 30 anos",
    "jur",
    "b"
  ),

  new pergunta(
    "Jurídico",
    "Em quais circunstâncias de concorrência desleal os detentores do direito de explorar comercialmente a marca da Krill poderão pedir o combate à pirataria?",
    "Uso indevido do logo, semelhança fonética, de forma completa ou em partes ou comercialização do produto sem autorização dos responsáveis",
    "Uso indevido das indústrias da Krill ou comercialização de produtos, mesmo que de segmentos diferentes, com semelhança fonética",
    "Apenas em situações de quebra de acordos com parceiros comerciais",
    "jur",
    "a"
  ),

  new pergunta(
    "Jurídico",
    "Tendo o direito exclusivo de explorar a marca Krill, quando a empresa adentrasse um mercado novo, isto poderia servir como um benefício à competitividade da organização perante os concorrentes?",
    "Não, pois não interfere nas ações da empresa, apenas a ajudando juridicamente",
    "Sim, traz segurança aos titulares da marca, além de incentivar investimentos externos assim, estimulando a produção",
    "Não é possível dizer",
    "jur",
    "b"
  ),

  new pergunta(
    "Jurídico",
    "De que maneira o princípio da Segurança Jurídica auxilia as organizações?",
    "Dá estabilidade necessária nas negociações com parceiros nacionais e/ou europeus",
    "Garante que direitos antes conseguidos não serão retirados ou diminuídos",
    "Auxilia no crescimento das empresas e no desenvolvimento econômico destas",
    "jur",
    "c"
  ),

  new pergunta(
    "Jurídico",
    "Qual das áreas de abrangência da Propriedade Intelectual se refere a proteção de marcas e patentes?",
    "Propriedade Industrial",
    "Direito Autoral",
    "Direito Sui Generis",
    "jur",
    "a"
  ),

  new pergunta(
    "Jurídico",
    "Qual a única maneira da Krill garantir que, entrando com uma mercadoria nova no mercado externo, esta ficará protegida por lei de eventual pirataria?",
    "Ter um bom time de advogados prontos para agir caso algum problema legal ocorra",
    "Patentear a marca e seu produto",
    "Entrando na justiça internacional pedindo a nulidade da marca",
    "jur",
    "b"
  ),
];

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
