//keydown事件表示键盘被摁下
$(document).keydown(function(event){ //event是keydown事件自带的
    switch(event.keyCode){
        case 37://left
        /*
        moveLeft()方法
            *完成向左移动的逻辑
            *返回值是Boolean类型，判断是否可以向左移动
        */
            if(moveLeft()){
                getScore();
                //重新地随机地生成一个数字
                generateOneNumber();
                //判断这次移动之后游戏是否结束
                setTimeout("isgameover();",300);
            }
            break;
        case 38://up
            if(moveUp()){
                getScore();
                //重新地随机地生成一个数字
                generateOneNumber();
                //判断这次移动之后游戏是否结束
                setTimeout("isgameover();",300);
            }
            break;
        case 39://right
            if(moveRight()){
                getScore();
                //重新地随机地生成一个数字
                generateOneNumber();
                //判断这次移动之后游戏是否结束
                setTimeout("isgameover();",300);
            }
            break;
        case 40://down
            if(moveDown()){
                getScore();
                //重新地随机地生成一个数字
                generateOneNumber();
                //判断这次移动之后游戏是否结束
                setTimeout("isgameover();",300);
            }
            break;
    }
});

function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }
    isaddedArray();
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
                //向左移动的逻辑
                for(var k=0;k<j;k++){
                    if(board[i][k]==0&&noBlokHorizontalCol(i,k,j,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[i][k]==board[i][j]&&noBlokHorizontalCol(i,k,j,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,i,k);
                        if(added[i][k]!=0){
                            board[i][k+1]=board[i][j];
                            board[i][j]=0;
                        }
                        else{
                            board[i][k]+=board[i][j];
                            board[i][j]=0;
                            added[i][k]=1;
                            score+=board[i][k];
                        }
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveRight(){
    if(!canMoveRight(board)){
        return false;
    }
    isaddedArray();
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]!=0){
                //向左移动的逻辑
                for(var k=3;k>j;k--){
                    if(board[i][k]==0&&noBlokHorizontalCol(i,j,k,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[i][k]==board[i][j]&&noBlokHorizontalCol(i,j,k,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,i,k);
                        if(added[i][k]!=0){
                            board[i][k-1]=board[i][j];
                            board[i][j]=0;
                        }
                        else{                     
                            board[i][k]+=board[i][j];
                            board[i][j]=0;
                            added[i][k]=1;
                            score+=board[i][k];
                        }
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveDown(){
    if(!canMoveDown(board)){
        return false;
    }
    isaddedArray();
    for(var i=2;i>=0;i--){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //向左移动的逻辑
                for(var k=3;k>i;k--){
                    if(board[k][j]==0&&noBlokHorizontalRow(j,i,k,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[k][j]==board[i][j]&&noBlokHorizontalRow(j,i,k,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,k,j);
                        if(added[k][j]!=0){
                            board[k-1][j]=board[i][j];
                            board[i][j]=0;
                        }
                        else{                           
                            board[k][j]+=board[i][j];
                            board[i][j]=0;
                            added[k][j]=1;
                            score+=board[k][j];
                        }  
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function moveUp(){
    if(!canMoveUp(board)){
        return false;
    }
    isaddedArray();
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //向左移动的逻辑
                for(var k=0;k<i;k++){
                    if(board[k][j]==0&&noBlokHorizontalRow(j,k,i,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                    }
                    else if(board[k][j]==board[i][j]&&noBlokHorizontalRow(j,k,i,board)){
                        //才能向左移动
                        showMoveAnimation(i,j,k,j);
                        if(added[k][j]!=0){
                            board[k+1][j]=board[i][j];
                            board[i][j]=0;
                        }
                        else{
                            board[k][j]+=board[i][j];
                            board[i][j]=0;
                            added[k][j]=1;
                            score+=board[k][j];
                        }
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}