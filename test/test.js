MyTest= TestCase(" MyTest ");

MyTest.prototype.testHistory1=function (){
    var pentago = new Pentago();

    assertTrue (pentago.getMarbleNumber()==0);
};

MyTest.prototype.testHistory2=function (){
    var pentago = new Pentago();

    assertTrue (pentago.getPlayerColor()==1);
};

MyTest.prototype.testHistory3=function (){
    var pentago = new Pentago();
    
    pentago.putMarble(1, "A1");
    assertTrue (pentago.getMarbleColor("A1")==1);
};

MyTest.prototype.testHistory4=function (){
    var pentago = new Pentago();

    pentago.addMarble();
    assertTrue (pentago.getMarbleNumber()== 1);
};
MyTest.prototype.testHistory5=function(){
    var pentago = new Pentago();
    pentago.putMarble(1, "A1");
    pentago.rotate();
    assertTrue (pentago.getMarbleColor("C1")==1);

};

MyTest.prototype.testHistory6=function (){

    var pentago = new Pentago();
    pentago.newPlayerColor(0);
    assertTrue (pentago.getPlayerColor()==0);
};

MyTest.prototype.testHistory7=function(){
    var pentago = new Pentago();

    pentago.putMarble(1, "A1");
    pentago.rotate();
    pentago.putMarble(0, "A1");
    assertTrue (pentago.getMarbleColor("A1")==0);
    assertTrue (pentago.getMarbleNumber()==2);

};

MyTest.prototype.testHistory8=function (){

    var pentago = new Pentago();
    pentago.putMarble(1, "A1");
    pentago.rotate();
    pentago.putMarble(0, "A1");
    pentago.rotateBack();
    assertTrue (pentago.getMarbleColor("A1")==1);
    assertTrue (pentago.getMarbleColor("A3")==0);
};

    // Nous n'avons pas réussi à faire l'History 9 !

 // Test du nombre de billes Seulement !

MyTest.prototype.testHistory10=function (){

    var pentago = new Pentago();
    pentago.putMarble(1, "A1");
    pentago.rotate();
    pentago.putMarble(0, "A1");
    pentago.rotateBack();
    pentago.putMarble(1,"B1");
    pentago.rotate();
    pentago.putMarble(0,"A2");
    pentago.rotateBack();
    pentago.addMarble(1,"C1");
    pentago.rotate();
    pentago.addMarble(0,"A3");
    pentago.rotateBack();
    pentago.addMarble(1,"D1");
    pentago.rotateBack();
    pentago.addMarble(0,"F3");
    pentago.rotate();

    assertTrue (pentago.getMarbleNumber()==8);

};