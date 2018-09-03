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
    $this.text(suffix+Math.floor(this.countNum)+ prefix );
    },
    complete: function() {
    $this.text(suffix+this.countNum);
    }
    });  
    });
