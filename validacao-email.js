function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  const email = "exemplo@dominio.com";
  if (validarEmail(email)) {
    console.log("Endereço de e-mail válido.");
  } else {
    console.log("Endereço de e-mail inválido.");
  }
  