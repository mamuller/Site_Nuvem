function bigImg(x) {
    x.style.height = "80px";
    x.style.width = "80px";
}

function normalImg(x) {
    x.style.height = "70px";
    x.style.width = "70px";
}

//function telefone_contato(x) {
//    document.getElementById("id_contato").innerHTML = "<b>Telefone</b>: 0800 771 5001 <br> <b>WhatsApp</b>: (19) 9 8765-4321";    
//}

function PopUp() {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var textArea = document.getElementById("textArea").value;

    if (nome != "" && email != "" && textArea != "") {
        alert(nome + ', sua mensagem foi enviada com sucesso! Obrigada!');
    }
    document.getElementById(" p,c").innerHTML = "";
}

function getItemSelected(x) {
    var valorSelecionado = x.options[x.selectedIndex].value

    if (valorSelecionado == "") {
        document.getElementById("orientacaoTextArea").innerHTML = "";
    }
    else {
        if (valorSelecionado == "reclamacao") {
            document.getElementById("orientacaoTextArea").innerHTML = "Nos fale qual é sua reclamação.";
        }
        else if (valorSelecionado == "sugestao") {
            document.getElementById("orientacaoTextArea").innerHTML = "Nos conte quais são suas sugestões.";
        }
        else if (valorSelecionado == "criticas") {
            document.getElementById("orientacaoTextArea").innerHTML = "Quais são suas críticas?";
        }
    }
}

var endereco = new google.maps.LatLng(-22.908770, -47.075899); // dentro dos parêntesis são definidas as coordenadas de Latitude e Longitude para indicar o centro do mapa.
var metrocamp = new google.maps.LatLng(-22.908770, -47.075899); // dentro dos parêntesis são definidas as coordenadas de Latitude e Longitude do marcador que aparecerá no mapa

function initialize() {
    var mapOptions = {
        center: endereco, // busca a variavel com nome 'endereco' para buscar a latitude e longetude do endereço
        zoom: 19, // zoom para ampliação do mapa - pode ir de 0 a 21
        mapTypeId: google.maps.MapTypeId.SATELLITE // define qual o tipo de mapa apresentado na inicialização
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // variável que define o conteúdo da Info Window
    var conteudo = '<div id="titulo_container">' +
        '<div class="titulo_marcador">Centro Universitário UniMetrocamp</div>' +
        '<div class="endereco_marcador">Rua Dr. Sales de Oliveira, 1661 - Vila Industrial (Campinas), Campinas - SP, 13035-500</div>' +
        '</div>';

    // cria a nova Info Window com referência à variável infowindow e atribui o conteúdo
    var infowindow = new google.maps.InfoWindow({
        content: conteudo
    });

    // variável que define as opções do marcador
    var marker = new google.maps.Marker({
        position: metrocamp, // variável com as coordenadas Lat e Lng
        map: map,
        title: "Centro Universitário UniMetrocamp"
    });

    // procedimento que mostra a Info Window através de um click no marcador
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker); //map e marker são as variáveis definidas anteriormente
    });

    // evento que fecha a infoWindow com click no mapa
    google.maps.event.addListener(map, 'click', function () {
        infowindow.close();
    });
}
google.maps.event.addDomListener(window, 'load', initialize);