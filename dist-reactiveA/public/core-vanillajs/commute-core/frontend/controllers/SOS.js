import SOSModel from '../models/SOSModel';
import $ from 'jquery';
const SUCCESS_URL= 'http://localhost:4001/sos-history.html';
const POST_URL = "http://localhost:12000/api/v1/users/:id/sos-request"
export default class SOS{
	constructor(){}


	seeAllSOSNotifications(){

	}

	static index(){
		//let sos_msg =SOSModel.readSOS();
		

	}

	
	attachEvents(){
	$("#show-map").hide();
	 $(document).ready(function() {
		// get location button functionality
		$("#get-location-btn").click(function(event){
			event.preventDefault();
			$("#hide-on-click").hide();
			$("#show-map").show();
			$("#location-lat-long").val("Finding location. Please wait...");
			// check if browser supports the geolocation api
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(SOS.success);			// if geolocation supported, call function
			} else {
				$("#location-lat-long").val('Your browser doesn\'t support the geolocation api.');
			}
		
		});
	});

	}


	// function to get lat/long and plot on a google map
	static success(position) {
			var latitude		= position.coords.latitude;				// set latitude variable
			var longitude		= position.coords.longitude;			// set longitude variable
			
			var mapcanvas		= document.createElement('div');		// create div to hold map
			mapcanvas.id = 'map';										// give this div an id of 'map'
			mapcanvas.style.height = '400px';							// set map height
			mapcanvas.style.width = '100%';								// set map width
			
			document.querySelector('#map-container').appendChild(mapcanvas);	// place new div within the 'map-container' div
			
			var coords = new google.maps.LatLng(latitude,longitude);	// set lat/long object for new map
  
			var options = {												// set options for map
				zoom: 15,
				center: coords,
				mapTypeControl: false,
				navigationControlOptions: {
					style: google.maps.NavigationControlStyle.SMALL
				},
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			var map = new google.maps.Map(document.getElementById("map"), options);	// create new map using settings above

			var marker = new google.maps.Marker({						// place a marker at our lat/long
				position:	coords,
				map:		map
			});
			
			var latLongResponse	= 'Latitude: ' + latitude + ' / Longitude: ' + longitude;	// build string containing lat/long
			SOS.getAddress(latitude,longitude);							// geocode the lat/long into an address

			//$("#location-lat-long").val(latLongResponse);									// write lat/long string to input field
			
		}
		
		
		
static launch_toast(address) {
    var x = document.getElementById("toast")
    x.className = "show";
    document.getElementById('desc').innerHTML= "Your address"  + ' has been sent';
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
		

	// function to process address data
	static processAddress(address) {
			//$("#location-address").val(address);									// write address to field
			var spokenResponse = "S O S response at " + address;						// build string to speak
			//SOS.speakText(spokenResponse);	
            const sosRequest = {
            	address
            };

            SOS.launch_toast(address);



 //            var notify = '<div id="app"><div class="notification">notification</div>' +
 // '<div class="pop"><div class="cl"><i class="fas fa-times"></i></div><div class="message">' + 'Your address at ' +  address ' has been sent.</div>' +
 //  '</div></div>';

				// fetch(POST_URL, {
			 //      method: 'POST',
			 //      headers: {
			 //        'Accept': 'application/json',
			 //        'Content-Type': 'application/json',
			 //        'Access-Control-Allow-Origin': '*',
			 //      },
			 //      mode: 'cors',
			 //      body: JSON.stringify(sosRequest),
			 //    })
		  //     .then(response => response.json())
		  //     .then(data => {
		  //       if (data.status === 422) {
		  //         MessageBoard.displayMsg( data.error);
		  //       } else if (data.status === 200) {
		         
		  //         MessageBoard.displayMsg(data.message);
		          
		  //       } else {
		  //         MessageBoard.displayMsg(data.error);
		  //         Router.redirect('login.html');
		  //       }
		  //     })
		  //     .catch(error => {
		  //       throw error;
		  //     });											// speak the address
	}
		

	// function to geocode a lat/long
	static getAddress(myLatitude,myLongitude) {
			
			var geocoder	= new google.maps.Geocoder();							// create a geocoder object
			var location	= new google.maps.LatLng(myLatitude, myLongitude);		// turn coordinates into an object
 			
			geocoder.geocode({'latLng': location}, function (results, status) {
				if(status == google.maps.GeocoderStatus.OK) {						// if geocode success
					SOS.processAddress(results[0].formatted_address);

					let user ={};
			        user.address = results[0].formatted_address;
			        user.location = myLatitude + " ," + myLongitude;
			       return SOSModel.saveSOSRequest(user)					// if address found, pass to processing function
				} else {
				  alert("Geocode failure: " + status);								// alert any other error(s)
				  return false;
				}
			});
		}


	// function to speak a response
	static speakText(response) {
			
			// setup synthesis
			var msg = new SpeechSynthesisUtterance();
			var voices = window.speechSynthesis.getVoices();
			msg.voice = voices[2];					// Note: some voices don't support altering params
			msg.voiceURI = 'native';
			msg.volume = 1;							// 0 to 1
			msg.rate = 1;							// 0.1 to 10
			msg.pitch = 2;							// 0 to 2
			msg.text = response;
			msg.lang = 'en-US';
			
			speechSynthesis.speak(msg);
		}
}