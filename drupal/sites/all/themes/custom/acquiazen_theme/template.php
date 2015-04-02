<?php
/**
 * @see https://drupal.org/node/1728096
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
  //   dpm($variables);
}


/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */

function acquiazen_theme_preprocess_page(&$variables, $hook) {
  // TODO: start here
  // dpm($variables);
}


/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */

function acquiazen_theme_preprocess_node(&$variables, $hook) {
  // dpm($variables);
}


/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */

function acquiazen_theme_preprocess_region(&$variables, $hook) {
  //  dpm($variables);
}


/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */

function acquiazen_theme_preprocess_block(&$variables, $hook) {
  //  dpm($variables);
}

