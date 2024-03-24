let beforeBtn = document.querySelector(".content__before-btn");
let afterBtn = document.querySelector(".content__after-btn");
let img = document.querySelector(".content__hero-img");

let links = ["https://images.wallpapersden.com/image/download/3d-abstract-colorful-surface-line_a2lqZWmUmZqaraWkpJRqZmdlrWdtbWU.jpg", "https://images.wallpapersden.com/image/download/warframe-hd-2022_bWxrbGWUmZqaraWkpJRqZmdlrWdtbWU.jpg", "https://images.wallpapersden.com/image/download/denji-chainsaw-man-cool-8k_bWxsaWWUmZqaraWkpJRsa21lrWloZ2U.jpg", "https://images.wallpapersden.com/image/download/2020-audi-rs6-gto-style_bGtnaWeUmZqaraWkpJRqZmdlrWdtbWU.jpg"];

let i = 0;


function toggleLink() {
	console.log(i);
	img.src = links[i];
}

toggleLink()

beforeBtn.addEventListener("click", () => {
	i--
	if (i < 0) {
		i = links.length - 1
	}
	toggleLink()
});

afterBtn.addEventListener("click", () => {
	i++
	if (i > links.length - 1) {
		i = 0
	}
	toggleLink()
});
