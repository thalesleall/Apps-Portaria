const form = document.querySelector('#form');
const table = document.querySelector('#table tbody');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const morador = document.querySelector('#morador').value;
  const lote = document.querySelector('#lote').value;
  const pessoa_liberada = document.querySelector('#pessoa_liberada').value;
  const data_inicial = document.querySelector('#data_inicial').value;
  const data_final = document.querySelector('#data_final').value;

  const row = table.insertRow();

  row.innerHTML = `
    <td>${morador}</td>
    <td>${lote}</td>
    <td>${pessoa_liberada}</td>
    <td>${data_inicial}</td>
    <td>${data_final}</td>
  `;

  form.reset();
}
