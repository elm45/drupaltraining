(function ($, Drupal, window, document, undefined) {

  /**
   * Example A
   */
  Drupal.behaviors.ExampleA = {
    attach: function (context, settings) {


      console.log('test');


    $('.peaches').find('.nuts').addClass("border-yellow");
    $('.apples').closest('.oranges').find('.nuts').addClass('border-solid');
    $('.peaches').find('img').attr("alt","I love fries");
    $('img').parent().prev('.nuts').find('a').css({"background-color":"blue", "font-family":"Arial"});
    $('.nuts').find('p').html("I Love Avocados");



    //$('.apples').parent('.oranges').add('.nuts').addClass('border-solid');
    }
  };


})(jQuery, Drupal, this, this.document);
