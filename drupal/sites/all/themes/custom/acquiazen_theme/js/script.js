(function ($, Drupal, window, document, undefined) {

  /**
   * Example A
   */
  Drupal.behaviors.ExampleA = {
    attach: function (context, settings) {

      console.log('Example A loaded');

    }
  };

  /**
   * Hey Carl, we are using this for JS training ~
   */
  Drupal.behaviors.ExampleB = {
    attach: function (context, settings) {
      if (context === document) {

        console.log('Example B is loaded');


        // using variable
        var frenchfry = $('div.apples img');
        // grab attr
        var frenchfryAlt = frenchfry.attr('alt');
        console.log(frenchfryAlt);

        // https://api.jquery.com/category/traversing/
        $('.oranges .peaches').find('span').addClass('MARKERS');
        $('.apples').closest('.oranges').addClass('anotherClass');

        var needText = $('.nuts p').html();
        // console.log(needText);

        $('.apples').after('<div class="Carl-Faux-Div"> </div>');
        $('.Carl-Faux-Div').wrapInner('<div class="inside-this"></div>');
        $('div.inside-this').html('<div class="whatever-next"></div><div class="whatever-prev"></div>');
        $('.Carl-Faux-Div .whatever-next').html(needText);
        $('.Carl-Faux-Div .whatever-prev').html('something else ');


        // each example
        $(".banana ul li").each(function (index, element) {
          var thisText = $(this).html();
          // console.log(thisText);
        });


        //Carl's code
        /*
         $('.peaches').find('.nuts').addClass("border-yellow");
         $('.apples').closest('.oranges').find('.nuts').addClass('border-solid');
         $('.peaches').find('img').attr("alt", "I love fries");
         $('img').parent().prev('.nuts').find('a').css({
         "background-color": "blue",
         "font-family": "Arial"
         });
         $('.nuts').find('p').html("I Love Avocados");
         //#1
         $('.nuts').after('<div class="Burma"></div>');
         var mangosGrow = $('.mangos').html();
         //console.log(mangosGrow);
         $('.Burma').html(mangosGrow);
         //#2
         $(".peaches").wrapInner("<div class='pickle'></div>");
         //#3
         $(".apples").wrap("<div class='cheese'></div>");
         //#4
         $(".banana").find("li").each(function () {
         $(this).addClass("spirit");
         });
         //#5
         $(".banana").find('li').not(".no_sir").each(function () {
         $(this).addClass("EurAsia");
         });
         //#6
         $(".banana").find('li').filter(".no_sir").each(function () {
         $(this).addClass("Americas");
         });
         //#7
         $(".banana").find('li').each(function () {
         $(this).wrapInner("<div class='drink'></div>");
         });
         //#1
         $(".nuts").find("a").click(function (event) {
         (event).preventDefault();
         console.log("He shoots... Glove Save")
         });
         //#2
         $(".apples").find("img").hover(function () {
         console.log("hovered in");
         });
         //#3
         $('.peaches').on("mouseenter", function () {
         $(this).addClass("andCream");
         }).on("mouseleave", function () {
         $(this).removeClass("andCream");
         });
         //#4
         var count = 0;
         $("#form_asparagus").on("submit", function (event) {
         if (count <= 5) {
         alert("you just submitted the form " + (++count) + " times");
         }
         else {
         alert("you can't submit anymore");
         event.preventDefault();
         }
         });
         //#5
         $("#form_asparagus").find("textarea").on("focus", function () {
         $(this).css("background-color", "Blue");
         }).on("blur", function () {
         $(this).css("background-color", "");
         });
         //#6
         $("#form_asparagus textarea").keyup(function () {
         var innertext = $(this).val().length;
         console.log('length is '+ innertext);
         event.preventDefault();
         });
         //#7
         $(document).scroll(function () {
         console.log($(document).scrollTop());
         });*/

        //#1
// *create an accordion just like https://jqueryui.com/accordion/ but with your own custom code.
        $('.answer').hide();
        $(".question").click(function (i) {;
          // if this is open
          if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.answer').slideUp();
          }
          // if this is not open
          else {
            $('.answer').each(function () {
              $(this).slideUp();
            });
            $(this).addClass('open');
            var theQuestion = $(this).next('.answer');
            theQuestion.slideDown('slow');
          }
        });

/*        $('.answer').hide();
        $('.question').bind('click', function () {
          //$(this).next('.answer').toggle().slideToggle();
          $(this).next('.answer').addClass("green");

        });*/

        /*$('.answer').hide();
         $('.question').click(function(){
         $('.question').toggle(function () {
         $('question').next('.answer').show('slow');
         }, function() {
         $('question').next('.answer').hide('slow');
         });
         });*/

        //#2
//* On the .IamProgress, create an animated progress bar. When you click step 1, then it will fill that background-color (left to right), step 2,


        //#3
//* Using the markup on .IamTooltip, create a tooltip on hover. You will need to use both SASS and JS to get this done. Don't forget to add a pretty arrow.
        $('.theTipItselt').hide();
        $( ".theTarget" ).hover(
            function() {
              //hover on
              $('.theTipItselt').show().addClass("tool");
            }, function() {
              //hover off
              $('.theTipItselt').hide("slow");
            }
        );


        /*$('.theTipItselt').hide();
        $('.theTarget').hover(function () {
          console.log("yup!");
          //$('.theTipItselt').show();
        });*//*function () {
          var hover = $(this).attr('theTarget');
          $(this)
              .data("theTipItselt", hover)
              .removeAttr('theTarget');
        }).mouseover(function (event) {

        });*/

      }
    }
  };


})(jQuery, Drupal, this, this.document);
