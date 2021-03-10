// Storage 

// UI

class UI {

    static addClassToSquare(square_num, classType){
        const square = document.querySelector(`.board .square:nth-child(${square_num})`);
        square.classList.add(classType);
        return square
    }

    static addClassX(square_num){
        UI.addClassToSquare(square_num, 'X')
    }

    static addClassO(square_num){
        UI.addClassToSquare(square_num, 'O')
    }
}

// Game

class Game{

    constructor(){

        this.xTurn = false;

        const squares = document.querySelectorAll('.square')
        document.querySelectorAll('.square').forEach((square) => {

            if(this.playableSquare(square)){
                square.addEventListener('click', this.clickedOnSquare,{once:true})
            }

        });
        
    }

    // happend after you click a square
    clickedOnSquare(e){
        game.xTurn = !game.xTurn

        if(game.xTurn){
            UI.addClassX(e.target.id)
        }else{
            UI.addClassO(e.target.id)
        };
    }


    // helper method
    playableSquare(square){
        return square.classList[1] === undefined;
    }
    

}

game = new Game



// Events



//add event to


// puts the X on square

