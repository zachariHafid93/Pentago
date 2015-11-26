
var Pentago = function() {
    var marbleNumber = 0;
    var currentPlayer = 1;
    var board;


    var initialisation=function(){

        board = new Array(6);
        for(i=0; i<6; i++){
            board[i]=new Array(6);
            for(j=0;j<6;j++){
                board[i][j]= -1;
            }
        }
    };


    this.getMarbleNumber = function () {
        return marbleNumber;
    };

    this.getPlayerColor = function () {
        return currentPlayer;
    };

    this.addMarble = function ()
    {
        marbleNumber = marbleNumber+1;

    };

    this.putMarble = function (color, coord) {
        var line = coord.charCodeAt(1) - 49;
        var column = coord.charCodeAt(0) - 65;
        board[line][column]= color;
        this.addMarble();
    };



    this.getMarbleColor = function (coord) {
        var line = coord.charCodeAt(1)-49;
        var column = coord.charCodeAt(0)-65;
        return board[line][column];
    };



    this.rotate = function(){

        var temp = new Array(3);
        for(i=0; i<3; i++){
            temp[i]=new Array(3);
            for(j=0;j<3;j++){
                 temp[i][j] = board[i][j];
            }
        }

        for (var i=0;i<3;i++){
            for (var j=0;j<3;j++) {
                board[j][2 - i] = temp[i][j];
            }

        }

    };

    this.newPlayerColor = function(nwPlayerColor)
    {
       currentPlayer = nwPlayerColor;
    };

    this.rotateBack = function(){

        var temp1 = new Array(3);
        for(i=0; i<3; i++){
            temp1[i]=new Array(3);
            for(j=0;j<3;j++){
                temp1[i][j] = board[i][j];
            }
        }

        for (var i=0;i<3;i++){
            for (var j=0;j<3;j++) {
                board[2-j][i] = temp1[i][j];
            }

        }

    };

    initialisation();

};
