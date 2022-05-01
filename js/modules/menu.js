export default function initMenuMobile() {
	const botaoMenu = document.querySelectorAll("#btn-mobile");
	const fora = document.querySelector("main");
	const aside = document.querySelector("aside");

	botaoMenu.forEach( item => {
		item.addEventListener("click", event => {
			aside.classList.toggle("menu-active");
		});
	});

	fora.addEventListener("click", event => {
		if(!event.target !== aside) {
			aside.classList.remove("menu-active");
			console.log("")
		}
	})
}
 