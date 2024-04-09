let participantes = [
 {
  nome: "Diego Fernandes",
  email: "diego@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2023, 2, 23, 19, 23),
  dataCheckIn: null
 },
 {
  nome: "Ana Silva",
  email: "ana@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "João Oliveira",
  email: "joao@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "Mariana Santos",
  email: "mariana@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: null
 },
 {
  nome: "Pedro Oliveira",
  email: "pedro@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "Camila Almeida",
  email: "camila@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "Lucas Pereira",
  email: "lucas@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: new Date(2024, 2, 01, 20, 20)
 },
 {
  nome: "Juliana Costa",
  email: "juliana@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: null
 },
 {
  nome: "Rafael Oliveira",
  email: "rafael@gmail.com",
  dataInscricao: new Date(2024, 2, 01, 19, 23),
  dataCheckIn: null
 }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null){
  dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
  `
}

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  //substituir informação do HTML
  document
  .querySelector('tbody').
  innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)
  
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {

  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if (confirm(mensagemConfirmacao) == false) {
    return
  }

  alert(resultado)

  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)

}