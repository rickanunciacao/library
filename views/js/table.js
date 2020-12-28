
// AJAX request to the endpoint "/get/html" and renders to the screen appending the html table into the div "#results" and triggers another function select_row().

function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};



// this is a function that allows us to click any row and highlight it

function select_row() 
{
	$("#bookList tbody tr[id]").click(function () //allows us to click any row
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected"); //highlights the item
		var section = $(this).prevAll("tr").children("td[colspan='8']").length - 1; //grabs the section of the selected row
		var book = $(this).attr("id") - 1; //grabs the book by the id attribute
		delete_row(section, book);
	})
};

function delete_row(sec, book)
{
	$("#delete").click(function () // the deletion is only triggered on the click of the delete button.
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				book: book
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});