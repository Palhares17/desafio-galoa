export default function initTopico() {
	const botaoTopico = document.querySelector("[data-button]");
	const discussoes = document.querySelector(".discussoes-conteudo");
	const pergunta = document.querySelector("[data-form]");
	const botaoEnviar = document.querySelector("button[type='submit']");

	botaoTopico.addEventListener("click", () => {
		discussoes.style.display = "none";
		pergunta.classList.toggle("mostrar");
		botaoTopico.style.display = "none";
	});

	// botao de enviar
	const containerAssunto = document.querySelector(".assunto-container");
	const topicoConcluido = document.querySelector(".topico-concluido");
	const botaoConcluido = document.querySelector("[data-btnConcluido]");

	botaoConcluido.addEventListener("click", () => {
		discussoes.style.display = "none";
		pergunta.classList.toggle("mostrar");
		botaoTopico.style.display = "none";
		topicoConcluido.classList.toggle("mostrar");
	});

	console.log(containerAssunto.children[0]);
	botaoEnviar.addEventListener("click", (event) => {
		event.preventDefault();
		containerAssunto.innerHTML += `
        <div class="assunto">
        <div class="pessoa-assunto">
            <h3 class="quick color-title">Assunto da pergunta aparece aqui</h3>
            <p class="quick ">Carlos Henrique Santos</p>
        </div>
        <div class="quick conteudo-assunto">
            <p class="quick color-p2">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>

        <div class="comentarios">
            <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
            <a href="#"><i class="fa-solid fa-heart"></i></a>
            <span class="quick">1 like</span>
            <span class="quick">1 resposta</span>
        </div>
        <div class="permitir efeito-vidro">
            <i class="fa-solid fa-check-double"></i>
            <p class="quick">Aguardando feedback dos autores</p>
            <span class="quick color-title">Editar tópico</span>
        </div>
        `;

		pergunta.classList.toggle("mostrar");
		topicoConcluido.classList.toggle("mostrar");
	});
}
