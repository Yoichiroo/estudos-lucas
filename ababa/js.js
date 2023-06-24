let sectionSim = document.getElementById("sectionSim")
sectionSim.style.display = 'none'

let botao = document.getElementById("naobotao")
botao.style.backgroundColor = 'red'

let simbotao = document.getElementById("simbotao")
simbotao.addEventListener("click", () => {
    sectionSim.style.display = 'block'
})

botao.addEventListener("mouseenter", () => {
    let aleatorioX = Math.random() * 1339
    let aleatorioY = Math.random() * 899
    
    botao.style.position = 'absolute'
    botao.style.left = aleatorioX + "px"
    botao.style.top = aleatorioY + "px"
})