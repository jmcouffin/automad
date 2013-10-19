<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta content="utf-8" http-equiv="encoding">
	<title>$[siteName] / $(title)</title>
	<meta name="app" content="Automad <?php echo VERSION; ?>">
	<link rel="stylesheet" type="text/css" href="$[themeURL]/style.css" />
</head>

<body>
	<p>$[searchField()]</p>
	<p>$[navTreeCurrent]</p>
	<p>$[navTop]</p>
	<p>$[navChildren]</p>
	<p>$[navSiblings]</p>	
	<h1>$(title)</h1>
	<h2>$(subtitle)</h2>
	
	$[filterParentByTags]
	
	<p>$(text)</p>
	<br />
	<p>Related Pages:</p>
	<p>$[relatedPages(title, tags)]</p>
	<br />
	<p>$[navBreadcrumbs]</p>
	<br />
	<p>Made with Automad <?php echo VERSION; ?></p>
</body>
</html>