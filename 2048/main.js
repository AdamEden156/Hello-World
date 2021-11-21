$(function(){
    newgame();
})

function newgame(){
    //初始化棋盘
    init();
    //随机生成两个格子数字
    generateOneNumber();
    generateOneNumber();
}

var board=new Array();
var added=new Array();
var score=0;

function init(){
    score=0;
    document.getElementById("score").innerHTML=score;
    $("#gameover").css('display','none');
    //i表示4x4的格子的行
    for(var i=0;i<4;i++){
        board[i]=new Array();
        added[i]=new Array();
        //j表示4x4格子的列
        for(var j=0;j<4;j++){
            //将每个格子的值初始化为0
            board[i][j]=0;
            added[i][j]=0;
            //通过双重遍历获取每个格子的元素
            var gridCell=$("#grid-cell-"+i+"-"+j);
            //通过getPosTop()方法获取每个格子距离顶端的距离
            gridCell.css("top",getPosTop(i,j));
            //通过getPosLeft()方法获取每个格子距离左端的距离
            gridCell.css("left",getPosLeft(i,j));
        }
    }

    updateBoardView();
}

function updateBoardView(){
    //首先清空之前的数字格式布局
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            //向棋盘格上增加数字格
            $("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
            var numberCell=$("#number-cell-"+i+"-"+j);
            //如果棋盘格的值不为0的话，设置数字格为高宽都为0
            if(board[i][j]==0){
                numberCell.css("width","0px");
                numberCell.css("height","0px");
                numberCell.css("top",getPosTop(i,j));
                numberCell.css("left",getPosLeft(i,j));
            }
            //如果棋盘格的值不为0的话，设置数字格为高宽都为100并设置背景色和前景色及数字值
            else{
                numberCell.css("width","100px");
                numberCell.css("height","100px");
                numberCell.css("top",getPosTop(i,j));
                numberCell.css("left",getPosLeft(i,j));
                numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
                numberCell.css("color",getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
        }
    }
}

function generateOneNumber(){  
    //0.
    if(nospace(board)){
        return false;
    }

    //1.生成一个随机的位置
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
    while(true){
        //如果当前格子值为零，满足条件
        if(board[randx][randy]==0){
            break;
        }
        //否则重新生成一个位置
        var randx=parseInt(Math.floor(Math.random()*4));
        var randy=parseInt(Math.floor(Math.random()*4));
    }

    //2.生成一个随机数字(2048游戏规则，新生成的只可以是2或4)
    var randNumber=Math.random()<0.5?2:4;

    //3.在随机的位置显示随机的数字
    board[randx][randy]=randNumber;
    ShowNumberWithAnimation(randx,randy,randNumber);

    return true;

}