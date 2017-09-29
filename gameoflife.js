var rows = prompt("How many rows?");
var cols = prompt("How many columns?");

var tbl = document.getElementById('GameOfLife');

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