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


function startup(){
        var cell;
        var count;
        var arr = Create2DArray(rows);
        
        if ((rows >1)&&(cols >1)) {
            for(i=0;i<rows;i++){
                for(j=0;j<cols;j++){
                    count = 0;
                    arr[i][j] = 0;
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