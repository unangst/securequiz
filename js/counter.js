var suffix="";
     var prefix="Quizzes given: ";
    $('.counter').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');  
    $({ countNum: $this.text()}).animate({
    countNum: countTo
    },
    {
    duration: 5000,
    easing:'linear',
    step: function() {
    $this.text( prefix + suffix+Math.floor(this.countNum));
    },
    complete: function() {
    $this.text(suffix+this.countNum);
    }
    });  
    });
