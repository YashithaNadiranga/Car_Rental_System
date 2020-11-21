
$('#btncreate').click(()=>{
    let name = $('#inputName').val();
    let contact = $('#inputContactNo').val();
    let email = $('#inputEmail').val();
    let address = $('#inputAddress').val();
    let drivingLicenceNo = $('#inputDrivingLicence').val();
    let nic = $('#inputNIC').val();
    let userName = $('#inputUserName').val();
    let password = $('#inputPassword').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/carRentalSystem/api/v1/customer",
        data:JSON.stringify({
            "customerID":"",
            "name":name,
            "contact": contact,
            "email": email,
            "address":address,
            "drivingLicenceNo":drivingLicenceNo,
            "nicNo":nic,
            "userName":userName,
            "password":password
        }),
        dataType:'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if(res.message=='Success'){
                alert('Registration Successful');
            }
        },
        error: function (ob, textStatus, error) {
            console.log("error from : " + ob + " " + textStatus + " " + error);
            if(res.message!='Success'){
                alert('Registration UnSuccessful! Try again');
            }
        }
    });
});

$('#login').click(function () {
    let userName = $('#uname').val();
    let password = $('#password').val();

    if (userName == ""){
        alert('Enter User Name..!');
    }else if(password == ""){
        alert('Enter Password..!');
    }else{
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/carRentalSystem/api/v1/customer/'+userName+'/'+password,
            success:function (res) {
                if(res.message == 'customer'){
                    localStorage.setItem('loggedUser', res);
                    window.location.replace("AdminDashboard.html");
                }else if(res.message == 'driver'){
                    localStorage.setItem('loggedUser', res);
                    window.location.replace("driver.html");
                }
            },
            error:function (ob, textStatus, error) {
                console.log("error from : " + error);
            }
        });
    }

});