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

                //Carl's code
                $('.peaches').find('.nuts').addClass("border-yellow");
                $('.apples').closest('.oranges').find('.nuts').addClass('border-solid');
                $('.peaches').find('img').attr("alt", "I love fries");
                $('img').parent().prev('.nuts').find('a').css({
                    "background-color": "blue",
                    "font-family": "Arial"
                });
                $('.nuts').find('p').html("I Love Avocados");

            }
        }
    };


})(jQuery, Drupal, this, this.document);
