//função de quando o documento está pronto;
$(document).ready(() => {
  tabCadAtendidos.list();
});
//ajax que pega os dados inseridos no Banco de Dados e insere na tabela;
var tabCadAtendidos = {
  list() {
    $.ajax({
      url: "http://localhost:1234/usersassist",
      type: "GET",
      success: (data) => {
        var tr = "";
        data.forEach((element) => {
          tr += `<tr>`;
          tr += `<td> ${element.IDregistro}</td>`;
          tr += `<td> ${element.nomeSocial}</td>`;
          tr += `<td> ${element.CPF_RG}</td>`;
          tr += `<td> ${element.serviçosSociais}</td>`;
          tr += `<td> ${element.serviçosSociaisPassados}</td>`;
          tr += `<td> ${element.dataChegada}</td>`;
          tr += `<td> ${element.encaminhamento}</td>`;
          tr += `<td> ${element.toalha}</td></tr>`;
        });
        $("#table").html(tr);
      },
    });
  },
};
