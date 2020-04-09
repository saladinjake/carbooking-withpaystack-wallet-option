function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " //+ strTime;
}

export default class Notification{
	constructor(){}
	attachEvents(){
	 if(localStorage.getItem('userToken')){

	 	let  user = JSON.parse(localStorage.getItem('userToken'))
	  if(document.getElementById('notice')){
			const urls = ["http://localhost:12000/api/v1/balance/"+ user.user.id, 
	                      "http://localhost:12000/api/v1/notification/"+ user.user.email
	                      ];
	    //console.log('Token:  ' + ApiGetBothRecord.getLoggedInUser().token);
	        const promises = urls.map(url =>
	          fetch(url, {
	            method: 'GET',
	            headers: {
	              Accept: 'application/json',
	              'Content-Type': 'application/json',
	              'x-access-token': user.token,
	            },
	          }).then(response => response.json()),
	        );
	        
	        let noticeBoard = document.getElementById("notice_board")
	        Promise.all(promises)
	        .then(datas => {


	            let userDetail = datas[0].data[0].accountBalance
	            let userNotifications = datas[1].data[0].tranx
	            console.log(userNotifications )

	            if(userNotifications.length>0){
                    userNotifications.map((item,i)=>{

	                let markup =`
	                


              

            
		<input type="radio" name="accordion" id="cb1-${i}" />
		<section class="box-accordion">
			<label class="box-accordion-title" for="cb1-${i}"> ${item.type} || Readme</label>
			<label class="box-accordion-close" for="acc-close"></label>
			<div class="box-accordion-content"> ${item.description}</div>
		</section>















              `;

	               $( "#addAcc" ).append( $( markup ) ) 
	            })

	            }

	           
	            

	            // let count = document.getElementById("notifyCount");
	            // count.innerHTML = userNotifications.length;
	        })

	}

      
	this.runeventHandler()

}

 }

 runeventHandler(){
 	// Listen for click on the document
    document.addEventListener('click', function (event) {
	  
	  //Bail if our clicked element doesn't have the class
	  if (!event.target.classList.contains('accordion-toggle')) return;
	  
	  // Get the target content
	  var content = document.querySelector(event.target.hash);
	  if (!content) return;
	  
	  // Prevent default link behavior
	  event.preventDefault();
	  
	  // If the content is already expanded, collapse it and quit
	  if (content.classList.contains('active')) {
	    content.classList.remove('active');
	    return;
	  }
	  
	  // Get all open accordion content, loop through it, and close it
	  var accordions = document.querySelectorAll('.accordion-content.active');
	  for (var i = 0; i < accordions.length; i++) {
	    accordions[i].classList.remove('active');
	  }
	  
	  // Toggle our content
	  content.classList.toggle('active');
	})
 }


}