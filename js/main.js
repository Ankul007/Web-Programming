var rows = 3;
var check = new Array();
function edit(no)
{
 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="inline";
	
 var fname=document.getElementById("fname_row"+no);
 
 var roll=document.getElementById("roll_row"+no);
 var stream=document.getElementById("stream_row"+no);
 var passout=document.getElementById("pass_row"+no);

 var fname_data=fname.innerHTML;
 
 var roll_data=roll.innerHTML;
 var stream_data=stream.innerHTML;
 var passout_data=passout.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 
 roll.innerHTML="<input type='text' id='roll_text"+no+"' value='"+roll_data+"'>";
 stream.innerHTML="<input type='text' id='stream_text"+no+"' value='"+stream_data+"'>";
 passout.innerHTML="<input type='text' id='passout_text"+no+"' value='"+passout_data+"'>";
}

function save(no)
{
 var fname_val=document.getElementById("fname_text"+no).value;
 
 var roll_val=document.getElementById("roll_text"+no).value;
 var stream_val=document.getElementById("stream_text"+no).value;
 var passout_val=document.getElementById("passout_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 
 document.getElementById("roll_row"+no).innerHTML=roll_val;
 document.getElementById("stream_row"+no).innerHTML=stream_val;
 document.getElementById("pass_row"+no).innerHTML=passout_val;

 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="inline";
}

function del(no)
{
    document.getElementById("row"+no+"").outerHTML="";
	check[no] = 0;
}

<!-- Add row function
$(document).ready(function(){ 
    $("#ad .btn").click(function(){
        $(this).button('adding')/*.delay(20)*/.queue(function add_row(){
           
 var new_fname=document.getElementById("firstname").value;
 
 var new_roll=document.getElementById("tel").value;
 var new_stream=document.getElementById("stream").value;
 var new_pass=document.getElementById("tell").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length);
 rows++;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='fname_row"+table_len+"'>"+new_fname+"</td><td id='roll_row"+table_len+"'>"+new_roll+"</td><td id='stream_row"+table_len+"'>"+new_stream+"</td><td id='pass_row"+table_len+"'>"+new_pass+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='del("+table_len+")'> <input type = 'checkbox' id = '"+rows+"' onclick = 'checkOn(rows)'></td></tr>";
check[rows] = 0;
 document.getElementById("new_fname").value="";

 document.getElementById("new_roll").value="";
  document.getElementById("new_stream").value="";
   document.getElementById("new_pass").value="";
 });        
 });
});

//i = 0;
check[0] = 0;
check[1] = 0;
check[2] = 0;
check[3] = 0;
function checkOn(row)
{
	var checkboxs = document.getElementById(row);
	if(checkboxs.checked){
	check[row] = 1;
	//document.getElementById("se").innerHTML = check[row] + " row" + row;
	}
	else
	{
		check[row] = 0;
		//document.getElementById("se").innerHTML = check[row] + " row" + row;
	}
}

function delmul()
{
	var j = 0;
	for(j = 0; j <= rows; j++)
	{
			if(check[j] == 1)
			{ del(j);}
	}
}
<!--$(document).ready(function(){ 
    <!--$("#mul .btn").click(function(){
     <!--   $(this).button('deleting').delay(20).queue(function multi(){
			
			
		<!--};
	<!--};
<!--};