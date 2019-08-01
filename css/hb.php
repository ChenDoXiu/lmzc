<?php
$css = array("animation.css","block.css","dialog.css","form.css","item.css","layout.css","normalize.css","styles.css");
$css_content = '';
foreach ($css as $css_file) {
if(file_exists($css_file)){

// Load the content of the css file 

$css_content .= file_get_contents($css_file);

$css_content = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css_content);

/* remove tabs, spaces, newlines, etc. */

$css_content = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $css_content);

}

}
$file = fopen("min.css","w");
file_put_contents("min.css",$css_content);
echo "ok";



?>