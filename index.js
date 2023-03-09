const nome = prompt("Escreva seu nome:");
const sobrenome = prompt("Escreva seu sobrenome:");
const estudo = prompt("Campo de estudo:");
const nascimento = prompt("Ano de nascimento:");

alert(
  "RECRUTA CADASTRADO!\n" +
    "Nome completo:" +
    " " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo:" +
    " " +
    estudo +
    "\nIdade:" +
    " " +
    (2023 - nascimento)
);
