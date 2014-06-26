$(document).ready(function(){




/* modal box */

$('.openModal').click(function() {

    var id = $(this).attr('modalId');
    $('#'+id).modalBox({
        overlay:true,
    });
    //reload scrollbar
    $(".scrollbar").each(function() {
            var customScrollbar=$(this).find(".mCSB_scrollTools");
            customScrollbar.css({"opacity":0});
            $(this).mCustomScrollbar("update");
            customScrollbar.animate({opacity:1},"slow");                  
    });

        
});


$('.closeModal').click(function() {

    $.modalBox.close();


});


//prevent scrolling *******************************''

$('.modalbox').on('DOMMouseScroll mousewheel', function(ev) {
    var $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.height(),
        delta = (ev.type == 'DOMMouseScroll' ?
            ev.originalEvent.detail * -40 :
            ev.originalEvent.wheelDelta),
        up = delta > 0;

    var prevent = function() {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
    }

    if (!up && -delta > scrollHeight - height - scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        // Scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
    }
});


//PISIPILT HOVER function**********************'
$('.pisipilt').click(function() {
    var pildicontainer = $(this).closest('.modalbox').find('.suurpiltContainer');
    var suurpilt = $(this).closest('.modalbox').find('.suurPilt');
    var pildiaadress = $(this).attr('pilt');

    pildicontainer.prepend("<div class='suurPilt' style='background-image: url("+pildiaadress+");'></div>");

    suurpilt.fadeOut(400, function() {
        suurpilt.remove(); 
    });

    
    
});

// smooth scroll for gallery

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#gallery').animate({
          scrollLeft: target.offset().left
        }, 1000);
        return false;
      }
    }
  });
});


// smooth scroll for other

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



});//ready fn

//scrollbar

 $(window).load(function(){
    $(".scrollbar").each(function() {

        $(this).mCustomScrollbar({
            autoHideScrollbar:true,
         });                   
    });


});


