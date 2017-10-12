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
function incTwentyThree(){
    var x =0;
    while (x<23){
        startup();
        x++;
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

    var arr = Create2DArray(rows);

function startup(){
    var cell;
    var count;
    var cellString;

    if ((rows >1)&&(cols >1)) {
        for(i=0;i<rows;i++){
            for(j=0;j<cols;j++){
                count = 0;
                cell =  ( i.toString() +"."+ j.toString() );

                if (document.getElementById((i-1)+"."+(j-1).toString()) !== null){
                    if (document.getElementById((i-1)+"."+(j-1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById((i-1)+"."+(j).toString()) !== null){
                    if (document.getElementById((i-1)+"."+(j).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById((i-1)+"."+(j+1).toString()) !== null){
                    if (document.getElementById((i-1)+"."+(j+1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById((i)+"."+(j-1).toString()) !== null){
                    if (document.getElementById((i)+"."+(j-1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }

                if (document.getElementById((i)+"."+(j+1).toString()) !== null){
                    if (document.getElementById((i)+"."+(j+1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById((i+1)+"."+(j-1).toString()) !== null){
                    if (document.getElementById((i+1)+"."+(j-1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById((i+1)+"."+(j).toString()) !== null){
                    if (document.getElementById((i+1)+"."+(j).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if ((document.getElementById((i+1)+"."+(j+1).toString())) !== null){
                    if (document.getElementById((i+1)+"."+(j+1).toString()).classList.contains('living')== true){
                        count++;
                    }

                }
                if (document.getElementById(cell).classList.contains('living') == true ){
                    if (!((count == 2)||(count == 3))){
                        arr[i][j] = 1;
                        //1 is dead
                    }
                }
                if (count == 3) {
                    arr[i][j] = 2;
                }
            }
            }

        }
    update();
    }

 
 function update(){
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