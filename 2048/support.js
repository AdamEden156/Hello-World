function getPosTop(i,j){
    return 20+i*120;
}

function getPosLeft(i,j){
    return 20+j*120;
}

function getNumberBackgroundColor(number){
    switch(number){
        case 2:var color= "#eee4da";break;
        case 4:var color= "#ede0c";break;
        case 8:var color= "#f2b179";break;
        case 16:var color= "#f59563";break;
        case 32:var color= "#f67c5f";break;
        case 64:var color= "#f65e3b";break;
        case 128:var color= "#edcf72";break;
        case 256:var color= "#edcc61";break;
        case 512:var color= "#9c0";break;
        case 1024:var color= "#33b5e5";break;
        case 2048:var color= "#09c";break;
        case 4096:var color= "#a6c";break;
        case 8192:var color= "#93c";break;
    }
    return color;
}

function getNumberColor(number){
    if(number<=4){
        return "#776e65";
    }
    return "white";
}

function canMoveLeft(board){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
                //如果当前数字格左边第一个为0或与当前数字格相等，才可以移动
                if(board[i][j-1]==0||board[i][j-1]==board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board){
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]!=0){
                //如果当前数字格右边第一个为0或与当前数字格相等，才可以移动
                if(board[i][j+1]==0||board[i][j+1]==board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board){
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //如果当前数字格上边第一个为0或与当前数字格相等，才可以移动
                if(board[i-1][j]==0||board[i-1][j]==board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board){
    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //如果当前数字格下边第一个为0或与当前数字格相等，才可以移动
                if(board[i+1][j]==0||board[i+1][j]==board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlokHorizontalCol(row,col1,col2,board){
    for(var i=col1+1;i<col2;i++){
        if(board[row][i]!=0){
            return false;
        }
    }
    return true;
}

function noBlokHorizontalRow(col,row1,row2,board){
    for(var i=row1+1;i<row2;i++){
        if(board[i][col]!=0){
            return false;
        }
    }
    return true;
}

function nospace(board){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                return false;
            }
        }
    }
    return true;
}

function nomove(board){
    if(canMoveDown(board)||canMoveLeft(board)||canMoveRight(board)||canMoveUp(board)){
        return false;
    }
    return true;
}

function isgameover(){
    if(nospace(board)&&nomove(board)){
        gameover();
    }
}

function gameover(){
    $("#gameover").css('display','block');
}

function getScore(){
    document.getElementById("score").innerHTML=score;
}

function isaddedArray(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            added[i][j]=0;
        }
    }
}