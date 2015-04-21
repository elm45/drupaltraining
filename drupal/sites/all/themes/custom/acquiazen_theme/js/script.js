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
       */

        //#1
        $('.nuts').after('<div class="Burma"></div>');
          var mangosGrow = $('.MARKERS').html();
          //console.log(mangosGrow);
          $('.Burma').html(mangosGrow);

          //#2
          $(".peaches").wrapInner( "<div class='cream'></div>");

          //#3
          $(".apples").wrap("<div class='cheese'></div>");

          //#4
          

      }
    }
  };


})(jQuery, Drupal, this, this.document);
