function superbowlWin(gamesArray){
    let win = gamesArray.find(game => {
        return game.result === "W"
    })
    if (win){
        return win.year
    }
    else{
        return win
    }
}
