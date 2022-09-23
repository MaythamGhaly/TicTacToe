window.onload = () => {
    const blocks = document.querySelectorAll('.block')
    const status=document.getElementById("status")
    const restart=document.getElementById("reset")
    let arr=["","","","","","","","",""]
    const Conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
     ]
    run=true
    let player="X"
    let win = false
    status.innerHTML=`${player} turn`
    

     const play =(e) => {
        console.log(e.currentTarget.getAttribute("name"))
        const Block_index=e.currentTarget.getAttribute("name")
        if (arr[Block_index]!= "" || !run){
            return;
        }
        arr[Block_index]=player
        e.currentTarget.textContent=player
        checkwinner()
    }
    const changeplayer = () => {
        if(player == "X"){
            player="O"
            status.innerText= `${player} turn.`
        }
        else{
            player="X"
            status.innerText=`${player} turn.`
        }
    }
    const checkwinner= () => {
        for (i=0 ; i< Conditions.length ; i++){
            const condition=Conditions[i]
            const A = arr[condition[0]]
            const B = arr[condition[1]]
            const C = arr[condition[2]]
            if (A == "" || B == "" || C == ""){
                continue;
            }
            if( A == B && B == C){
                win=true
                break;
            }
        }
        if (win){
            status.innerText=`${player} win!`
            status.style.color="green"
            run=false
        }
        else if (!arr.includes("")){
            status.innerText=`draw!`
            status.style.color="red"
            run=false
        }
        else {
            changeplayer()
        }
    }
    const Restart = () =>{
        location.reload()
    }

    for (block of blocks) block.addEventListener("click",play);
    restart.addEventListener("click",Restart)
}      