function Gameboard(array){
    this.array = array;
}

const gameBoard = () => {
    let array = [10];
    return () => {
        console.log(array);
    };
};

const board = gameBoard();
