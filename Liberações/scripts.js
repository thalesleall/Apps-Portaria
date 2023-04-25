function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

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
  let dltButton = document.createElement('button');


  //nao deu certo
  // = dltButton.innerText = "butao";
  // document.querySelector('.table').appendChild(dltButton);
  // document.querySelector('.table').innerText = dltButton.outerHTML;

  //nao deu certo
  // const dltButton = document.createElement('img');
  // dltButton.setAttribute("onclick", "deleteRow(r)");
  // dltButton.setAttribute("src","./assets/delete-icon.svg");
  // dltButton.innerHTML = "Deletar linha" ;

  //funcao que talvez dê certo
  // function deleteRow(r) {
  //   var i = r.parentNode.parentNode.rowIndex;
  //   document.getElementById("myTable").deleteRow(i);
  // }
 
  
  
  const row = table.insertRow();
 

  row.innerHTML = `
    <td>${morador}</td>
    <td>${lote}</td>
    <td>${pessoa_liberada}</td>
    <td>${data_inicial}</td>
    <td>${data_final}</td>
    <td>${dltButton}</td>
  `;


  form.reset();

}


 
