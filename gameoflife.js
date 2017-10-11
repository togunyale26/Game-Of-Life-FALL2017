var rows = prompt("How many rows?");
var cols = prompt("How many columns?");

var tbl = document.getElementById('GameOfLife');

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

function start(){
    current_run = setInterval(startup, 1000);
}

function stop(){
    clearInterval(current_run);
}

function changeImage(x)
{
    var location = x;

    if (document.getElementById(location).classList.contains('empty') == true )
    {
        document.getElementById(location).classList.add('living');
        document.getElementById(location).classList.remove('empty');
    }

    else if (document.getElementById(location).classList.contains('living') == true )
    {
        document.getElementById(location).classList.add('dead');
        document.getElementById(location).classList.remove('living');
    }
    else if (document.getElementById(location).classList.contains('dead') == true )
    {
        document.getElementById(location).classList.add('empty');
        document.getElementById(location).classList.remove('dead');
    }

}

function makeAlive(cellid){
    document.getElementById(cellid).classList.add('living');
    document.getElementById(cellid).classList.remove('empty');
    document.getElementById(cellid).classList.remove('dead');
}

function makeDead(cellid){
    document.getElementById(cellid).classList.add('dead');
    document.getElementById(cellid).classList.remove('living');
    document.getElementById(cellid).classList.remove('empty');
}

function Create2DArray(rows) {
    var arr = [];

    for (var i=0;i<rows;i++) {
        arr[i] = [];
    }

    return arr;
}

function reset(){
    for(i=0;i<rows;i++){
        for(j=0;j<cols;j++){
            cell=(i.toString() + "." + j.toString());
            document.getElementById(cell).classList.add('empty');
            document.getElementById(cell).classList.remove('dead');
            document.getElementById(cell).classList.remove('living');
        }
    }
}

function start(){
    current_run = setInterval(startup, 1000);
}

function stop(){
    clearInterval(current_run);
}



function startup(){
    var cell;
    var count;
    var arr = Create2DArray(rows);
    var ir;
    var ic;
    var cellString;

    if ((rows >1)&&(cols >1)) {
        for(i=0;i<rows;i++){
            for(j=0;j<cols;j++){
                count = 0;
                ir = i;
                ic = j;
                cell =  ( i.toString() +"."+ j.toString() );


                for( it = ir - 1; it <= ir + 1; it++){
                    for( ru = ic - 1; ru <= ic + 1; ru++){
                        if( it == ir && ru == ic){
                            // skip
                        }
                        if( it < 0 || ru < 0 || it > rows -1 || ru > cols -1){

                        }
                        else {

                            cellString = (it.toString() + '.' + ru.toString());
                            // prompt(cellString);


                            if (document.getElementById(cellString).classList.contains('living')== true){
                                count++;
                            }

                        }
                    }

                }

                if (document.getElementById(cell).classList.contains('living') == true ){
                    if (!((count == 2)||(count == 3))){
                        arr[i][j] = 1;
                        //1 is dead
                    }
                }
                else if (count == 3) {
                    arr[i][j] = 2;
                }


            }
        }

    }

    for(i=0;i<rows;i++){
        for(j=0;j<cols;j++){
            if (arr[i][j] == 1){
                makeDead(i+"."+j);

            }
            if (arr[i][j] == 2){
                makeAlive(i+"."+j);
            }
        }
    }
}
