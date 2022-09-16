window.onload = () => {
    const blocks = document.getElementById("block")
    const arr=["","","","","","","","",""]
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

    for (block of blocks) block.addEventListener('click', () => {


        const id = e.currentTarget.dataset.id
        if (option[id]!="" || !run){
            return;
        }
        else{
            option[id]=player
            block.textcontent=player
            if(player == "X"){
                player="O"
            }
            else{
                player="X"
            }
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
        }
   })
}