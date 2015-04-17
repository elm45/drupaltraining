<?php


/**
 *
 * TODO: CHECKLIST OF ADDING CLASSES
 * Views
 * Panels
 * Box
 * Block
 * Panelizer
 * Field
 * View Mode
 */

/**
 *
 * @CARL: read thru the following references
 *
 * @see https://drupal.org/node/1728096
 * https://www.drupal.org/node/930760
 * http://themery.com/book/export/html/58
 */


/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */

function acquiazen_theme_preprocess_html(&$variables, $hook) {

  //dpm($variables);

  // Add class according to path alias on body
  $pathalias = explode('/', drupal_get_path_alias());
  switch ($pathalias[0]) {
    case 'news':
      $variables['classes_array'][] = 'sectionclass-news';
      break;
    default:
      $variables['classes_array'][] = 'sectionclass-notapplicable';
      break;
  }

}


$imgPath = drupal_get_path('theme', 'acquiazen') . '/images/carl.png';


/**
 * template_preprocess_page
 */

function acquiazen_theme_preprocess_page(&$variables, $hook) {

  // dpm($variables);

  // $variables['theme_hook_suggestions'][] = 'page__news';


  if (isset($variables['node']->type)) {
    $variables['classes_array'][] = 'page-nodetype-' . drupal_html_class($variables['node']->type);
    $variables['page_classes'] = implode(' ', $variables['classes_array']);
  }
  // create new variable of classes to print in page.tpl.php as $page_classes

  // pass by reference

  //Using a preprocess function: create a new variable that will show an alternate logo.
  //Then print that new custom logo instead of the default one.

  // $variables['logo2'] = t("https://maxichimaximind.files.wordpress.com/2014/12/batman-6-128.gif");


  //Add a new body class that will show only when your on a news node page

/*  if (!empty($variables['page']['#views_contextual_links_info']['views_ui'])) {
    if ($variables['page']['#views_contextual_links_info']['views_ui']['view_name'] == 'news') {
      $variables['classes_array'][] = 'swiss';
    }
  }*/


}


/**
 * template_preprocess_node
 */

function acquiazen_theme_preprocess_node(&$variables, $hook) {
  //dpm($variables);

  $variables['theme_hook_suggestions'][] = 'node__tortoise';

}


/**
 * template_preprocess_region
 */

function acquiazen_theme_preprocess_region(&$variables, $hook) {
  //dpm($variables);

  //Add a unique class to each region that is showing on the homepage.

  if (!empty($variables['elements']['#region'])) {
    if ($variables['elements']['#region'] == 'header') {
      $variables['classes_array'][] = 'brie';
    }
    if ($variables['elements']['#region'] == 'highlighted') {
      $variables['classes_array'][] = 'mozzarella';
    }
    if ($variables['elements']['#region'] == 'content') {
      $variables['classes_array'][] = 'provolone';
    }
    if ($variables['elements']['#region'] == 'footer') {
      $variables['classes_array'][] = 'goatster';
    }
    if ($variables['elements']['#region'] == 'page_bottom') {
      $variables['classes_array'][] = 'chester';
    }
  }
}

/**
 * template_preprocess_block
 */

function acquiazen_theme_preprocess_block(&$variables, $hook) {
  //dpm($variables);


  /*Create 2 custom block and put it in a region. Once the block is showing up I want you to create 2 classes on just one of the custom blocks:
  * A class that will show up on every block on the site
  * A class that will show up on just that specific block*/

  if ($variables['elements']['#block']->subject == 'Cheese') {
    $variables['classes_array'][] = 'gouda';
  }
  if ($variables['elements']['#block']) {
    $variables['classes_array'][] = 'cheese';
  }
}

/*
  * On the homepage news views pane:
  * Add a class that will show on the views container (specific to just that view) http://screencast.com/t/LUrKwTzvyCg
  * Add a class that will show on the pane container (specific to just that view) http://screencast.com/t/nIl9MskB
 */
function acquiazen_theme_preprocess_views_view(&$variables, $hook) {
  //dpm($variables);

  if (isset($variables['view'])) {
    if ($variables['view']->name == 'news') {
      $variables['classes_array'][] = 'limberger';
    }
  }
}

function acquiazen_theme_preprocess_panels_pane(&$variables, $hook) {
  //dpm($variables);

  if (isset($variables['pane'])) {
    if ($variables['pane']->type == 'views') {
      $variables['classes_array'][] = 'provolone';
    }
  }
}
