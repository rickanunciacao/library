
// AJAX request to the endpoint "/get/html" and renders to the screen appending the html table into the div "#results" and triggers another function select_row().

function draw_cat_table()
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
	$.getJSONuncached("/get/categories")
};



// this is a function that allows us to click any row and highlight it

function select_row() 
{
	$("#categoryList tbody tr[id]").click(function () //allows us to click any row
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected"); //highlights the item
		var cat = $(this).attr("id") - 1; //grabs the category by the id attribute
		delete_row(cat);
	})
};

function delete_row(cat)
{
	$("#delete").click(function () // the deletion is only triggered on the click of the delete button.
	{
		$.ajax(
		{
			url: "/post/deletecat",
			type: "POST",
			data:
			{
				cat: cat
			},
			cache: false,
			success: setTimeout(draw_cat_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_cat_table();
});