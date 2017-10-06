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
    document.getElementById('0.'+(cols-1).toString()).classList.add('dead');
    document.getElementById('0.'+(cols-1).toString()).classList.remove('living');
    document.getElementById('0.'+(cols-1).toString()).classList.remove('empty');
}

function checkCells(){

    for( var i = 0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            var i = i;
            var j = j;
            var cellString;
            var count = 0;

            // row, columns
            // 0, 0
            if( i == 0 && (j == 0)){

                // 1,0
                cellString = ((i).toString() + '.' + (j + 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // 1,1
                cellString = ((i + 1).toString() + '.' + (j + 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // 0,1
                cellString = ((i).toString() + '.' + (j + 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

            }
            // 0, last val
            if(i == 0 && (j == cols - 1)){

                // 0, lastval -1
                cellString = ((i).toString() + '.' + (j - 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // 1, lastval -1
                cellString = ((i + 1).toString() + '.' + (j - 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // 1, lastval
                cellString = ((i + 1).toString() + '.' + (j).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }
            }
            // lastval, 0
            if(i == rows - 1 && (j == 0)){

                // lastval -1, 0
                cellString = ((i - 1).toString() + '.' + (j).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // lastval - 1, 1
                cellString = ((i - 1).toString() + '.' + (j + 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                //lastval, 1
                cellString = ((i).toString() + '.' + (j + 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }
            }
            // lastval, lastval
            if(i == rows - 1 && (j == cols - 1)){

                // lastval - 1 , lastval - 1
                cellString = ((i - 1).toString() + '.' + (j - 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // lastval -1, lastval
                cellString = ((i - 1).toString() + '.' + (j).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }

                // lastval, lastval -1
                cellString = ((i).toString() + '.' + (j - 1).toString());

                if(document.getElementById(cellString).classList.contains('living')== true){
                    count+=1;
                }
            }

            // Left hand Edges
            if((i > 0 && i < rows - 1 ) && (j == 0)){

                for( var it = i; it <= i + 1; it++){
                    for( var ru = j - 1; ru <= j + 1; ru++){
                        if( it == i && ru == j){
                            // skip
                        }
                        else {
                            cellString = ((it).toString() + '.' + (ru).toString());
                            if(document.getElementById(cellString).classList.contains('living')== true){
                                count+=1;
                            }
                        }

                    }
                }
            }
            // Right Hand Edges
            if ((i > 0 && i < rows - 1 ) && (j == cols - 1)){

                for( var it = i - 1; it <= i; it++){
                    for( var ru = j - 1; ru <= j + 1; ru++){
                        if( it == i && ru == j){
                            // skip
                        }
                        else {
                            cellString = ((it).toString() + '.' + (ru).toString());
                            if(document.getElementById(cellString).classList.contains('living')== true){
                                count+=1;
                            }
                        }

                    }
                }
            }
            // Top Edges
            if((j > 0 && j < cols - 1 ) && (i == 0)){
                for( var it = j; it <= j + 1; it++){
                    for( var ru = i - 1; ru <= i + 1; ru++){
                        if( ru == i && it == j){
                            // skip
                        }
                        else {
                            cellString = ((ru).toString() + '.' + (it).toString());
                            if(document.getElementById(cellString).classList.contains('living')== true){
                                count+=1;
                            }
                        }

                    }
                }
            }
            if((j> 0 && j < cols - 1 ) && (j == rows - 1)){

                for( var it = j - 1; it <= j; it++){
                    for( var ru = i - 1; ru <= i + 1; ru++){
                        if( ru == i && it == j){
                            // skip
                        }
                        else {
                            cellString = ((ru).toString() + '.' + (it).toString());
                            if(document.getElementById(cellString).classList.contains('living')== true){
                                count+=1;
                            }
                        }

                    }
                }
            }
            else{
                for( var it = i - 1; it <= i + 1; it++){
                    for( var ru = j - 1; ru <= j + 1; ru++){
                        if( it == i && ru == j){
                            // skip
                        }
                        else {
                            cellString = ((it).toString() + '.' + (ru).toString());
                            if(document.getElementById(cellString).classList.contains('living')== true){
                                count+=1;
                            }
                        }
                    }

                }

            }
            var cellNum = (i.toString() + '.' + j.toString());

            if(document.getElementById(cellNum).classList.contains('living')== true){
                if(!(count == 2 || count == 3)){
                    document.getElementById(cellNum).classList.add('dead');
                    document.getElementById(cellNum).classList.remove('living');
                }
                else{
                    if(count == 3){
                        document.getElementById(cellNum).classList.add('living');
                        document.getElementById(cellNum).classList.remove('empty');
                        document.getElementById(cellNum).classList.remove('dead');
                    }
                }
            }
        }
    }
}


