<?php

foreach(glob(get_template_directory() . "/functions/*.php") as $file){
    require $file;
}