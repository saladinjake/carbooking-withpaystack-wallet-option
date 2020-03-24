  var linkUrl='http://localhost:12000/api/v1/auth/resetpassword';
  var msgg = document.getElementById('msg');
  triggerSubmit();
  function triggerSubmit(){
    var reset = document.getElementById('reset');
    reset.addEventListener('click', function(e){
      e.preventDefault();
      launchSubmit();
    })
  }


  function launchSubmit(){
    let password = document.getElementById('password').value;
    let resetForm = document.getElementById('reset-form');
    let confirmPassword = document.getElementById('confirm-password').value;
    const successAnimationStart = document.getElementById("success-mark")
    if (!password) {
       msgg.innerHTML='Password is required';

       setTimeout(function (){ msgg.innerHTML='';},6000)
    }

    console.log('working code')
    

    const credentials = {
      password,
      confirmPassword
    };

    fetch(linkUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
         resetForm.style.display='none';
            setTimeout(function () {
               successAnimationStart.style.display="block"
               
            }, 10);
        } else {
          
          msgg.innerHTML='SOME ERROR OCCURED'
          
        }
      })
      .catch(error => {
        throw error;
      });

  }