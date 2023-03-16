var ulMelhorFilme = document.getElementById("ulMelhorFilme");
var ulMelhorAnimação = document.getElementById("ulMelhorAnimação");
var ulFilmes = document.getElementById("ulFilmes");
var linksAdicionados = [];
var imgAdicionadas = [];

var sobreMelhorFilme = [
	"Nada de Novo no Front",
	"Avatar: O Caminho da Água",
	"Os Banshees de Inisherin",
	"Elvis",
	"Tudo em Todo o Lugar Ao Mesmo Tempo",
  "Os Fabelmans",
  "Tár",
  "Top Gun: Maverick",
  "Triângulo de Tristeza",
  "Women Talking"
];

var linkMelhorFilme = [
	"https://youtu.be/vwbySrsD7RU",
	"https://youtu.be/x5pZI-DmtrE",
	"https://youtu.be/I3N_Am8mP0E",
	"https://youtu.be/XpU9J2oL0GE",
	"https://youtu.be/kULcXm9V7aY",
  "https://youtu.be/R4eRHRPs8Ss",
  "https://youtu.be/neMq6nhR2xM",
  "https://youtu.be/7aOCYTflp8o",
  "https://youtu.be/PoP_Z5dzdZ0",
  "https://youtu.be/pD0mFhMqDCE"
];

var imgMelhorFilme = [
	"https://br.web.img3.acsta.net/pictures/22/10/20/16/25/1413867.jpg",
	"https://br.web.img3.acsta.net/pictures/22/05/09/16/16/3197518.jpg",
	"https://assets.cinebelasartes.com.br/wp-content/uploads/2023/02/poster-os-banshees-de-inisherin-min.jpeg",
	"https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg",
  "https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg",
  "https://br.web.img3.acsta.net/pictures/22/12/13/18/42/2843229.jpg",
  "https://br.web.img3.acsta.net/pictures/22/10/17/21/34/0743911.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg",
  "https://br.web.img3.acsta.net/pictures/23/01/10/20/24/3983757.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/Women_talking.jpg/230px-Women_talking.jpg"
];

var sobreMelhorAnimação = [
	"Pinóquio por Guillermo del Toro",
  "Marcel the Shell with Shoes On",
	"Gato de Botas 2: O Último Pedido",
	"A Fera do Mar",
  "Red: Crescer é uma Fera"
];

var linkMelhorAnimação = [
  "https://youtu.be/pSxooe9BHgI",
	"https://youtu.be/k98Afd7Nf3Y",
	"https://youtu.be/sLk94T-hS78",
	"https://youtu.be/e-KPygLf5TA",
  "https://youtu.be/YeQoQNZq7wg"
];

var imgMelhorAnimação = [
  "https://vigilianerd.com.br/wp-content/uploads/2022/07/20220727-pinoquio-guillermo-del-toro-3.jpg",
  
	"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/15527443b403b7ea27a187a4af7eb11bfe25fde5405bc88e8c4a3b969ae2be33._RI_V_TTW_.jpg",
  
	"https://br.web.img3.acsta.net/pictures/22/12/27/14/37/5994557.jpg",
  
	"https://br.web.img2.acsta.net/pictures/22/06/07/18/53/4362759.jpg",
  
  "https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg"
];

var sobreFilmes = [
	"Os Fabelmans",
	"Tudo em Todo Lugar ao Mesmo Tempo",
	"Avatar: O Caminho da Água",
	"Gato de Botas 2: O Último Pedido",
  "Pinóquio por Guillermo del Toro",
  "Top Gun: Maverick"
];

var linkFilmes = [
	"https://youtu.be/R4eRHRPs8Ss", //Os Fabelmans
	"https://youtu.be/kULcXm9V7aY", //Tudo em Todo Lugar ao Mesmo Tempo
	"https://youtu.be/x5pZI-DmtrE", //Avatar: O Caminho da Água
	"https://youtu.be/qtHcEfpYIow", //Gato de Botas 2: O Último Pedido
  "https://youtu.be/pSxooe9BHgI", //Pinóquio por Guillermo del Toro
  "https://youtu.be/7aOCYTflp8o" //Top Gun: Maverick
];

var imgFilmes = [
	"https://br.web.img3.acsta.net/pictures/22/12/13/18/42/2843229.jpg",
	"http://engenhariadocinema.com.br/wp-content/uploads/2022/06/legiao_NOex6cq9Kh1G.jpg",
	"https://image.tmdb.org/t/p/w1280//mbYQLLluS651W89jO7MOZcLSCUw.jpg",
	"http://www.cinesystem.com.br/filmes/images/poster/gato-de-botas-2-o-ultimo-pedido.jpg",
  "https://vigilianerd.com.br/wp-content/uploads/2022/07/20220727-pinoquio-guillermo-del-toro-3.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg"
];

for (var i = 0; i < linkMelhorFilme.length; i++) {
	ulMelhorFilme.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkMelhorFilme[i]}" target="_blank"><img src="${imgMelhorFilme[i]}" ></a><label>${sobreMelhorFilme[i]}</label></li>`;
}

for (i = 0; i < linkMelhorAnimação.length; i++) {
	ulMelhorAnimação.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkMelhorAnimação[i]}" target="_blank"><img src="${imgMelhorAnimação[i]}"></a><label>${sobreMelhorAnimação[i]}</label></li>`;
}

for (i = 0; i < linkFilmes.length; i++) {
	ulFilmes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkFilmes[i]}" target="_blank"><img src="${imgFilmes[i]}"></a><label>${sobreFilmes[i]}</label></li>`;
}

function adicionar() {
	var nome = document.getElementById("nome");
	var url = document.getElementById("url");
	var imagem = document.getElementById("imagem");
	var categoria = document.getElementById("opcoesCategoria").value;

	if (
		[nome.value, url.value, imagem.value].every(
			(elementValue) => elementValue !== ""
		)
	) {
		//Verifica se já existe a url/imagem
		if (
			linksAdicionados.indexOf(url.value) == -1 &&
			imgAdicionadas.indexOf(imagem.value) == -1
		) {
			var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
			switch (categoria) {
				case "ulMelhorFilme":
					ulMelhorFilme.innerHTML += elemento;
					break;
				case "ulMelhorAnimação":
					ulMelhorAnimação.innerHTML += elemento;
					break;
				case "ulFilmes":
					ulFilmes.innerHTML += elemento;
			}
			linksAdicionados.push(url.value);
			imgAdicionadas.push(imagem.value);
		} else {
			alert("Esta url/imagem já existe");
		}
	} else {
		alert("Preencha todos os campos!");
	}
	nome.value = "";
	url.value = "";
	imagem.value = "";
}

function deletar() {
	//Remove o canal/filme
	var target = event.currentTarget;
	var li = target.parentElement;
	var ul = li.parentElement;
	var url = li.children[1].href;
	var img = li.children[1].firstChild.src;
	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(img), 1);
	ul.removeChild(li);
}

function removerImagem() {
	//Remove o canal/filme se a imagem não for valida
	var ul = event.currentTarget.parentElement.parentElement.parentElement;
	var li = event.currentTarget.parentElement.parentElement;
	ul.removeChild(li);

	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(imagem), 1);
	alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "1";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "1";
	}
}

function ocultarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "0";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "0";
	}
}