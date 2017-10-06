var rows = prompt("How many rows?");
var cols = prompt("How many columns?");

var init = 0;
var VirtualArr;
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

function startup(){
    checkCells();
    /**var cell;
        var count;
        if ((rows >1)&&(cols >1)) {
            for(i=0;i<rows;i++){
                for(j=0;j<cols;j++){
                    count = 0;
                    cell =  ( i.toString() +"."+ j.toString() );
                    if (cell == ('0.0')){
                        if (document.getElementById('0.1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('1.0').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('1.1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('0.0').classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById('0.0').classList.add('dead');
                                document.getElementById('0.0').classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById('0.0').classList.add('living');
                                document.getElementById('0.0').classList.remove('empty');
                                document.getElementById('0.0').classList.remove('dead');
                        }
                    }
                    if (cell == ('0.'+cols-1)){
                        if (document.getElementById('0.'+(cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('1.'+(cols-1).toString()).classList.contains('living')== true){
                        count++;
                        
                        }
                        if (document.getElementById('1.'+(cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('0.'+(cols-1).toString()).classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById('0.'+(cols-1).toString()).classList.add('dead');
                                document.getElementById('0.'+(cols-1).toString()).classList.remove('living');
                                document.getElementById('0.'+(cols-1).toString()).classList.remove('empty');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById('0.'+(cols-1).toString()).classList.add('living');
                                document.getElementById('0.'+(cols-1).toString()).classList.remove('empty');
                                document.getElementById('0.'+(cols-1).toString()).classList.remove('dead');
                        }
                    }
                    if (cell == (rows-1 + '.0')){
                        if (document.getElementById((rows-1).toString() + '.1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() + '.1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() + '.0').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() + '.0').classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById((rows-1).toString() + '.0').classList.add('dead');
                                document.getElementById((rows-1).toString() + '.0').classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById((rows-1).toString() + '.0').classList.add('living');
                                document.getElementById((rows-1).toString() + '.0').classList.remove('empty');
                                document.getElementById((rows-1).toString() + '.0').classList.remove('dead');
                        }
                    }
                    if (cell == ((rows-1).toString() +"."+ (cols-1))){
                        if (document.getElementById((rows-2).toString() +"."+ (cols-1).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() +"."+ (cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() +"."+ (cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.add('dead');
                                document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.add('living');
                                document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.remove('empty');
                                document.getElementById((rows-1).toString() +"."+ (cols-1).toString()).classList.remove('dead');
                        }
                    }
                }

            }
        } **/
}

function createArray(){

    VirtualArr = new Array(rows);
    for( var i = 0; i < rows; i++){
        VirtualArr[i] = new Array(cols);
    }

    for( var i = 0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            VirtualArr[i][j] = 1;
        }
    }

}

function updateArrays(){
    for( var i = 0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            var updateCell = (i.toString() + '.' + j.toString());
            var currentCellR = i;
            var currentCellC = j;

            if(document.getElementById(updateCell).classList.contains('living')== true){
                VirtualArr[currentCellR][currentCellC] = 1;
            }
            else if(document.getElementById(updateCell).classList.contains('dead')== true){
                VirtualArr[currentCellR][currentCellC] = 2;
            }
            else if(document.getElementById(updateCell).classList.contains('empty')== true){
                VirtualArr[currentCellR][currentCellC] = 0;
            }

        }
    }
}

function checkCells(){
    if(init == 0){
        init = 1;
        createArray();
    }

    updateArrays();
    for( var i = 0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            var currentCellR = i;
            var currentCellC = j;

            var count = 0;

            // row, columns
            // 0, 0
            if( currentCellR == 0 && (currentCellC == 0)){
                // 1,0
                if(VirtualArr[currentCellR + 1][currentCellC] == 1){
                    count+=1;
                }
                // 1,1
                if(VirtualArr[currentCellR + 1][currentCellC + 1] == 1){
                    count+=1;
                }
                // 0,1
                if(VirtualArr[currentCellR ][currentCellC + 1] == 1){
                    count+=1;
                }

            }
            // 0, last val
            else if(currentCellR == 0 && (currentCellC == cols - 1)){
                // 0, lastval -1
                if(VirtualArr[currentCellR][currentCellC - 1] == 1){
                    count+=1;
                }
                // 1, lastval -1
                if(VirtualArr[currentCellR + 1][currentCellC - 1] == 1){
                    count+=1;
                }
                // 1, lastval
                if(VirtualArr[currentCellR + 1 ][currentCellC ] == 1){
                    count+=1;
                }
            }
            // lastval, 0
            else if(currentCellR == rows - 1 && (currentCellC == 0)){

                // lastval -1, 0
                if(VirtualArr[currentCellR - 1][currentCellC] == 1){
                    count+=1;
                }
                // lastval - 1, 1
                if(VirtualArr[currentCellR - 1][currentCellC + 1] == 1){
                    count+=1;
                }
                //lastval, 1
                if(VirtualArr[currentCellR ][currentCellC + 1] == 1){
                    count+=1;
                }
            }
            // lastval, lastval
            else if(currentCellR == rows - 1 && (currentCellC == cols - 1)){
                // lastval - 1 , lastval - 1
                if(VirtualArr[currentCellR - 1][currentCellC - 1] == 1){
                    count+=1;
                }
                // lastval -1, lastval
                if(VirtualArr[currentCellR - 1][currentCellC] == 1){
                    count+=1;
                }
                // lastval, lastval -1
                if(VirtualArr[currentCellR ][currentCellC - 1] == 1){
                    count+=1;
                }
            }

            // Left hand Edges
            else if((currentCellR > 0 && currentCellR < rows - 1 ) && (currentCellC == 0)){

                for( var it = currentCellR; it <= currentCellR + 1; it++){
                    for( var ru = currentCellC - 1; ru <= currentCellC + 1; ru++){
                        if( it == currentCellR && ru == currentCellC){
                            // skip
                        }
                        else {
                            if(VirtualArr[it][ru] == 1){
                                count+=1;
                            }
                        }

                    }
                }
            }
            // Right Hand Edges
            else if ((currentCellR > 0 && currentCellR < rows - 1 ) && (currentCellC == cols - 1)){

                for( var it = currentCellR - 1; it <= currentCellR; it++){
                    for( var ru = currentCellC - 1; ru <= currentCellC + 1; ru++){
                        if( it == currentCellR && ru == currentCellC){
                            // skip
                        }
                        else {
                            if(VirtualArr[it][ru] == 1){
                                count+=1;
                            }
                        }

                    }
                }
            }
            // Top Edges
            else if((currentCellC > 0 && currentCellC < cols - 1 ) && (currentCellR == 0)){
                for( var it = currentCellC; it <= currentCellC + 1; it++){
                    for( var ru = currentCellR - 1; ru <= currentCellR + 1; ru++){
                        if( ru == currentCellR && it == currentCellC){
                            // skip
                        }
                        else {
                            if(VirtualArr[ru][it] == 1){
                                count+=1;
                            }
                        }

                    }
                }
            }
            else if((currentCellC> 0 && currentCellC < cols - 1 ) && (currentCellC == rows - 1)){

                for( var it = currentCellC - 1; it <= currentCellC; it++){
                    for( var ru = currentCellR - 1; ru <= currentCellR + 1; ru++){
                        if( ru == currentCellR && it == currentCellC){
                            // skip
                        }
                        else {
                            if(VirtualArr[ru][it] == 1){
                                count+=1;
                            }
                        }

                    }
                }
            }
            else{
                for( var it = currentCellR - 1; it <= currentCellR + 1; it++){
                    for( var ru = currentCellC - 1; ru <= currentCellC + 1; ru++){
                        if( it == currentCellR && ru == currentCellC){
                            // skip
                        }
                        else {
                            if(VirtualArr[it][ru] == 1){
                                count+=1;
                            }
                        }
                    }

                }

            }
            var cellNum = (currentCellR.toString() + '.' + currentCellC.toString());
            if(VirtualArr[currentCellR][currentCellC] == 1){
                if(!(count == 2 || count == 3)){
                    VirtualArr[currentCellR][currentCellC] = 2;
                    document.getElementById(cellNum).classList.add('dead');
                    document.getElementById(cellNum).classList.remove('living');
                }
                else{
                    if(count == 3){
                        VirtualArr[currentCellR][currentCellC] = 1;
                        document.getElementById(cellNum).classList.add('living');
                        document.getElementById(cellNum).classList.remove('empty');
                        document.getElementById(cellNum).classList.remove('dead');
                    }
                }
            }
        }
    }
}


