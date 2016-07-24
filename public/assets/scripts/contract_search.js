$(document).ready(main);

function searchContracts() {
	var input = {
			country: $('#country').val(),
			province: $('#province').val(),
			city: $('#city').val(),
			address: $('#address').val()
		};
	$.ajax({
		type: 'post',
		url: '/search/searchContracts',
		"Content-Type": 'application/json',
		dataType: 'json',
		data: input,

		success: function(json) {
			var contracts = json;
			console.log(contracts);
			$('<h2>', {text:"Search Results"}).appendTo('article#results');

			for (var i = 0; i < contracts.length; i++) {
				var article = $('<div>', {class:'contract'}).appendTo('article#results');

				$('<img>', {
					src: contracts[i].image
				}).appendTo(article);

				var car = $('<p>', {
					class: 'car_info'
				}).appendTo(article);

				$('<span>', {
					text: 'Manufacturer: ' + contracts[i].make
				}).appendTo(car);

				$('<span>', {
					text: 'Model: ' + contracts[i].model
				}).appendTo(car);

				$('<span>', {
					text: 'Year: ' + contracts[i].year
				}).appendTo(car);

				$('<span>', {
					text: 'License Plate #: ' + contracts[i].license_plate
				}).appendTo(car);

				var detail = $('<div>', {
					class: 'detail_info'
				}).appendTo(article);

				$('<h4>', {text: 'Exterior'}).appendTo(detail);

				var list = $('<ul>').appendTo(detail);

				if (contracts[i].hand_wash) {
					$('<li>', {text: 'Hand Wash'}).appendTo(list);
				}

				if (contracts[i].clean_tires) {
					$('<li>', {text: 'Clean Tires'}).appendTo(list);
				}

				if (contracts[i].hand_wax) {
					$('<li>', {text: 'Hand Wax'}).appendTo(list);
				}

				$('<h4>', {text: 'Interior'}).appendTo(detail);

				list = $('<ul>').appendTo(detail);

				if (contracts[i].full_vacuuming) {
					$('<li>', {text: 'Full Interior Vacuuming'}).appendTo(list);
				}

				if (contracts[i].floor_mats) {
					$('<li>', {text: 'Floor Mats'}).appendTo(list);
				}

				if (contracts[i].centre_console) {
					$('<li>', {text: 'Centre Console Cleaning'}).appendTo(list);
				}

				if (contracts[i].button_cleaning) {
					$('<li>', {text: 'Button Cleaning'}).appendTo(list);
				}

				if (contracts[i].vinyl_and_plastic) {
					$('<li>', {text: 'Vinyl and Plastic Restoration'}).appendTo(list);
				}

				var local = $('<p>', {
					class: 'car_local'
				}).appendTo(article);

				$('<span>', {
					text: 'City: ' + contracts[i].city
				}).appendTo(local);

				$('<span>', {
					text: 'Address: ' + contracts[i].address
				}).appendTo(local);

				$('<span>', {
					text: 'Postal/Zip Code: ' + contracts[i].postal_code
				}).appendTo(local);

				$('<span>', {
					text: 'Distance: ' + contracts[i].distance
				}).appendTo(local);

				$('<button>', {class: 'add_contract', text:'Take Contract'}).appendTo(article);
			}
			
		}
	});
}

function main() {
	$('#submit_local').on('click', function() {
		searchContracts();
	});
}