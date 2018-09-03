var suffix="Quizzes given: ";
var prefix="Quizzes given: ";
    $('.counter').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');  
    $({ countNum: $this.text()}).animate({
    countNum: countTo
    },
    {
    duration: 2500,
    easing:'linear',
    step: function() {
    $this.text(prefix + Math.floor(this.countNum));
    },
    complete: function() {
    $this.text(suffix + this.countNum);
    }
    });  
    });
