$( document ).ready(function() {
    console.log( "ready!" );

    $("#btnAdd").click(function(){
    	console.log( "got to adding button's function!" );
    	$("#tblData").append(
    		"<tr>"+
    		"<td><input type='text'/></td>"+
    		"<td><input type='text'/></td>"+
    		"<td><input type='text'/></td>"+
    		"<td><input type='text'/></td>"+
            "<td><input type='text'/></td>"+
    		"<td><input type='button' class='btn btn-info' id='btnSave' value='Save'></td>"+
    		"<td><p></p></td>"+
    		"</tr>");
    });
});

$(document).on('click','#btnSave', function()
{
    var par = $(this).parent().parent(); //tr
    var tdName = par.children("td:nth-child(1)");
    var tdDIN = par.children("td:nth-child(2)");
    var tdForm = par.children("td:nth-child(3)");
    var tdDescription = par.children("td:nth-child(4)");
    var tdInstruction = par.children("td:nth-child(5)");
    var tdEditButton = par.children("td:nth-child(6)");
    var tdBlank = par.children("td:nth-child(7)");

    tdName.html(tdName.children("input[type=text]").val());
    tdDIN.html(tdDIN.children("input[type=text]").val());
    tdForm.html(tdForm.children("input[type=text]").val());
    tdDescription.html(tdDescription.children("input[type=text]").val());
    tdInstruction.html(tdInstruction.children("input[type=text]").val());
    tdEditButton.html("<input type='button' class='btn btn-warning' id='btnEdit' value='Edit'>");
    tdBlank.html("<p></p>");
});

$(document).on('click','#btnEdit', function()
{
	console.log("Edit patient information mode.");
	var par = $(this).parent().parent(); //tr
    var tdName = par.children("td:nth-child(1)");
    var tdDIN = par.children("td:nth-child(2)");
    var tdForm = par.children("td:nth-child(3)");
    var tdDescription = par.children("td:nth-child(4)");
    var tdInstruction = par.children("td:nth-child(5)");
    var tdSaveButton = par.children("td:nth-child(6)");
    var tdDeleteButton = par.children("td:nth-child(7)");

	tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
	tdDIN.html("<input type='text' id='txtDIN' value='"+tdDIN.html()+"'/>");
	tdForm.html("<input type='text' id='txtForm' value='"+tdForm.html()+"'/>");
    tdDescription.html("<input type='text' id='txtDescription' value='"+tdDescription.html()+"'/>");
    tdInstruction.html("<input type='text' id='txtInstruction' value='"+tdInstruction.html()+"'/>");
	tdSaveButton.html("<input type='button' class='btn btn-success' id='btnSave' value='Save'>");
	tdDeleteButton.html("<input type='button' class='btn btn-danger' id='btnDelete' value='Delete'>");
});

$(document).on('click','#btnDelete', function()
{
	var par = $(this).parent().parent(); //tr
	par.remove();
});