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






        

      }
    }
  };


})(jQuery, Drupal, this, this.document);
