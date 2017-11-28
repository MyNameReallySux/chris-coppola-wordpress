<?php
   /*
   Plugin Name: Portfolio Post Types
   Plugin URI: 
   Description: A plugin that adds basic types for portfolio sites
   Version: 1.2
   Author: Chris Coppola
   Author URI:
   Author Email: chris.coppola315@gmail.com
   License: MIT
   */

function create_project(){
	register_post_type('project', [
		'labels' => [
			'name' => __('Projects'),
			'singular_name' => __('Project')
		],
		'public' => true,
		'supports' => ['title', 'editor', 'thumbnail'],		
		'has_archive' => true,
	]);

	register_post_type('employer', [
		'labels' => [
			'name' => __('Employers'),
			'singular_name' => __('Employer')
		],
		'public' => true,
		'supports' => ['title', 'editor', 'thumbnail']
	]);

	register_post_type('school', [
		'labels' => [
			'name' => __('Schools'),
			'singular_name' => __('School')
		],
		'public' => true,
		'supports' => ['title', 'editor', 'thumbnail']
	]);
}
add_action('init', 'create_project');	
