window.onload = () => {
    let blocks = document.querySelectorAll('.block')
    let arr=["","","","","","","","",""]
    const status=document.getElementById("status")
    run=false
    let player="X"
    let win = false
    const Conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
     ];
    
    

     const play =(e) => {
        const id = e.currenttarget.getAttribute("cellindex")
        if (arr[id]!= "" || !run){
            debugger
            return;
        }
        debugger
        arr[id]=player
        block.textcontent=player
        changeplayer()
        checkwinner()
    }
    const changeplayer = () => {
        debugger
        if(player == "X"){
            player="O"
            status.innerText="O turn"
        }
        else{
            player="X"
            status.innerText="X turn"
        }
    }
    const checkwinner= () => {
        for (i=0 ; i< Conditions.length ; i++){
            const condition=conditions[i]
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
            run=false
        }
        else if (!arr.includes("")){
            status.innerText=`draw!`
            run=false
        }
        else {
            changeplayer()
        }
    }
    for (block of blocks) block.addEventListener("click",play);
}      
            
            
//             else{
//                 if(player == "X"){
//                     player="O"
//                 }
//                 else{
//                     player="X"
//                 }

//             }
//         }
//    }
// }