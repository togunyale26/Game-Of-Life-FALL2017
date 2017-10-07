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
                arr[i][j] = 0;
                ir = i;
                ic = j;
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
                            arr[i][j] = 1;
                            //1 is dead
                        }
                    }
                    else if (count == 3) {
                        arr[i][j] = 2;
                    }
                }
                if (cell == ('0.'+(cols-1))){
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
                            arr[i][j] = 1;
                        }
                    }
                    else if (count == 3) {
                        arr[i][j] = 2
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
                            arr[i][j] = 1;
                        }
                    }
                    else if (count == 3) {
                        arr[i][j] = 2
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
                            arr[i][j] = 1;
                        }
                    }
                    else if (count == 3) {
                        arr[i][j] = 2
                    }
                }

                // Left Edge
                if ((i > 0 && i < rows - 1 ) && (j == 0)){
                    for(it = ir; it <= ir + 1; it++){
                        for(ru = ic - 1; ru <= ic + 1; ru++ ){

                            if( it == ir && ru == ic){
                                // skip
                            }
                            else {

                                cellString = (it.toString() + '.' + ru.toString());

                            }
                        }
                    }
                }

                // Right Edge
                if ((i > 0 && i < rows - 1 ) && (j == cols - 1)){
                    for( it = ir - 1; it <= ir; it++){
                        for( ru = ic - 1; ru <= ic + 1; ru++){
                            if( it == ir && ru == ic){
                                // skip
                            }
                            else {

                                cellString = (it.toString() + '.' + ru.toString());

                            }

                        }
                    }

                }

                // Top Edge
                if ((j > 0 && j < cols - 1 ) && (i == 0)){
                    for( it = ic; it <= ic + 1; it++){
                        for( ru = ir - 1; ru <= ir + 1; ru++){
                            if( ru == ir && it == ic){
                                // skip
                            }
                            else {

                                cellString = (it.toString() + '.' + ru.toString());

                            }

                        }
                    }

                }

                // Bottom Edge
                if ((j> 0 && j < cols - 1 ) && (j == rows - 1)){
                    for( it = ic - 1; it <= ic; it++){
                        for( ru = ir - 1; ru <= ir + 1; ru++){
                            if( ru == ir && it == ic){
                                // skip
                            }
                            else {

                                cellString = (it.toString() + '.' + ru.toString());

                            }

                        }
                    }
                }

                //Everything else
                else{

                    for( it = ir - 1; it <= ir + 1; it++){
                        for( ru = ic - 1; ru <= ic + 1; ru++){
                            if( it == ir && ru == ic){
                                // skip
                            }
                            else {

                                cellString = (it.toString() + '.' + ru.toString());

                            }
                        }

                    }


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
