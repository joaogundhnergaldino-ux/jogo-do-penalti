// Lista com as 7 perguntas de Educação Física (dificuldade aumenta aos poucos)
const desafios = [
  {
    categoria: "Técnica de Chute",
    pergunta: "Qual parte do pé dá mais precisão para colocar a bola no canto do gol?",
    opcoes: ["Parte interna (chapa)", "Ponta dos dedos (bico)", "Calcanhar"],
    correta: 0,
    explicacao: "A parte interna do pé (chapa) tem maior área de contato com a bola, garantindo mais controle e precisão."
  },
  {
    categoria: "Técnica de Chute",
    pergunta: "Para dar um chute forte e potente de longe, qual parte do pé devemos usar?",
    opcoes: ["Sola do pé", "Peito do pé (dorso)", "Calcanhar"],
    correta: 1,
    explicacao: "O peito do pé (dorso) permite transferir mais força da perna para a bola com firmeza."
  },
  {
    categoria: "Postura no Chute",
    pergunta: "Onde deve ficar o pé de apoio (que não vai chutar) na hora da cobrança?",
    opcoes: ["Bem atrás da bola", "Ao lado da bola", "Na frente da bola"],
    correta: 1,
    explicacao: "Colocar o pé de apoio ao lado da bola dá equilíbrio ao corpo e ajuda a controlar a altura do chute."
  },
  {
    categoria: "Regras do Pênalti",
    pergunta: "Onde o goleiro precisa estar no exato momento em que o batedor toca na bola?",
    opcoes: ["Com pelo menos um pé na linha do gol", "Dois passos à frente da linha", "Sentado no meio do gol"],
    correta: 0,
    explicacao: "Pela regra oficial, o goleiro deve manter pelo menos parte de um dos pés sobre a linha do gol até o chute."
  },
  {
    categoria: "Regras do Pênalti",
    pergunta: "O que acontece se a bola bater na trave (sem o goleiro tocar) e voltar para o batedor?",
    opcoes: ["Ele pode chutar de novo", "Não pode tocar na bola de novo", "Vale meio gol"],
    correta: 1,
    explicacao: "O batedor não pode tocar na bola uma segunda vez antes que outro jogador encoste nela."
  },
  {
    categoria: "Técnica de Chute",
    pergunta: "Se você inclinar o tronco muito para trás na hora do chute, o que acontece com a bola?",
    opcoes: ["Vai rasteira e fraca", "Sobe demais e passa por cima do gol", "Para na marca do pênalti"],
    correta