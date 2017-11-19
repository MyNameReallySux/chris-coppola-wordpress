<?php 
/**
 * Template Name: Home
 * 
 * @package BeautifulCode
 * @subpackage ShortyBlog
 */

$context = Timber::get_context();
$page = new TimberPost();
$page->style_id = to_camel_case($pagepost->slug, true);
$page->inline_style = get_page_style_contents('home');
$context['page'] = $page;

$context['posts'] = new Timber\PostQuery([
	'post_type' => 'post'
]);

$templates = ['views/page-templates/home.twig', '404.twig'];
Timber::render($templates, $context);