$(document).ready(function(){
    $(".login").hide();
    $(".register_li").addClass("active");
    $(".login_li").click(function(){
        $(this).addClass("active")
        $(".register_li").removeClass("active");
        $(".login").show();
        $(".register").hide();
    })
    $(".register_li").click(function(){
        $(this).addClass("active")
        $(".login_li").removeClass("active");
        $(".login").hide();
        $(".register").show();
    })
});

$(document).ready(function() {
    $('#BTNN').submit(function(event) {
      event.preventDefault();
  
      var email = $('#email-input').val();
      var username = $('#username-input').val();
      var password = $('#password-input').val();
  
      var userData = {
        email: email,
        username: username,
        password: password
      };
  
      $.ajax({
        url: 'http://kketelauri-001-site1.gtempurl.com/api/user/adduser',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
      });
    });
  
    $('#Login').submit(function(event) {
      event.preventDefault();
  
      var email = $('#email-login-input').val();
      var password = $('#password-login-input').val();
  
      var loginData = {
        email: email,
        password: password
      };
  
      $.ajax({
        url: 'http://kketelauri-001-site1.gtempurl.com/api/user/login',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(loginData),
        contentType: 'application/json',
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
      });
    });
  });
  
  