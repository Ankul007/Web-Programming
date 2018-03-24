$("input[id='add']").on('click',(event)=>{
		
		let name = $("input[id='name']");
		let roll = $("input[id='roll']");
		let year = $("input[id='year']");
		let stream = $("input[id='stream']");

		if(name.val() !=''){
			$('#tbl tbody').append(`<tr align="center">
				<td> <input type="checkbox" ></td>
				<td class="data" contenteditable='false'> ${name.val()}</td>
				<td contenteditable='false' class="data"> ${roll.val()}</td>
				<td class="data" contenteditable='false'>${year.val()}</td>
				<td contenteditable='false' class="data"> ${stream.val()}</td>
				<td> <input type="button" class="btn btn-warning edit" value="edit">
					 <input type="button" class="btn btn-success done" value="done"></td>
				</tr>`);
			name.val('');
			roll.val('');
			year.val('');
			stream.val('');
	    }
	}
);
$("input[id='del']").on('click',(event)=>
	{
		$('td input:checked').closest('tr').remove();
	}
);
$('#tbl').on('click', '.edit', (event)=>{
        $('td').attr('contenteditable', 'true');
        console.log("edit");
    });
$('#tbl').on('click', '.done', (event)=>{
        $('td').prop('contenteditable', 'false');
        console.log("done");
    });
$("#form").hide();

$("input[id='show']").click( (event)=>{
        $("#form").toggle();
    });