let beforeBtn = document.querySelector(".content__before-btn");
let afterBtn = document.querySelector(".content__after-btn");
let img = document.querySelector(".content__hero-img");
let afterBlock = document.querySelector(".main__content-after-block");

let linksUrl = ["https://images.wallpapersden.com/image/download/3d-abstract-colorful-surface-line_a2lqZWmUmZqaraWkpJRqZmdlrWdtbWU.jpg", "https://images.wallpapersden.com/image/download/warframe-hd-2022_bWxrbGWUmZqaraWkpJRqZmdlrWdtbWU.jpg", "https://images.wallpapersden.com/image/download/denji-chainsaw-man-cool-8k_bWxsaWWUmZqaraWkpJRsa21lrWloZ2U.jpg", "https://images.wallpapersden.com/image/download/2020-audi-rs6-gto-style_bGtnaWeUmZqaraWkpJRqZmdlrWdtbWU.jpg"];
let links = ["img/wallpaper-1.jpg", "img/wallpaper-2.jpg", "img/wallpaper-3.jpg", "img/wallpaper-4.jpg"];

let i = 0;

function addIndexer() {
    let index = document.createElement("div");
    index.classList.add("main__content-after-block-indexer");
    afterBlock.appendChild(index);
}

for (let num = 0; num < links.length; num++) {
    addIndexer()
}

let afterBlockIndex = Array.from(document.querySelectorAll(".main__content-after-block-indexer"));

let idNum = 0;

afterBlockIndex.map((indexer) => {
    indexer.id = idNum;
    idNum++
})

function toggleIndexer() {
    afterBlockIndex.map((indexer) => {
        indexer.classList.remove("main__content-after-block-indexer-active")
        if (indexer.id == i) {
            indexer.classList.add("main__content-after-block-indexer-active")
        }
    })
}

function targetIndexer() {
    afterBlock.addEventListener("click", (event) => {
        let targetIndex = event.target;
        afterBlockIndex.map((indexer) => {
            indexer.classList.remove("main__content-after-block-indexer-active")
            if (targetIndex == indexer) {
                indexer.classList.add("main__content-after-block-indexer-active")
                i = indexer.id
                img.src = links[i];
            }
        })
    })
}

function toggleLink() {
    targetIndexer()
    toggleIndexer()
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
