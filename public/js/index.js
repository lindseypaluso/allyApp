$(document).ready(function(){
    $('#referer').hide();
    $.ajax({
      url: "/users/authenticate",
      type: 'GET',
      success: function(res) {
          if(typeof res !== "undefined" && res !== "" && res){
            $('#loggedin').html(res.username);
            $('.login-link').attr("href", "/users/logout");
            $('#help_userid').val(res.id).hide();
            $('#help_username').val(res.username).hide();

            $('.help-login-protected').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Add to Ally Blog</button>');
          } 
          console.log(res)
      }
    });

  
  
});