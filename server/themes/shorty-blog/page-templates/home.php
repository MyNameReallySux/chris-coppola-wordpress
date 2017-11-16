<?php 
/**
 * Template Name: Home
 * 
 * @package BeautifulCode
 * @subpackage ShortyBlog
 */


$context = Timber::get_context();
$post = new TimberPost();
$post->styleID = to_camel_case($post->slug, true);
$context['post'] = $post;

register_page_style('home');
$templates = ['views/page-templates/home.twig', '404.twig'];
Timber::render($templates, $context);