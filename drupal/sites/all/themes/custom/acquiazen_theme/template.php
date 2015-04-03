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

  // dpm($variables);

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


/**
 * template_preprocess_page
 */

function acquiazen_theme_preprocess_page(&$variables, $hook) {

  // dpm($variables);

  if (isset($variables['node']->type)) {
    $variables['classes_array'][] = 'page-nodetype-' . drupal_html_class($variables['node']->type);
    $variables['page_classes'] = implode(' ', $variables['classes_array']);
    // create new variable of classes to print in page.tpl.php as $page_classes
  }

}


/**
 * template_preprocess_node
 */

function acquiazen_theme_preprocess_node(&$variables, $hook) {
  // dpm($variables);
}


/**
 * template_preprocess_region
 */

function acquiazen_theme_preprocess_region(&$variables, $hook) {
  //  dpm($variables);
}


/**
 * template_preprocess_block
 */

function acquiazen_theme_preprocess_block(&$variables, $hook) {
  //  dpm($variables);
}

