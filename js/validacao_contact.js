const email = document.querySelector("#email")
const emailError = document.querySelector("#email-error")
email.addEventListener('change', e => emailValidar())

const fullName = document.querySelector("#fullname")
const fullNameError = document.querySelector("#fullname-error")
fullName.addEventListener('change', e => nomeCompletoValidar())

const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subject-error")
subject.addEventListener('change', e => assuntoValidar())

const message = document.querySelector("#message")
const messageError = document.querySelector("#message-error")
message.addEventListener('change', e => mensagemValidar())


function trySubmit(e) {
  emailValidar()
  nomeCompletoValidar()
  assuntoValidar()
  mensagemValidar()

  const errors = [
    emailError.innerHTML.length !== 0,
    fullNameError.innerHTML.length !== 0,
    subjectError.innerHTML.length !== 0,
    messageError.innerHTML.length !== 0,
  ]

  for (const temFormComErro of errors) {
    if(temFormComErro) {
      alert('você ainda tem formulários com erro!!')
      return
    }
  }

  alert('Contato enviado com sucesso!!')
}

function nomeCompletoValidar(e) {
  const fullNameText = fullName.value
  
  let valido = true
  
  if(fullNameText.length === 0 || fullNameText.length > 100) {
    valido = false
  }

  if(!valido) {
    fullName.style.border = "2px solid red";
    fullNameError.innerHTML = 'Campo deve ter entre 1 e 100 caracteres'
  } else {
    fullName.style.border = "1px solid #ced4da";
    fullNameError.innerHTML = ''
  }
}

function assuntoValidar(e) {
  const subjectText = subject.value
  
  let valido = true
  
  if(subjectText.length === 0 || subjectText.length > 100) {
    valido = false
  }

  if(!valido) {
    subject.style.border = "2px solid red";
    subjectError.innerHTML = 'Campo deve ter entre 1 e 100 caracteres'
  } else {
    subject.style.border = "1px solid #ced4da";
    subjectError.innerHTML = ''
  }
}

function emailValidar(e) {
  const emailValue = email.value
  
  let valido = true
  
  if(emailValue.length === 0 || emailValue.length > 50) {
    valido = false
  }
  if(emailValue.split('@').length !== 2){
    valido = false
  }

  if(!valido) {
    email.style.border = "1px solid red";
    emailError.innerHTML = 'Email inválido.'
  } else {
    email.style.border = "1px solid #ced4da";
    emailError.innerHTML = ''
  }
}

function mensagemValidar(e) {
  const mensagemText = message.value
  
  let valido = true
  
  if(mensagemText.length === 0 || mensagemText.length > 500) {
    valido = false
  }

  if(!valido) {
    message.style.border = "2px solid red";
    messageError.innerHTML = 'Campo deve ter entre 1 e 500 caracteres'
  } else {
    message.style.border = "1px solid #ced4da";
    messageError.innerHTML = ''
  }
}