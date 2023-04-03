$(document).ready(function() {
	// Function to load a random pokemon
	function loadRandomPokemon() {
		// Make an AJAX request to the JSON file
		$.ajax({
			url: 'pokemon.json',
			dataType: 'json',
			success: function(data) {
				// Get a random pokemon from the data
				var pokemon = data.pokemon[Math.floor(Math.random() * data.pokemon.length)];
				// Create a new row for the table
				var row = $('<tr>');
				// Add the ID, Name, Image, Type, Height, and Weight as columns
				row.append($('<td>').text(pokemon.id));
				row.append($('<td>').text(pokemon.name));
				row.append($('<td>').html($('<img>').attr('src', pokemon.img)));
				row.append($('<td>').text(pokemon.type.join(', ')));
				row.append($('<td>').text(pokemon.height));
				row.append($('<td>').text(pokemon.weight));
				// Add the row to the table body
				$('#pokemon-table tbody').empty().append(row);
			},
			error: function() {
				alert('Error loading data');
			}
		});
	}
	
	// Bind the loadRandomPokemon function to the button click event
	$('#load-pokemon-btn').on('click', function() {
		loadRandomPokemon();
	});
	
});
//Create JQuery PlugIn
$.fn.colorChanger = function () {
	this.css("background-color", "red");
};

$(function () {
	$("#Change-Color").click(function (){
		$("#Data").colorChanger()
		console.log("Im changing");
	});

});
