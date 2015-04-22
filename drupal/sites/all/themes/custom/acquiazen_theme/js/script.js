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

                // @Carl: this is great
                //#1
                $('.nuts').after('<div class="Burma"></div>');
                var mangosGrow = $('.MARKERS').html();
                //console.log(mangosGrow);
                $('.Burma').html(mangosGrow);

                // @Carl: this is great
                //#2
                $(".peaches").wrapInner("<div class='banana'></div>");

                // @Carl: this is great
                //#3
                $(".apples").wrap("<div class='cheese'></div>");

              /**
               * @Carl: You didn't need to create this, I had already added the markup.
               * You just need to revert our cupcake feature for this to show
               * http://screencast.com/t/VIIEqHN1D
               *
               */
                //Adding the Banana list
                $('.banana').after("<ul><li>Rum</li><li>Vodka</li><li class='no'>Tequila</li><li>Whiskey</li></ul>");


              /**
               * @Carl: 4-7 are mostly right, but you DEFINITELY don't want to target every 'li' on the page.
               * Make sure to update based on specific container, etc
               * Also make sure to filter according to the feature code class of 'no_sir'
               *
               */
                //#4
                $("li").each(function () {
                    $(this).addClass("spirit");
                });

                //#5
                $('li').not(".no").each(function () {
                    $(this).addClass("EurAsia");
                });

                //#6
                $('li').filter(".no").each(function () {
                    $(this).addClass("Americas");
                });

                //#7
                $('li').each(function () {
                    $(this).wrapInner("<div class='drink'></div>");
                });

            }
        }
    };


})(jQuery, Drupal, this, this.document);
