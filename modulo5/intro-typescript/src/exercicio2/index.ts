// A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

// Código em JavaScript:

// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

function imprimeTresCoresFavoritas(
  cor1: string,
  cor2: string,
  cor3: string
): string[] {
  const listDeCores = [];
  listDeCores.push(cor1, cor2, cor3);
  return listDeCores;
}
console.log((imprimeTresCoresFavoritas("Roxo", "Rosa", "Azul")))
