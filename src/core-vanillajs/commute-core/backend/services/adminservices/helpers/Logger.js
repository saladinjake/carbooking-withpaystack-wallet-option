import $ from 'jquery';

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " "  //+ strTime;
}
export default class Logger{
	constructor(){}


	

	static sendLogInfo(adminEntity,userEntity, ModuleEntity, messageType, status, MethodType='ACTION TRIGGER'){
        let logMessage=``;
        if(userEntity!=''){
			if(MethodType=='GET'){
	           logMessage =`${adminEntity.user.username}/${adminEntity.user.email} operation on the user , ${userEntity} regarding the module action 

	           on ${ModuleEntity} on ${formatDate(new Date())} has a status of ${status} labeled ${messageType} while trying to fetch the resource.`
			}else if(MethodType=='POST'){

				logMessage =`${adminEntity.user.username}/${adminEntity.user.email} operation on the user , ${userEntity} regarding the module action 

	           on ${ModuleEntity} on ${formatDate(new Date())} has a status of ${status} labeled ${messageType} while trying to create the resource.`

			}else if(MethodType=='PUT'){

				logMessage =`${adminEntity.user.username}/${adminEntity.user.email} operation on the user , ${userEntity} regarding the module action 

	           on ${ModuleEntity} on ${formatDate(new Date())} has a status of ${status} labeled ${messageType} while trying to update the resource.`

			}else if(MethodType=='DELETE'){
				logMessage =`${adminEntity.user.username}/${adminEntity.user.email} operation on the user , ${userEntity} regarding the module action 

	           on ${ModuleEntity} on ${formatDate(new Date())} has a status of ${status} labeled ${messageType} while trying to delete the resource.`

			}

        }else{

        	logMessage =`${adminEntity.user.username}/${adminEntity.user.email} operation regarding the module action 

	           on ${ModuleEntity} on ${formatDate(new Date())} has a status of ${status} labeled ${messageType} while trying to create the resource.`
 

        }


       let prePostData ={
       	   date:formatDate(new Date()),
       	   admin: adminEntity.user.username,
       	   avatar: "https://commute-bucket.s3.amazonaws.com/"+ adminEntity.user.profile,
       	   user: userEntity,
       	   module_name: ModuleEntity,
       	   status,
       	   message_type:  messageType,
       	   logMessage,
       }


       let linkOfApi ="http://localhost:12000/api/v1/log-audit";
          const user =JSON.parse(localStorage.getItem("userToken"));
        fetch(linkOfApi, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status == 201) {
                  
                  
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Failed operation. Audit Trailing unsuccessful.', 'error', 15, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));







	}
}