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
        document.getElementById('0'+(cols-1).toString()).classList.add('dead');
        document.getElementById('0'+(cols-1).toString()).classList.remove('living');
        document.getElementById('0'+(cols-1).toString()).classList.remove('empty');
}

function startup(){
        var cell;
        var count;
        if ((rows >1)&&(cols >1)) {
            for(i=0;i<rows;i++){
                for(j=0;j<cols;j++){
                    count = 0;
                    cell =  ( i.toString() + j.toString() );
                    if (cell == ('0.0')){
                        if (document.getElementById('01').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('10').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('11').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('00').classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById('00').classList.add('dead');
                                document.getElementById('00').classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById('00').classList.add('living');
                                document.getElementById('00').classList.remove('empty');
                                document.getElementById('00').classList.remove('dead');
                        }
                    }
                    if (cell == ('0.'+cols-1)){
                        if (document.getElementById('0'+(cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('1'+(cols-1).toString()).classList.contains('living')== true){
                        count++;
                        
                        }
                        if (document.getElementById('1'+(cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById('0'+(cols-1).toString()).classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById('0'+(cols-1).toString()).classList.add('dead');
                                document.getElementById('0'+(cols-1).toString()).classList.remove('living');
                                document.getElementById('0'+(cols-1).toString()).classList.remove('empty');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById('0'+(cols-1).toString()).classList.add('living');
                                document.getElementById('0'+(cols-1).toString()).classList.remove('empty');
                                document.getElementById('0'+(cols-1).toString()).classList.remove('dead');
                        }
                    }
                    if (cell == (rows-1 + '.0')){
                        if (document.getElementById((rows-1).toString() + '1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() + '1').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() + '0').classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() + '0').classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById((rows-1).toString() + '0').classList.add('dead');
                                document.getElementById((rows-1).toString() + '0').classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById((rows-1).toString() + '0').classList.add('living');
                                document.getElementById((rows-1).toString() + '0').classList.remove('empty');
                                document.getElementById((rows-1).toString() + '0').classList.remove('dead');
                        }
                    }
                    if (cell == ((rows-1).toString() +"."+ (cols-1))){
                        if (document.getElementById((rows-2).toString() + (cols-1).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() + (cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-2).toString() + (cols-2).toString()).classList.contains('living')== true){
                        count++;
                        }
                        if (document.getElementById((rows-1).toString() + (cols-1).toString()).classList.contains('living') == true ){
                            if (!((count == 2)||(count == 3))){
                                document.getElementById((rows-1).toString() + (cols-1).toString()).classList.add('dead');
                                document.getElementById((rows-1).toString() + (cols-1).toString()).classList.remove('living');
                            }
                        }
                        else if (count == 3) {
                                document.getElementById((rows-1).toString() + (cols-1).toString()).classList.add('living');
                                document.getElementById((rows-1).toString() + (cols-1).toString()).classList.remove('empty');
                                document.getElementById((rows-1).toString() + (cols-1).toString()).classList.remove('dead');
                        }
                    }
                }
                    
            }
        }
}