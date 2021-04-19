const player1 = "Verde"
const player2 = "Vermelho"
let playerTime = player1
let GameOver = false


Mostrador()
Jogadas()

function Mostrador(){

    if(GameOver){
     return
    }
   
    
    if(playerTime == player1 ){
        let player = document.querySelectorAll("div#vez img")[0]
        player.setAttribute("src","assets/eae.png")
    }else{
        let player = document.querySelectorAll("div#vez img")[0]
        player.setAttribute("src","assets/tst.png")
    }
}

function Jogadas() {

    let blocos = document.getElementsByClassName("bloco")
    for (let i = 0; i < blocos.length; i++) {
        blocos[i].addEventListener("click", function(){
            if (GameOver) {return}

            if (this.getElementsByTagName("img").length == 0) {

                if (playerTime == player1)
                {
                    this.innerHTML = "<img src='assets/eae.png'>"
                    this.setAttribute("jogada", player1)
                    playerTime = player2

                }else
                {
                    this.innerHTML = "<img src='assets/tst.png'>"
                    this.setAttribute("jogada", player2)
                    playerTime = player1
                }

                Mostrador()
                Vencedor()
            }
        })
    }
}

async function Vencedor() {

    const a1 = document.getElementById("a1").getAttribute("jogada")
    const a2 = document.getElementById("a2").getAttribute("jogada")
    const a3 = document.getElementById("a3").getAttribute("jogada")

    const b1 = document.getElementById("b1").getAttribute("jogada")
    const b2 = document.getElementById("b2").getAttribute("jogada")
    const b3 = document.getElementById("b3").getAttribute("jogada")

    const c1 = document.getElementById("c1").getAttribute("jogada")
    const c2 = document.getElementById("c2").getAttribute("jogada")
    const c3 = document.getElementById("c3").getAttribute("jogada")

    let vencedor = ""

    if ((a1==b1 && a1==c1 && a1!= "") || (a1==a2 && a1==a3 && a1!= "") || (a1==b2 && a1==c3 && a1!= "")) {
        vencedor = a1
    }else if
        ((b2==b1 && b2==b3 && b2!= "") || (b2==a2 && b2==c2 && b2!= "") || (b2==a3 && b2==c1 && b2!= "")) {
            vencedor = b2
        }else if
            ((c3==c2 && c3==c1 && c3!= "") || (c3==b3 && c3==a3 && c3!= "")) {
                vencedor = c3
            }
    
    if (vencedor != "") {
        GameOver = true

        await sleep(50)

        alert ("O vencedor foi o: '" + vencedor + "'")
        RestartGame()


    }else if(a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" ){

        await sleep(50)
        alert('O jogo deu velha!')
        RestartGame()
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))}

function RestartGame() {
    window.location.href= "index.html"
}