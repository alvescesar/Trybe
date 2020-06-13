// Declarar variáveis
const stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];
  const selected = document.getElementById('states');
// Criar todos os 'options' para a lista de Estados
  for (let i = 0; i < stateList.length; i += 1) {
    const options = document.createElement('option');
    options.value = stateList[i];
    options.text = stateList[i];
    selected.appendChild(options);
  }

