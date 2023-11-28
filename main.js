const txt = document.querySelector(".txt")
const nuli = document.querySelector(".nuli")
const kamateli = document.querySelector(".kamateli")
const ld = document.querySelector(".ld")



txt.innerHTML = getData()


kamateli.addEventListener('click', () => {
    getData();
})


async function getData(){
    ld.classList.add("kiki");

    let res = await fetch("https://api.adviceslip.com/advice")
    let data = await res.json()
    ld.classList.remove("kiki");
    txt.innerHTML = data.slip.advice
    nuli.innerHTML = data.slip.id
}