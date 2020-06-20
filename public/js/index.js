$(document).ready(function(){
    $('#referer').hide();
    $('#fromid').hide();
    $('#toid').hide();
    $.ajax({
      url: "/users/authenticate",
      type: 'GET',
      success: function(res) {
          if(typeof res !== "undefined" && res !== "" && res){
            $('#loggedin').html(res.username);
            $('.login-link').attr("href", "/messages/all/"+res.id);
            $('#help_userid').val(res.id).hide();
            $('#help_username').val(res.username).hide();
            $('#fromid').val(res.id);
            $('.help-login-protected').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Submit Request for Help</button>');
          } 
      }
    });

  
  $("#login").validate({
    rules: {
      username : {
        required: true,
        minlength: 5
      },
      passHash: {
        required: true,
        minlength: 8
      }
    }
  });

  $("#register").validate({
    rules: {
      username : {
        required: true,
        minlength: 5
      },
      passHash: {
        required: true,
        minlength: 8
      },
      passHash2 : {
        minlength : 8,
        equalTo : "#passHash"
      }
    }
  });

});

//========================Scrolling Navbar=====================
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("navlinks").style.top = "0";
    document.getElementById("navlinks").style.height = "100px";
    document.getElementById("navlinks").style.backgroundColor = "rgb(0, 176, 240)";
  } else {
    document.getElementById("navlinks").style.backgroundColor = "transparent";
    document.getElementById("logo").style.display = "block";
  }
}
