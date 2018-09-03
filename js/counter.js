var suffix="+";
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum + suffix ));
    },
    complete: function() {
      $this.text(this.countNum + suffix );
      //alert('finished');
    }

  });  
  
  

});
