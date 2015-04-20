<?php
/**
 * @file
 * cupcakes.box.inc
 */

/**
 * Implements hook_default_box().
 */
function cupcakes_default_box() {
  $export = array();

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'javascript_playground';
  $box->plugin_key = 'simple';
  $box->title = 'javascript playground';
  $box->description = 'javascript playground';
  $box->options = array(
    'body' => array(
      'value' => '<div class="oranges">
<div class="peaches">
<div class="nuts">
<p>
Wafer pie FUDGE   pie jujubes. Jelly beans jujubes danish tootsie roll chupa chups sesame snaps croissant sugar plum bonbon. Muffin icing macaroon soufflé lemon drops chocolate cake sweet roll biscuit wafer. Cake cake carrot cake gingerbread bear claw chocolate jelly chocolate cake. Biscuit cheesecake danish bonbon wafer candy canes liquorice topping. Jelly-o soufflé sugar plum cotton candy gummi bears dragée ice cream.
</p>
<span>
Wafer pie donut pie jujubes. Jelly beans jujubes danish tootsie roll chupa chups sesame snaps croissant sugar plum bonbon. Muffin icing macaroon soufflé lemon drops chocolate cake sweet roll biscuit wafer. Cake cake carrot cake gingerbread bear claw chocolate jelly chocolate cake. Biscuit cheesecake danish bonbon wafer candy canes liquorice topping. Jelly-o soufflé sugar plum cotton candy gummi bears dragée ice cream. Dessert marzipan tiramisu cookie dessert croissant jelly beans bonbon dragée. Dragée cotton candy liquorice croissant powder tootsie roll jelly beans tart marshmallow. Pastry caramels pie soufflé lemon drops. Biscuit sugar plum sweet roll pie cotton candy chocolate cake brownie brownie. Bonbon cheesecake bear claw croissant halvah icing caramels. Pastry tiramisu topping. Donut caramels sweet roll oat cake chupa chups liquorice.
Sweet macaroon pastry marshmallow sesame snaps tootsie roll. Jelly-o jelly beans sugar plum oat cake cake caramels. Chupa chups liquorice biscuit. Chocolate cake lemon drops muffin sweet. Jelly beans candy donut lollipop jelly beans lollipop. Candy candy gummies. Chocolate chupa chups caramels brownie sesame snaps fruitcake pie brownie. Biscuit fruitcake jelly-o chocolate. Ice cream sweet roll gummies sugar plum danish pudding oat cake. Jelly beans sesame snaps caramels dragée candy canes cupcake. Cupcake bear claw fruitcake macaroon pastry halvah jelly beans. Ice cream gummies dessert tart. Dragée soufflé pastry danish bonbon.
</span>
<a href="http://www.espn.com">I am a link</a>
</div>
<div class="apples"><br><br><img alt="French Fries yall" src="https://images.bigcartel.com/bigcartel/product_images/148490470/max_h-1000+max_w-1000/Fries_print.jpg" /> </div>
</div>
</div>


<div class="mangos">
<div class="tangerine">
  Chupa chups <strong>Bold Chocolate</strong> cake lemon drops muffin sweet. <strong> Bold Jelly beans</strong> candy donut lollipop jelly beans lollipop. Candy candy gummies. <i>Chocolate chupa chups caramels brownie sesame snaps fruitcake pie brownie. Biscuit fruitcake jelly-o chocolate.
  <div>

  <div class="banana">
  <ul>
  <li>test</li>
    <li>test</li>
      <li>test</li>
        <li>test</li>
          <li class="no_sir">test</li>
           <li>test</li>
  </ul>
  </div>
</div>


<form id="form_asparagus" action="#" target="#">

<textarea>test test test test test test test test test test test </textarea>
<input type="text" />
<input type="submit" value="Submit">
</form>






',
      'format' => 'php_code',
    ),
    'additional_classes' => '',
  );
  $export['javascript_playground'] = $box;

  return $export;
}
