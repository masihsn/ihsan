<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
 &lt;head&gt;  
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"> </script>
<![endif]-->
<meta content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1' name='viewport'/>
<meta content='text/html;charset=UTF-8' http-equiv='Content-Type'/>
<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'/> 
<b:include data='blog' name='all-head-content'/>
<meta content='g8DcHjiwbs_MvydwTspdrLw4JWYMoxxAN5ARptleM38' name='google-site-verification'/>
<!-- Title Tag Blogger dioptimalkan -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<title><data:blog.pageTitle/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
	<title><data:blog.pageName/> | <data:blog.title/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.pageName == &quot;&quot;'>
	<title>All Posts | <data:blog.title/></title>
<b:else/>
<b:if cond='data:blog.pageType in {&quot;error_page&quot;}'>
	<title>Page Not Found | <data:blog.title/></title>
<b:else/>
	<title><data:blog.pageName/></title>
</b:if>
</b:if>
</b:if>
</b:if>

<!-- Meta keywords otomatis halaman depan, statis, dan postingan -->
<b:if cond='data:blog.pageType in {&quot;index&quot;} and data:blog.homepageUrl == data:blog.url'>
	<meta expr:content='data:blog.title' name='keywords'/>
</b:if>    
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
	<meta expr:content='data:blog.pageName' name='keywords'/>
</b:if>

<!-- Noindex halaman pencarian, label, dan arsip -->
<b:if cond='data:blog.pageType in {&quot;archive&quot;} or data:blog.searchLabel or data:blog.searchQuery'>
	<meta content='noindex,nofollow' name='robots'/>
</b:if>

<!-- Facebook Open Graph Tag -->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
	<meta expr:content='data:blog.pageName' property='og:title'/>
	<meta content='article' property='og:type'/>
<b:else/>
	<meta expr:content='data:blog.pageTitle' property='og:title'/>
	<meta content='website' property='og:type'/>
</b:if>
<meta expr:content='data:blog.canonicalUrl' property='og:url'/>
<!-- Large image, original size -->
<b:if cond='data:blog.postImageUrl'>
	<meta expr:content='data:blog.postImageUrl' property='og:image'/>
<b:else/>
	<!-- Thumbnail image, 72 &#215; 72 pixels -->
	<b:if cond='data:blog.postImageThumbnailUrl'>
		<meta expr:content='data:blog.postThumbnailUrl' property='og:image'/>
	<b:else/>
		<!-- Default, no image -->
		<meta content='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wAALCABIAEgBAREA/8QASwAAAgICAwEAAAAAAAAAAAAABAUDBgIHAAEICRAAAgEDAwMDAgUEAwAAAAAAAQIDAAQFERIxBhMhFCJRFkEVI1VhkwclMlJxkaH/2gAIAQEAAD8A+kyLRiJRSpU4Skp6hwwuvTG4G7dt3bTs1+N1OilCy+3jmlE0ZJJNK5o6fRrR8a0VoqKzMdFUEk/sPJrX7dWXN8uQjiiSOIWsrRt53+NBrVCqzT/1Bkw6YqB7ZZ4ntEaWTeQ+3cU1X7cLWzxsmjSRCGR0V1PyGGoNByx0qmSm0Qpgi1NLB37eaLXTuROmvxuBFaXsrC+sMgyzwiNISY7lpDsTY40Pk/I40qq5CfHyZL0MOSVbQvo9523Pt/ZQNdaFy1je5LKRpZW5lgfbb2RiPcRo4htX3D7/AHbWvSdhZGxx1pak7jBbxxk/JRQKxlSlM6UfFTGMVR+qs3d+vgw9jIYpJSgkkB0I7nCg/wDprUXUeb9RKbS2ci3gJRPP/bH5ZuSaqVNcRkTYzlJGb00+i3CqxB2/7jTh05BrcHRXUl+Mtc9P5SYzyRFxBOTqx7fKk/cEeRWypRSmcc0RDwKZR1MMbYTOJ3toe5yZCgLfHNCfSnTP6TZfwrXPpTpn9Jsv4VrB+lumgD/aLH+FambC4eG59UljbrcA6iURjePGnNclpTPWULVVZ+q721OWULDvtp41g1U6MpkCNr58ka1OeqMvHdS3qi3/AA6LLCw7RQ90+dpk361Yc5mLzG3+JhhEZW6kuBJuXU/lR7hpVJ+vMx9MC72W/rPVhNuw7O32u7rprVjynVd7ZZfE26LEYXht3vGKklfUNsXb58VFLmeorrJ3/oIYJLWwvI7aSEr+ZLr5dgxIA20PZ5fM3+Wu4xc45La3v5IO2wImdFPK+eafTmsIX8VQsrgcrdrcTQ27mT8WkZVBGrwPtO7njVaYy4bMF5sWtk5t5M4Lz1m5e2Itd2hHO6rP1DYXd5ksLLBC0iQSXRlI09oeLauv/JqhfSWb9EF9JJqMHp2/GvqdO1t5520xyPTWfyP4xcoXg0jtUggKKTcC3UEaEn2+6hsphczMMhCMVJI1zexXkUwcKIiVHcUjUe77aUZY2FxaZq7lmwJmaXJSSRXxZB2kY8jzrVrnehYpKZRSCkd51Hc217ewRJCVt7cOpOpJZdrSA6HgI3isR1Zcm4VRHD23junUnXX2l+z9/uIyTRy9RXj4K6vdkPfSdYYV8hCzhNu7z8tS246uuxKTEkBiNqki6q2u5oDL/lrpyNNvJpnJl7o5W1tQY1jktYpX/KdyS5IIBU6KPHLUwlkFK5pKAil1pnFLUYxmNkkeRodZJGlZ319zd1djAn404FdjA4bYE9OfCxqrbjuVYxtADcgaHz81mMFiVI9krIJFk7TSs0ZZRoCUPg1F9P4dQR25du3TZ3W2j2lAdvGoDEA12mMs7eZJke53ooUE3DnVQdQrefIHxUsstLJpK//Z' property='og:image'/>
	</b:if>
</b:if>
<b:if cond='data:blog.metaDescription'>
	<meta expr:content='data:blog.metaDescription' property='og:description'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>
<meta content='FB_ID' property='fb:admins'/>
<meta content='Index, Follow' name='robots'/>
<meta content='Muhammad Ihsan' name='author'/>
<meta content='General' name='Rating'/>
&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* <b:skin><![CDATA[
-----------------------------------------------
Blogger Template Style
Name:   : Speed ADS Sense 
Designer: Muhammad Ihsan
URL:      https://ihsankajian.blogspot.com
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#059859" value="#059859"/>

   <Group description="Page Text" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 13px Arial, sans-serif" value="normal normal 13px Arial, sans-serif"/>
     <Variable name="body.text.color" description="Main Text Color" type="color" default="#333333" value="#333333"/>
   </Group>
   
   <Group description="Links" selector=".main-outer">
     <Variable name="link.color" description="Link Color" type="color" default="#0099cc" value="#0099cc"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#0099cc" value="#0099cc"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#006c8e" value="#006c8e"/>
   </Group>

   <Group description="Body Backgrounds" selector=".body-fauxcolumns-outer">
     <Variable name="body.background.color" description="Outer Background" type="color" default="#dddddd" value="#dddddd"/>
   </Group>

   <Group description="Wrapper Backgrounds" selector="#wrapper">
     <Variable name="wrapper.background.color" description="Wrapper Background" type="color" default="#fff" value="#ffffff"/>
   </Group>
   
   <Group description="Header Background" selector="#header-wrapper">
	 <Variable name="header.background.color" description="Header Background" type="color" default="#fff" value="#ffffff"/>
	 <Variable name="header.border.color" description="Border Color" type="color" default="#232323" value="#232323"/>
   </Group>
   
   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.override" description="Body Background Override" type="string" default="fff" value="fff"/>

   <Group description="Blog Title" selector=".header h1.title, .header p.title">
     <Variable name="header.font" description="Font" type="font"
         default="normal bold 22px Arial, sans-serif" value="normal bold 22px Arial, sans-serif"/>
     <Variable name="header.text.color" description="Title Color" type="color" default="#44CCF2"  value="#44CCF2"/>
   </Group>

   <Group description="Blog Description" selector=".header .description">
     <Variable name="description.text.color" description="Description Color" type="color"
         default="#222"  value="#222222"/>
   </Group>

   <Group description="Post Title" selector="h2.post-title">
     <Variable name="post.title.font" description="Font" type="font"
         default="normal bold 14px Arial, Helvetica, FreeSans, sans-serif" value="normal bold 14px Arial, Helvetica, FreeSans, sans-serif"/>
	 <Variable name="post.title.color" description="Text Color" type="color" default="#333333" value="#333333"/>
   </Group>
   
   <Group description="Post Author" selector=".post-label-block .profile-block">
     <Variable name="post.profile.background.color" description="Background Color" type="color"
         default="#1EB093" value="#1EB093"/>
     <Variable name="post.profile.color" description="Text Color" type="color"
         default="#ffffff" value="#ffffff"/>
   </Group>
   
   <Group description="Post Date" selector=".post-label-block .date-block">
     <Variable name="post.date.background.color" description="Background Color" type="color"
         default="#89C237" value="#89C237"/>
	 <Variable name="post.date.color" description="Text Color" type="color"
         default="#ffffff" value="#ffffff"/>
   </Group>

   <Group description="Post Lebel" selector=".post-label-block .label-block">
     <Variable name="post.label.background.color" description="Background Color" type="color"
         default="#44CCF2" value="#44CCF2"/>
     <Variable name="post.label.color" description="Text Color" type="color"
         default="#ffffff" value="#ffffff"/>
   </Group>
   
   <Group description="Post Thumbnail" selector=".img-thumbnail">
     <Variable name="post.thumbnail.background.color" description="Background Color" type="color"
         default="#ffffff" value="#ffffff"/>
     <Variable name="post.thumbnail.border.background.color" description="Border Color" type="color"
         default="#e5e5e5" value="#e5e5e5"/>
   </Group>
   
   <Group description="Sidebar Title" selector=".sidebar h2">
     <Variable name="widget.title.background.color" description="Background Color" type="color" default="#007D47" value="#007D47"/>
     <Variable name="widget.title.font" description="Title Font" type="font"
        default="bold normal 11px Arial, sans-serif" value="bold normal 11px Arial, sans-serif"/>
     <Variable name="widget.title.text.color" description="Title Color" type="color" default="#ffffff" value="#ffffff"/>
   </Group>
   
   <Group description="Sidebar Title Border" selector=".sidebar h2">
	 <Variable name="sidebar.title.border.top.color" description="Border Top Color" type="color" default="#3690D4" value="#3690D4"/>
	 <Variable name="sidebar.title.border.bottom.color" description="Border Bottom Color" type="color" default="#0F6DB3" value="#0F6DB3"/>
   </Group>

   <Group description="Navigation Menu" selector="#nav">
     <Variable name="navigation.menu.font" description="Font" type="font"
        default="bold normal 11px Arial, sans-serif" value="bold normal 11px Arial, sans-serif"/>
     <Variable name="menu.background.color" description="Background Color" type="color" default="#007D47" value="#007D47"/>
	 <Variable name="menu.navigation.text.color" description="Text Color" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="menu.navigation.hover.color" description="Hover Color" type="color" default="#E73037" value="#E73037"/>
   </Group>
   
   <Group description="Navigation Menu Border" selector="#nav">
	 <Variable name="menu.border.top.color" description="Border Top Color" type="color" default="#3690D4" value="#3690D4"/>
	 <Variable name="menu.border.bottom.color" description="Border Bottom Color" type="color" default="#0F6DB3" value="#0F6DB3"/>
   </Group>

   <Group description="Search Box" selector="#search-form">
     <Variable name="input.background.color" description="Input Background Color" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="button.background.color" description="Button Background Color" type="color" default="#fff" value="#ffffff"/>
     <Variable name="input.color" description="Input Color" type="color" default="#666666" value="#666666"/>
	 <Variable name="button.color" description="Button Color" type="color" default="#ffffff" value="#ffffff"/>
   </Group>

   <Group description="Footer" selector="#footer-wrapper">
     <Variable name="footer.font" description="Font" type="font"
        default="normal normal 11px Arial, sans-serif" value="normal normal 11px Arial, sans-serif"/>
     <Variable name="footer.background.color" description="Background Color" type="color" default="#333333" value="#333333"/>
     <Variable name="footer.color" description="Footer Color" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="footer.border.color" description="Border Color" type="color" default="#454545" value="#454545"/>
   </Group>
 
*/

/**
* Eric Meyer&#39;s Reset CSS v2.0 (//meyerweb.com/eric/tools/css/reset/)
* //cssreset.com
*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;display:block;}*{margin:0;padding:0;}html{display:block;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:&#39;&#39;;content:none;}table{border-collapse:collapse;border-spacing:0;}

/* FRAMEWORK */
.section, .widget {
	margin: 0 0 0 0;
}
.navbar, .blog-feeds, .feed-links, #backlinks-container {
	display:none;
}
strong,b{font-weight:bold;
}
cite,em,i{font-style:italic;
}
a:link{color:$(link.color);text-decoration:none;outline:none;transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;
}
a:visited{color:$(link.visited.color);text-decoration:none;
}
a:hover{color:$(link.hover.color);text-decoration:none;
}
a img{border:none;border-width:0;outline:none;
}
abbr,acronym{border-bottom:1px dotted;cursor:help;
}
sup,sub{vertical-align:baseline;position:relative;top:-.4em;font-size:86%;
}
sub{top:.4em;}small{font-size:86%;
}
kbd{font-size:80%;border:1px solid #999;padding:2px 5px;border-bottom-width:2px;border-radius:3px;
}
mark{background-color:#ffce00;color:black;
}
p,blockquote,pre,table,figure,hr,form,ol,ul,dl{margin:1.5em 0;
}
hr{height:1px;border:none;background-color:#666;
}
/* heading */
h1,h2,h3,h4,h5,h6{font-weight:bold;line-height:normal;margin:0 0 0.6em;
}
h1{font-size:200%
}
h2{font-size:180%
}
h3{font-size:160%
}
h4{font-size:140%
}
h5{font-size:120%
}
h6{font-size:100%
}
/* list */
ol,ul,dl{margin:.5em 0 .5em 3em}
ol{list-style:decimal outside}
ul{list-style:disc outside}
li{margin:.5em 0}
dt{font-weight:bold}
dd{margin:0 0 .5em 2em}
/* form */
input,button,select,textarea{font:inherit;font-size:100%;line-height:normal;vertical-align:baseline}
textarea{display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
/* code blockquote */
pre,code{font-family:&quot;Courier New&quot;,Courier,Monospace;color:inherit}
pre{white-space:pre;word-wrap:normal;overflow:auto}
blockquote{background:#f8f8f8;margin-left:2em;margin-right:2em;border-left:4px solid #ccc;padding:1em 1em;font-style:italic}
/* table */
.post-body table[border=&quot;1&quot;] th, .post-body table[border=&quot;1&quot;] td, .post-body table[border=&quot;1&quot;] caption{border:1px solid;padding:.2em .5em;text-align:left;vertical-align:top;
}
.post-body table.tr-caption-container {border:1px solid #e5e5e5;
}
.post-body th{font-weight:bold;
}
.post-body table[border=&quot;1&quot;] caption{border:none;font-style:italic;
}
.post-body table{background:#f6f6f6;
}
.post-body td, .post-body th{vertical-align:top;text-align:left;font-size:13px;padding:3px 5px;border:1px solid #e5e5e5;
}
.post-body th{background:#eee;
}
.post-body table.tr-caption-container td {background:#f6f6f6;border:none;padding:8px;
}
.post-body img {max-width:100%;height:auto;
}
.post-body img, .post-body table.tr-caption-container {max-width:100%;height:auto;
}
.post-body .separator img {max-width:92%;height:auto;
}
.post-body td.tr-caption {color:#666;font-size:80%;padding:0px 8px 8px !important;
}

img {
	max-width:100%;
	height:auto;
	border:0;
}
table {
	max-width:100%;
}
.clear {
	clear:both;
}
.clear:after {
	visibility:hidden;
	display:block;
	font-size:0;
	content:" ";
	clear:both;
	height:0;
}

body { 
	background:$(body.background);
	margin:0 0 0 0;
	padding:0 0 0 0;
	color:$(body.text.color);
	font:$(body.font);
	text-align:left;
}

/* WRAPPER */
#wrapper{background:$(wrapper.background.color);max-width:830px;margin:0 auto;padding:17px 18px 12px;box-shadow:0 0 5px rgba(30,30,30,0.08)}
/* HEADER WRAPPER */
#header-wrapper{background:#fff;margin:0 auto;padding:10px 0;overflow:hidden;color:$(header.text.color);border-bottom:1px solid $(header.border.color)}
#header-wrapper a img,.banner728-top a img{display:block}
.header{float:left;max-width:250px;width:100%;margin:0 0}
.header img{max-width:250px;height:auto}
.header h1.title,.header p.title{font:$(header.font);margin:0 0 0 0}
.header .description{color:$(description.text.color);margin:0.5em 0 0;padding:0 0 0 0}
.header a{color:$(header.text.color)}
.header a:hover{color:$(link.color)}
.banner468-header {
	float:right;
	max-width:468px;
	width:100%;
	margin:0 0;
}
/* Top Menu */
.top-menulite{display:block;float:left;margin:5 15px;width:100%;background:transparent;border-bottom:1px solid #ddd}
.top-menulite ul{width:100%;padding:0;margin:0;text-align:left}
.top-menulite li{list-style-type:none;float:left;padding:0;margin:0}
.top-menulite li a{position:relative;color:#333;display:block;margin:0;padding:10px 14px;line-height:100%;transition:all .3s}
.top-menulite ul li a:active,.top-menulite ul li.highlight a{text-decoration:none}
.top-menulite ul li a:hover{text-decoration:underline}
.top-menulite li.bayi{float:right;margin-left:5px}
.top-menulite li.bayi a{padding:0;width:28px;height:28px;line-height:28px;text-align:center}
.top-menulite li.bayi a i{text-align:center;color:#fff}
.top-menulite li.bayi a:hover i{color:#fff}
.top-menulite li.bayi.rrs{background:#ecad20}
.top-menulite li.bayi.youtube-1{background:#f76149}
.top-menulite li.bayi.gplus{background:#f20000}
.top-menulite li.bayi.twitter{background:#00baff}
.top-menulite li.bayi.facebook{background:#516ca4}
.top-menulite li.bayi a i,.top-menulite li.bayi a:hover i{color:#fff}
.top-menulite a#pull{display:none}
/* Responsive Top Menu */
@media screen and (max-width:1066px) {
.vitop-wrapper {padding:0 10px;}
}
@media only screen and (max-width:768px) {
.top-menulite {width:99%;margin:auto}
.vitop-wrapper {padding:0 10px;}
.top-menulite {background:#9b59b6;position:relative;display:block;padding:0;float:none;width:auto;}
.top-menulite ul {text-align:center;}
.top-menulite ul {display:none;height:auto;}
.top-menulite a#pull {color:#fff;display:inline-block;padding:12px;margin:0;border-right:1px solid #ddd;position:relative}
.top-menulite a#pull:before{content:<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M7,10L12,15L17,10H7Z" />
</svg>;font-family:svg;font-style:normal;font-weight:400;display:inline-block;margin:0 5px 0 0}
.top-menulite li {display:block;width:100%;text-align:left;border-right:none;}
.top-menulite li a {padding:15px 20px;display:block;color:#fff}
.top-menulite li a:hover, nav a:active {color:#fff;}
.top-menulite ul li a:hover {background:rgba(0,0,0,0.04);color:#fff;}
.top-menulite ul li:first-child a {margin-left:0;}
.top-menulite li.bayi.join,.top-menulite li.bayi.deviantart,.top-menulite li.bayi.gplus,.top-menulite li.bayi.twitter,.top-menulite li.bayi.facebook {display:none;}
}
/* NAVIGATION MENU 2 */
.toggleMenu{display:none;background:#E73138;padding:0 15px;height:48px;line-height:48px;color:#fff!important}
#nav{font:normal bold 12px Arial,sans-serif;background:#007D47;border:2px solid #ccc;text-transform:uppercase;height:48px;line-height:48px}
.nav-menu2{background:#007D47;list-style:none;margin:0 0 0 0;*zoom:1;float:left}
.nav-menu2:before,.nav-menu2:after{content:" ";display:table}
.nav-menu2:after{clear:both}
.nav-menu2 ul{list-style:none;margin:0 0 0 0;width:12em}
.nav-menu2 a{display:block;padding:0 15px}
.nav-menu2 li{position:relative;margin:0 0}
.nav-menu2 > li{float:left}
.nav-menu2 > li > a{display:block;height:48px;line-height:48px;color:#ffffff;box-shadow:0 4px 0 #007D47 inset}
.nav-menu2 > li > a.active{background:#E73138;box-shadow:0 4px 0 #E73138 inset}
.nav-menu2 > li:hover > a{background:#222222;box-shadow:0 4px 0 #E73138 inset}
.nav-menu2 li ul{background:#fff;display:block;position:absolute;left:0;z-index:10;visibility:hidden;opacity:0;-webkit-transition:all .25s ease-out;-moz-transition:all .25s ease-out;-ms-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out;border:1px solid #d9d9d9;border:1px solid rgba(217,217,217,1);box-shadow:0 0 2px rgba(0,0,0,0.2)}
.nav-menu2 li li ul{left:100%;top:-1px}
.nav-menu2 > li.hover > ul{visibility:visible;opacity:10}
.nav-menu2 > li > ul:before{content:"";width:0;height:0;position:absolute;bottom:100%;left:20px;border-width:8px;border-style:solid;border-color:transparent transparent #fff transparent;display:block}
.nav-menu2 li li.hover ul{visibility:visible;opacity:10}
.nav-menu2 li li a{display:block;color:#333;position:relative;z-index:100;line-height:32px}
.nav-menu2 li li a:hover{background:#f0f0f0}
.nav-menu2 li li li a{background:#fff;z-index:20;color:#333}
.nav-menu2 li .parent:after{content:<svg style="width:16px;height:16px" viewBox="0 0 16 16">
    <path fill="#fff" d="M7,10L12,15L17,10H7Z" />
</svg>;font-family:svg;font-style:normal;font-weight:normal;text-decoration:inherit;padding-left:6px}
#search-form{background:#007D47;float:right;margin:0 0;width:150px}
#search-form table{width:100%;margin:0 0 0 0}
#search-form td.search-box{padding-right:30px}
#search-form input#search-box[type="text"]{background:#ffffff;height:36px;line-height:36px;margin:5px 0 5px 5px;padding:0 25px;width:70%;color:#666666;border:none}
#search-form input#search-button[type="submit"]{font-family:FontSVG;background:#E73037;color:#ffffff;height:36px;line-height:36px;margin:5px 10px 0 0;padding:0 12px;border:none;outline:none;transition:all 0.25s;-moz-transition:all 0.25s;-webkit-transition:all 0.25s}
#search-form input#search-button[type="submit"]:hover{background:#222222;cursor:pointer}
#search-form input#search-box[type="text"]:focus{background:#eee;outline:none}
.banner728-top, .banner728-bottom {
	padding:0 18px;
}
.banner728-top h2, .banner728-bottom h2{
	display:none;
}
.banner728-top .widget-content {
	margin:6px 0 0;
	max-width:728px;
	overflow:hidden;
}
.banner728-bottom .widget-content {
	margin:6px 0;
	max-width:728px;
	overflow:hidden;
}

/* CONTENT WRAPPER */
#content-wrapper {
background:transparent;
margin:0 auto;
overflow:hidden;
word-wrap:break-word;
}

/* POST WRAPPER */
#post-wrapper {
background:transparent;
float:left;
width:520px;
margin:10px 5px 10px 0px;
}
.post-container {
margin:0 0;
}
.breadcrumbs {
font-size:11px;
color:#666;
padding:13px;
margin:0 0 13px;
background:#ffffff;
border:1px solid #e5e5e5;
}
.post-label-block {
	margin:0 0 8px;
	font-weight:bold;
	text-transform:uppercase;
	font-size:11px;
}
.post-label-block .label-block {
	background:$(post.label.background.color);
	color:$(post.label.color);
	display:inline-block;
	padding:2px 3px;
	margin:0 0 2px;
}
.post-label-block .date-block {
	background:$(post.date.background.color);
	color:$(post.date.color);
	display:inline-block;
	padding:2px 3px;
	margin:0 0 2px;	
}
.post-label-block .profile-block {
	background:$(post.profile.background.color);
	color:$(post.profile.color);
	display:inline-block;
	padding:2px 3px;
	margin:0 0 2px;	
}
.post-label-block .label-block:hover, .post-label-block .date-block:hover {
	background:#333;
}
.post-label-block abbr {
	border-bottom:none;
}
.post {
	border-bottom:1px dotted #ddd;
	margin:0 0 12px;
	padding:0 0 7px;
	overflow:hidden;
}
.post-body {
	line-height: 1.7;
}
h2.post-title, h1.post-title {
	font:$(post.title.font);
}
h1.post-title {
	margin-bottom:15px;
}
h2.post-title a, h1.post-title a, h2.post-title, h1.post-title {
	color:$(post.title.color);
}
h2.post-title a:hover, h1.post-title a:hover {
	color:$(link.color);
}
.img-thumbnail {
	background:$(post.thumbnail.background.color);
	float:left;
	width:74px;
	height:74px;
	margin:0 10px 5px 0;
	padding:8px;
	border:1px solid $(post.thumbnail.border.background.color);
}
.img-thumbnail img {
	width:74px;
	height:74px;
}
.post-vinfo a:hover {color:#c03;}
.author-info, .time-info, .comment-info, .label-info, .review-info {
margin-right:0;display:inline-block;color:#666;padding:10px;}
.post-info .author-info .<svg style="width:8px;height:8px" viewBox="0 0 24 24">
    <path fill="#000000" d="M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z" />
</svg>:before,.post-info .time-info .fa.fa-calendar-o:before,.post-info .comment-info .fa.fa-comments-o:before,.post-info .label-info .fa.fa-tag:before {color:#666;font-weight:normal;font-family:fontsvg;}
.timestamp-link abbr {border-bottom:none;}
.post-vinfo {font-size:9px;}
.post-vinfo {font-size:small;text-align:center;padding:0;border-top:1px solid #ccc;border-bottom:1px solid #ccc;}
.author-info, .time-info, .comment-info, .label-info, .review-info, .post-vinfo a {color:#444;}
.post-vinfo a:hover {color:#888;}
.post-vinfo {margin-top:5px;margin-right:10px;margin-left:10px;margin-bottom:0;padding:0;color:#666;font-size:9px;}
.post-vinfo a {display:inline;background:transparent;color:#666;padding:5px;padding-left:0;margin-bottom:10px;transition:all .3s ease-out;}
.post-vinfo a:hover {background:transparent;color:#FF9934;}
.author-info, .time-info, .comment-info, .review-info {display:inline;padding:0;margin-right:15px;}
.post-vinfo {background:transparent;}
.author-info, .time-info, .comment-info, .review-info, .post-vinfo a {color:#666;}
#blog-pager{margin:0 0;clear:both!important;padding:3px 3px;text-transform:uppercase;font-size:11px;font-weight:bold}
#blog-pager-newer-link a{background:#89C237;float:left;display:block;padding:2px 3px;color:#fff}
#blog-pager-older-link a{background:#89C237;float:right;display:block;padding:2px 3px;color:#fff}
a.home-link{background:#89C237;display:inline-block;padding:2px 3px;color:#fff}
#blog-pager-older-link a:hover,#blog-pager-newer-link a:hover,a.home-link:hover{background-color:#333;color:#fff}

/* SIDEBAR WRAPPER */
#sidebar-wrapper{float:right;width:300px;margin:12px 0}
.sidebar-container{margin:0 0}
.sidebar h2{font:$(widget.title.font);background:$(widget.title.background.color);color:$(widget.title.text.color);margin:0 0 10px 0;padding:9px 8px;text-transform:uppercase;border-top:1px solid $(sidebar.title.border.top.color);border-bottom:1px solid $(sidebar.title.border.bottom.color)}
.sidebar .widget{padding:0 0 10px}
.sidebar ul,.sidebar ol{list-style-type:none;margin:0 0 0 0;padding:0 0 0 0}
.sidebar li{margin:0 0 0 0;padding:3px 0;border-bottom:1px dotted #ddd}
/* label */
.label-size-1,.label-size-2,.label-size-3,.label-size-4,.label-size-5{font-size:100%;filter:alpha(100);opacity:10}
.cloud-label-widget-content{text-align:left}
.label-size{background:#66bb6a;display:block;float:left;margin:0 3px 3px 0;color:#ffffff;font-size:11px;text-transform:uppercase}
.label-size a,.label-size span{display:inline-block;color:#ffffff!important;padding:6px 8px;font-weight:bold}
.label-size:hover{background:#333333}
.label-count{white-space:nowrap;padding-right:3px;margin-left:-3px;background:#333333;color:#fff!important}
.label-size{line-height:1.2}
/* popular post */
.PopularPosts .item-thumbnail{margin:0 6px 6px 0;display:inline;padding:6px;border:1px solid #e5e5e5}
.PopularPosts .item-thumbnail a img{height:40px;width:40px;display:block;margin:0;padding:0}
.PopularPosts .widget-content ul li{padding:6px 0!important;border-bottom:1px dotted #e2e2e2}
.PopularPosts .item-title{font-weight:bold}
.PopularPosts .item-snippet{font-size:10px;color:#666}
.profile-img{display:inline;opaciry:10;margin:0 6px 3px 0}
/* Ihsan Share Button */
h2.sharetitle{position:relative;overflow:hidden;margin:20px 0;font-size:120%;font-weight:700;padding:4px 8px;text-align:center;text-transform:uppercase;transition:all .5s ease-out}
h2.sharetitle:before, h2.sharetitle:after {position:absolute;top:51%;overflow:hidden;width:50%;height:2px;content:'\a0';background-color:#ddd;}
h2.sharetitle:before{margin-left:-50%;text-align:right;}
h2.sharetitle span{position:relative;display:inline-block;padding:5px 10px;margin:0 10px;}
.sharede,.sharebrow{position:relative;display:inline-block;}
.sharebrow{display:table;margin:auto;text-align:center}
.sharebrow a.fb,.sharebrow a.gp,.sharebrow a.tw,.sharebrow span.pl{text-decoration:none!important;display:inline-block;margin:0 5px 5px 0;font-weight:700;text-transform:uppercase;color:#fff;text-shadow:none;padding:2px 8px;opacity:1;transition:all .3s}
.sharebrow a.gp {background:#f20000;}
.sharebrow a.fb {background:#516ca4;}
.sharebrow a.tw {background:#00baff;}
.sharebrow span.pl {background:#ff6600;}
.fbtea,.gotea,.plustea,.twtea{font-size:13px!important;vertical-align:middle}
.sharebrow a.fb:hover,.sharebrow a.gp:hover,.sharebrow a.tw:hover,.sharebrow span.pl:hover{color:#fff;opacity:.9}
.sharebrow a.fb:active,.sharebrow a.gp:active,.sharebrow a.tw:active,.sharebrow span.pl:active{box-shadow:inset 0 1px 0 rgba(0,0,0,.16)}
span.pl{color:green;cursor:pointer}
#share-menu{display:none}
.dropdown-menu{position:absolute;top:100%;right:5px;z-index:99;float:left;min-width:100px;padding:5px 10px;margin:0;font-size:13px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ddd;border-radius:3px;}
.dropdown-menu li{list-style:none!important;margin:0!important;padding-left:0!important;line-height:1.8em!important}
.dropdown-menu li a{color:#333!important;font-weight:400;display:block}
.dropdown-menu li a:hover{color:#e8554e!important}
ul#share-menu{margin:10px 0;padding:5px 15px}
/* Kotak Profil */
#aboutme{background-color:#F3F5F2;box-shadow:0 0 3px #e0e0e0;box-shadow:0 0 3px #e0e0e0;box-shadow:0 0 3px #e0e0e0;border:1px solid #666;padding:3px;border-radius:2px;border-radius:2px;border-radius:2px;margin:0 auto;margin-top:15px;padding:10px;max-width:600px;height:auto;margin:5px}
.name-author{margin:0 0 7px;display:block;width:100%}
.name-author h3{position:relative;display:inline;background-color:#00baff;color:#FFF;font-family:Segoe UI;font-size:15px;font-weight:bold;margin:0 0 0 -3px;padding:3px 5px 4px 9px;width:100%;text-shadow:0 1px 0 black;text-shadow:0 1px 0 black;text-shadow:0 1px 0 black}
.name-author h3:after{content:&quot;&quot;;width:0;height:0;position:absolute;left:100%;top:0;border-width:13px;border-style:solid;border-color:transparent transparent transparent #ff6600}
@keyframes name-author{0%{color:white}20%{color:Orange}40%{color:pink}60%{color:Orchid}80%{color:gold}100%{color:white}}
@keyframes name-author{0%{color:white}20%{color:Orange}40%{color:pink}60%{color:Orchid}80%{color:gold}100%{color:white}}
@-keyframes name-author{0%{color:white}
20%{color:Orange}
40%{color:pink}
60%{color:Orchid}
80%{color:gold}
100%{color:white}}
/* Penerapan efek pada element yang akan diberi efek*/
.name-author h3{/* Waktu 8 detik */
animation:8s infinite name-author linear;animation:10s infinite name-author linear}
.aboutme-text{font-size:14px;text-align:left;margin:0}
.aboutme-image-container{float:left;width:70px;height:70px;margin-right:75px;z-index:1}
.aboutme-image-container{margin:-20px 0 5px 0;padding:9px;position:relative;border-bottom-right-radius:10px;border-bottom-left-radius:100%;border-radius-bottomright:100%;border-radius-bottomleft:100%;border-bottom-right-radius:100%;border-bottom-left-radius:100%;box-shadow:inset 0 0 25px rgba(0,0,0,0.3),0px 1px 5px #666;box-shadow:inset 0 0 25px rgba(0,0,0,0.3),0px 1px 5px #666;box-shadow:inset 0 0 25px rgba(0,0,0,0.3),0px 1px 5px #666;background-color:#007D47}
.aboutme-image-container:before{content:&#39;&#39;;position:absolute;top:0;left:-10px;width:0;height:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent transparent #333 transparent}
.aboutme-image-container:after{content:&#39;&#39;;position:absolute;top:0;right:-10px;width:0;height:0;border-style:solid;border-width:10px 0 0 10px;border-color:transparent transparent transparent #333}
.aboutme-image-container img{width:100%;height:100%;border:2px solid yellow;border-radius:100%;transition:all 0.3s ease;transition:all 0.3s ease;transition:all 0.3s ease;box-shadow:1px 1px 4px #000;box-shadow:1px 1px 4px #000;box-shadow:1px 1px 4px #000}
.aboutme-image-container img:hover{border:2px solid GOld;cursor:pointer;margin-left:0;transform:scale(1.2) rotate(360deg);transform:scale(1.2) rotate(360deg);transform:scale(1.2) rotate(360deg);transform:scale(1) rotate(-360deg);transform:scale(1.2) rotate(360deg);box-shadow:1px 1px 4px #000;box-shadow:1px 1px 4px #000;box-shadow:1px 1px 4px #000}
/* Related Post Style 2 */
.related-simplify{position:relative;padding:20px 12px 12px 12px;margin:32px auto 24px auto;width:93%;border:4px double rgba(0,0,0,0.2)}
.related-simplify h4{background:#fff;padding:8px 10px;position:absolute;margin:0;font-size:17px;font-weight:700;color:#0099cc;top:-21px;left:2.5%}
.related-simplify ul{margin:0;padding:0}
.related-simplify ul li{position:relative;list-style:none;padding:9px 0;margin:auto;line-height:1.4em;transition:all .3s}
.related-simplify ul li:before{content:'\=';font-family:fontsvg;position:absolute;margin:0 5px 0 2px;color:rgba(0,0,0,0.5);overflow:hidden;font-size:60%;left:10px;transition:all .3s}
.related-simplify ul li:hover:before{content:'\=';font-family:fontsvg;color:#0383d9;}
.related-simplify a{color:#0099cc;font-size:14px;margin:0 0 0 30px;}
.related-simplify a:hover{color:#0383d9;}
.related-simplify ul li:nth-child(n+4) {display:none;}
@media only screen and (max-width:768px){
.related-simplify{padding:15px 0 10px 0;width:100%;border:2px solid #e74c3c;border-left:0;border-right:0}
.related-simplify h4{color:#e74c3c;padding:8px;font-size:15px;top:-18px;left:3.5%}
.related-simplify a{font-size:14px;margin:0}.related-simplify a:hover{color:#e74c3c}
.related-simplify ul li{padding:5px 0}
.related-simplify ul li:before,.related-simplify ul li:hover:before{display:none}}
/* Related Post CSS */
.related-post-item-tooltip{height:54px;overflow:hidden;width:50%;float:left;text-overflow:ellipsis;padding:10px}#related-post .material-icons{font-size:200%;right:20px;color:#607D8B;top:-1px;position:absolute}#related-post{background:#fff;margin:10px}.related-post{margin:30px 0 0;position:relative;padding:0 0 10px}.lol h4 i,.related-post h4 i{margin-right:14px}.lol h4,.related-post h4{border-radius:4px;color:#555;font-size:100%;font-family:&#39;Helvetica&#39;,Arial;text-transform:uppercase;text-align:left;font-weight:600;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);position:relative;padding:15px 15px 12px;margin:0 0 20px}.related-post-style-3,.related-post-style-3 li{margin:0 auto;padding:0!important;list-style:none;word-wrap:break-word}.related-post-style-3 li a{font-family:&#39;Helvetica&#39;,sans-serif;color:#666;font-weight:600!important;font-size:12px;line-height:1.4em}.related-post-style-3 li a:hover{color:#111}.related-post-style-3 .related-post-item{display:inline-block;float:left;border-radius:0px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);width:47%;margin-right:15px;height:auto;padding:0;margin-bottom:20px!important;position:relative;overflow:hidden}.related-post-style-3 .related-post-item:focus{outline:none;border:none}.related-post-style-3 .related-post-item-thumbnail{display:block;margin:0;width:40%;height:100px;float:left}.related-post-style-3 .related-post-item-thumbnail img{width:100%;height:auto!important;transition:all 1s ease-out}.related-post-item:hover .related-post-item-tooltip a{opacity:1}.related-post-item-tooltip a{color:#666!important;transition:transform .6s cubic-bezier(.175,.885,.32,1.275),opacity .3s;text-align:center;font-size:12px!important;position:relative}
@media screen and (max-width:480px){.related-post-style-3 .related-post-item{width:100%!important}.related-post-style-3 .related-post-item-thumbnail{height:100px!important}}
.dropdown-menu{position:absolute;top:100%;right:5px;z-index:99;float:left;min-width:100px;padding:5px 10px;margin:0;font-size:12px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ddd;border-radius:0px;}
.dropdown-menu li{list-style:none!important;margin:0!important;padding-left:0!important;line-height:1.8em!important}
.dropdown-menu li a{color:#333!important;font-weight:400;display:block}
.dropdown-menu li a:hover{color:#e8554e!important}
ul#share-menu{margin:10px 0;padding:3px 10px}
/* facebook comments */
.fbbox-comments {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	background:#f6f6f6;
	border:1px solid #e5e5e5;
	margin: 0 0 20px;
}
.fb-comments{width: 100% !important;}
.fb-comments iframe[style]{width: 100% !important;}
.fb-like-box{width: 100% !important;}
.fb-like-box iframe[style]{width: 100% !important;}
.fb-comments span{width: 100% !important;}
.fb-comments iframe span[style]{width: 100% !important;}
.fb-like-box span{width: 100% !important;}
.fb-like-box iframe span[style]{width: 100% !important;
}
/* Back to top */
#totop{bottom:0;display:none;position:fixed;right:23px;bottom:1px;z-index:999}
#totop a{color:#EEE;display:block;font-weight:bold;line-height:1em;padding:5px;text-align:center;text-shadow:0 1px rgba(255,255,255,0.8);background:#002093;border:1px solid #fff}
#totop-icon:before{content:"\f102";font-family:Fontsvg}
#topads{background-color:#FFF;text-align:center;margin:10px;padding:8px;box-shadow:0 0 2px #333;word-wrap:break-word}
#topads .widget-content{margin-bottom:0}
#topads img{max-width:100%}
/* Subscribe Box */
#subscribe-css{position:relative;padding:20px 0;background:#444;overflow:hidden;border-top:4px solid #eee:none}
.subscribe-wrapper{color:#fff;font-size:16px;line-height:normal;margin:0;text-align:center;text-transform:none;font-weight:400;width:100%}
.subscribe-form{clear:both;display:block;overflow:hidden}
form.subscribe-form{clear:both;display:block;margin:0;width:auto;overflow:hidden}
.subscribe-css-email-field{background:#555;color:#ccc;margin:10px 0;padding:15px 20px;width:35%;border:0}
.subscribe-css-email-button{background:#E73037;color:#fff;cursor:pointer;font-weight:700;padding:14px 30px;margin-left:15px;text-transform:none;font-size:16px;border:0;border-radius:3px;transition:all .6s}
.subscribe-css-email-button:hover{background:#E73037}
#subscribe-css p.subscribe-note{margin:16px;text-align:center;color:rgba(255,255,255,.6);font-size:180%;font-weight:400;line-height:normal}
#subscribe-css p.subscribe-note span{position:relative;overflow:hidden;font-weight:700;transition:all .5s}
#subscribe-css p.subscribe-note span.itatu{font-weight:400;font-style:italic;color:rgba(255,255,255,.6);text-transform:lowercase}
#subscribe-css p.subscribe-note span.itatu:before,#subscribe-css p.subscribe-note span.itatu:after{display:none}
#subscribe-css p.subscribe-note span:before{content:'';position:absolute;bottom:-2px;left:0;width:0;height:3px;margin:10px 0 0;background:rgba(255,255,255,.1);transition:all .5s}
#subscribe-css:hover p.subscribe-note span:before{width:100%}
@media screen and (max-width:768px){
#subscribe-css p.subscribe-note{margin:0 0 20px 0;width:100%;}
.subscribe-wrapper {width:100%;}
}
@media screen and (max-width:640px){
#subscribe-css p.subscribe-note{font-size:140%}
form.subscribe-form{padding:0 10px}
.subscribe-css-email-field,.subscribe-css-email-button{padding:15px 0;text-align:center;margin:10px 0;width:100%}
}
/* FOOTER WRAPPER */
#footer-wrapper{background:$(footer.background.color);margin:0 auto;padding:12px 18px;overflow:hidden;color:$(footer.color);font:$(footer.font);border-top:1px solid $(footer.border.color)}
.footer-left{float:left}
.footer-right{float:right}
#footer-wrapper a{color:$(footer.color)}
#footer-wrapper a:hover{color:$(link.color)}
.tinynav{background:#fff;display:none;margin:4px 0 4px 18px;padding:6px;border:none}
.tinynav option{padding:0 4px}

@media only screen and (max-width:768px){
	.header, .banner468-header {
		float:none;
		max-width:100%;
	}
	.header {
		margin:0 0 12px;
	}
}
@media only screen and (max-width: 768px) {
      .nav { float: none; width: 100%; max-width: 100%; }.active { display: block; }#search-form { width: 100%; margin: 0 0 0 0 !important; }.nav li ul:before { display: none; }.nav > li { float: none; overflow: hidden; }.nav ul { display: block; width: 100%; float: none; }.nav-menu2 li ul { background: #eee; border: none; box-shadow: none; }.nav-menu2 li li ul { background: #f5f5f5; }.nav-menu2 li li a:hover { background: #ddd; }.nav > li.hover > ul, .nav li li.hover ul { position: static; }#search-form { width: 100%; background: #444; }#search-form td.search-box { padding: 0 10px !important; }#search-form td.search-button { padding: 0 10px; width: 1%; }#search-form input#search-box[type="text"] { margin: 0 0 0 0; }#search-form input#search-button[type="submit"] { margin: 0 0 0 0; }
}
@media only screen and (max-width:640px){
	.tinynav { 
		display: inline-block;
	}
	#menu {
		display:none;
	}
}

@media only screen and (max-width:480px){
	#header-wrapper {
		padding:17px 10px 12px;
	}
	.header, .banner468-header {
		text-align:center;
	}
	#content-wrapper, .banner728-top, .banner728-bottom {
		padding:0 10px;
	}
	#post-wrapper, #sidebar-wrapper {
		width:100%;
		max-width:100%;
		float:none;
		margin:12px 0 12px 0;
	}
	.post-container {
		margin:0 0 0 0;
	}
	#nav ul#menu {
		margin:0px 0px 0px 10px;
	}
	#search-form {
		margin:0 10px 0 0;
	}
	#footer-wrapper {
		padding:12px 10px;
		text-align:center;
	}
	.footer-left, .footer-right {
		float:none;
	}
	.tinynav { 
		margin:3px 0 3px 10px;
	}
	.comment .comment-thread.inline-thread .comment {
		margin: 0 0 0 0 !important;
	}
	.related-post {
		padding:8px;
	}
	.comments .comments-content {
		padding:0 8px !important;
	}
	.comments .comments-content .comment-thread ol {
		margin:8px 0 !important;
	}
}

@media screen and (max-width:320px){
	.img-thumbnail {
		width:70px;
		height:70px;
		margin:0 6px 3px 0;
	}
	.img-thumbnail img {
		width:70px;
		height:70px;
	}
	#search-form input#search-box[type="text"] {
		width:80px;
	}
}

/* VIEWPORT */
@-wekit-viewport{width:device-width;max-zoom:1;min-zoom:1}
@-moz-viewport{width:device-width;max-zoom:1;min-zoom:1}
@-ms-viewport{width:device-width;max-zoom:1;min-zoom:1}
@-o-viewport{width:device-width;max-zoom:1;min-zoom:1}
@viewport{width:device-width;max-zoom:1;min-zoom:1}
.inline-ad{display:none}
body{
user-select: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-khtml-user-select: none;
}
.post-body blockquote{text-align:left;background:#1b9a62;position:relative;display:block;padding:55px 20px 20px;color:#fff;border-radius:3px}
.post-body blockquote:before{position:absolute;content:'Catatan';background:#0b6e3e;position:absolute;top:0;padding:9px 0;left:0;right:0;color:#fff;display:block;margin:0;font-weight:700;text-indent:15px;border-radius:3px 3px 0 0}
.post-body blockquote:after{display:inline-block;content:"\f0a1";font-family:fontsvg;font-style:normal;font-weight:normal;font-size:18px;color:#fff;top:0;right:0;padding:9px 14px;position:absolute}
.post-body img{max-width:100%;height:auto}
/*]]></b:skin>
<b:template-skin>
<![CDATA[
/* CSS TATA LETAK */
body#layout div.section{background:transparent;margin:0 0 15px 0;padding:0;border:none;box-sizing:border-box}
body#layout .section h4{display:none}
body#layout .widget-content{margin-top:0}
body#layout #header-wrapper,body#layout #content-wrapper{padding:0 0 0 0}
body#layout #nav{display:none}
.clear{clear:both}
]]></b:template-skin>
<b:if cond='data:blog.pageType != &quot;index&quot;'>
<style type='text/css'>
/* COMMENT */
.comment-form{overflow:hidden}
.comments h3{font-weight:bold;margin:0 0 15px 0;font-size:14px;padding:0 0 0 0}
h4#comment-post-message{display:none;margin:0 0 0 0}
.comments{clear:both;margin-top:10px;margin-bottom:0}
.comments .comments-content{font-size:13px;margin-bottom:8px;background:none repeat scroll 0% 0% #F6F6F6;padding:0 12px;border:1px solid #e5e5e5}
.comments .comments-content .comment-thread ol{text-align:left;margin:12px 0;padding:0}
.comments .avatar-image-container{background:#fff;overflow:hidden;padding:6px;border:1px solid #e5e5e5}
.comments .comment-block{position:relative;background:#fff;padding:10px;margin-left:60px;border:1px solid #e5e5e5}
.comments .comments-content .comment-replies{margin:8px 0;margin-left:60px}
.comments .comments-content .comment-thread:empty{display:none}
.comments .comment-replybox-single{padding:0;margin:8px 0;margin-left:60px}
.comments .comment-replybox-thread{margin:8px 0 0 0;padding:0}
.comments .comments-content .comment{margin-bottom:6px;padding:0}
.comments .comments-content .comment:first-child{padding:0;margin:0}
.comments .comments-content .comment:last-child{padding:0;margin:0}
.comments .comment-thread.inline-thread .comment,.comments .comment-thread.inline-thread .comment:last-child{margin:0 0 5px 30%}
.comment .comment-thread.inline-thread .comment:nth-child(6){margin:0 0 5px 25%}
.comment .comment-thread.inline-thread .comment:nth-child(5){margin:0 0 5px 20%}
.comment .comment-thread.inline-thread .comment:nth-child(4){margin:0 0 5px 15%}
.comment .comment-thread.inline-thread .comment:nth-child(3){margin:0 0 5px 10%}
.comment .comment-thread.inline-thread .comment:nth-child(2){margin:0 0 5px 5%}
.comment .comment-thread.inline-thread .comment:nth-child(1){margin:0 0 5px 0}
.comments .comments-content .comment-thread{margin:0;padding:0}
.comments .comments-content .inline-thread{padding:0 0;margin:0}
.comments .comments-content .icon.blog-author{position:absolute;top:-2px;right:-2px;margin:0;background-image:data:image/png;base64,//3.bp.blogspot.com/-c0gwWErZ6ZI/UbSD539E_qI/AAAAAAAAAPQ/vQuaJw27r1A/s1600/bitmap.png}
;width:59px;height:43px}
.comments .comment .comment-actions a{background:#89C237;display:inline-block;color:#fff;font-weight:bold;font-size:10px;line-height:15px;padding:2px 3px;margin:4px 8px 0 0}
.comments .comment .comment-actions a:hover,.comments .continue a:hover{text-decoration:none;background:#333}
.comments .continue a{background:#89C237;color:#fff;display:inline-block;padding:3px 4px;font-size:10px}
.pesan-komentar{background:#fff;padding:10px 20px;margin:0 8px;border:1px solid #e5e5e5}
.pesan-komentar p{line-height:normal;margin:0 0}
</style>
</b:if>
<script>
//<![CDATA[
/*! //tinynav.viljamis.com v1.2 by @viljamis */
(function(a,k,g){a.fn.tinyNav=function(l){var c=a.extend({active:"selected",header:"",indent:"- ",label:""},l);return this.each(function(){g++;var h=a(this),b="tinynav"+g,f=".l_"+b,e=a("<select/>").attr("id",b).addClass("tinynav "+b);if(h.is("ul,ol")){""!==c.header&&e.append(a("<option/>").text(c.header));var d="";h.addClass("l_"+b).find("a").each(function(){d+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)d+=c.indent;d+=a(this).text()+"</option>"});
e.append(d);c.header||e.find(":eq("+a(f+" li").index(a(f+" li."+c.active))+")").attr("selected",!0);e.change(function(){k.location.href=a(this).val()});a(f).after(e);c.label&&e.before(a("<label/>").attr("for",b).addClass("tinynav_label "+b+"_label").append(c.label))}})}})(jQuery,this,0);
//]]>
</script>
<script>
// TinyNav.js
$(function () {
  $(&#39;#menu&#39;).tinyNav();
});
</script>
<link href='//1.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//28.2bp.blogspot.com' rel='dns-prefetch'/>
<link href='//3.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//4.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//2.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//www.blogger.com' rel='dns-prefetch'/>
<link href='//fonts.googleapis.com' rel='dns-prefetch'/>
<link href='//ajax.googleapis.com' rel='dns-prefetch'/>
<link href='//resources.blogblog.com' rel='dns-prefetch'/>
<link href='//feeds.feedburner.com' rel='dns-prefetch'/>

<!-- Optimasi speed Page PerampokGoogle Blogger -->
<link href='//1.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//28.2bp.blogspot.com' rel='dns-prefetch'/>
<link href='//3.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//4.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//2.bp.blogspot.com' rel='dns-prefetch'/>
<link href='//www.blogger.com' rel='dns-prefetch'/>
<!-- Bootstrap CDN -->
<link href='//maxcdn.bootstrapcdn.com' rel='dns-prefetch'/>
<!-- Google Fonts -->
<link href='//fonts.googleapis.com' rel='dns-prefetch'/>
<!-- Font Awesome -->
<link href='//use.fontawesome.com' rel='dns-prefetch'/>
<!-- Google CDN -->
<link href='//ajax.googleapis.com' rel='dns-prefetch'/>
<link href='//resources.blogblog.com' rel='dns-prefetch'/>
<link href='//feeds.feedburner.com' rel='dns-prefetch'/>
<!-- Microsoft CDN -->
<link href='//ajax.microsoft.com ' rel='dns-prefetch'/>
<link href='//ajax.aspnetcdn.com ' rel='dns-prefetch'/>
<!-- Github -->
<link href='//github.com' rel='dns-prefetch'/>
<!-- CDN JS -->
<link href='//cdnjs.cloudflare.com' rel='dns-prefetch'/>
<!-- Google Analytics -->
<link href='//www.google-analytics.com' rel='dns-prefetch'/>
<!-- Google Services -->
<link href='//themes.googleusercontent.com ' rel='dns-prefetch'/>
<link href='//pagead2.googlesyndication.com' rel='dns-prefetch'/>
<link href='//googleads.g.doubleclick.net' rel='dns-prefetch'/>
<link href='//www.gstatic.com' rel='preconnect'/>
<link href='//www.googletagservices.com' rel='dns-prefetch'/>
<link href='//static.xx.fbcdn.net' rel='dns-prefetch'/>
<link href='//tpc.googlesyndication.com' rel='dns-prefetch'/>
<link href='//apis.google.com' rel='dns-prefetch'/>
<!-- Facebook -->
<link href='//www.facebook.com' rel='dns-prefetch'/>
<link href='//connect.facebook.net' rel='dns-prefetch'/>
<!-- Google Plus -->
<link href='//plus.google.com' rel='dns-prefetch'/>
<!-- Twitter -->
<link href='//twitter.com' rel='dns-prefetch'/>
<link href='//platform.twitter.com' rel='dns-prefetch'/>
<link href='//syndication.twitter.com' rel='dns-prefetch'/>
<link href='//r.twimg.com ' rel='dns-prefetch'/>
<link href='//p.twitter.com ' rel='dns-prefetch'/>
<link href='//cdn.api.twitter.com ' rel='dns-prefetch'/>
<!-- YouTube -->
<link href='//www.youtube.com' rel='dns-prefetch'/>
<!-- Pinterest-->
<link href='//www.pinterest.com' rel='dns-prefetch'/>
<!-- Linkedin -->
<link href='//www.linkedin.com' rel='dns-prefetch'/>
<!-- Vimeo -->
<link href='//player.vimeo.com' rel='dns-prefetch'/>
<!-- Amazon S3 -->
<link href='//s3.amazonaws.com ' rel='dns-prefetch'/>
<!-- BuySellads -->
<link href='//s3.buysellads.com ' rel='dns-prefetch'/>
<link href='//stats.buysellads.com ' rel='dns-prefetch'/>
<link href='//cdn.adpacks ' rel='dns-prefetch'/>
<script> $(&quot;[href$=&#39;css_bundle.css&#39;]&quot;).remove(); </script>
<b:include data='blog' name='google-analytics'/>
<script type='text/javascript'>
//<![CDATA[
$(function() {
$(&quot;.set-1&quot;).mtabs();                                
});
//]]>
</script>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script type='text/javascript'>
//<![CDATA[
var relatedSimply = new Array(); var relatedSimplyNum = 0; var relatedUrls = new Array(); function related_results_labels(json) { for (var i = 0; i < json.feed.entry.length; i++) { var entry = json.feed.entry[i]; relatedSimply[relatedSimplyNum] = entry.title.$t; for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') {relatedUrls[relatedSimplyNum] = entry.link[k].href; relatedSimplyNum++; break;}}}} function removeRelatedDuplicates() { var tmp = new Array(0); var tmp2 = new Array(0); for(var i = 0; i < relatedUrls.length; i++) { if(!contains(tmp, relatedUrls[i])) { tmp.length += 1; tmp[tmp.length - 1] = relatedUrls[i]; tmp2.length += 1; tmp2[tmp2.length - 1] = relatedSimply[i];}} relatedSimply = tmp2; relatedUrls = tmp;} function contains(a, e) { for(var j = 0; j < a.length; j++) if (a[j]==e) return true; return false;} function printRelatedLabels() { var r = Math.floor((relatedSimply.length - 1) * Math.random()); var i = 0; document.write('<ul>'); while (i < relatedSimply.length && i < 20) { document.write('<li><a href="' + relatedUrls[r] + '">' + relatedSimply[r] + '</a></li>'); if (r < relatedSimply.length - 1) { r++; } else { r = 0;} i++;} document.write('</ul>');}
//]]>
</script>
</b:if>
<link href='//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css' rel='stylesheet' type='text/css'/>
<script async='async' src='//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js'/>
<script>
//<![CDATA[
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#f1d600"
    }
  },
  "showLink": false,
  "content": {
    "message": "Kajian Aswaja Tulen",
    "link": "https://ihsankajian.blogspot.com"
  }
})});
//]]>
</script>
<script async='async' src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js' type='text/javascript'/>
<script type='text/javascript'>
 $(function() {
    $(&#39;img&#39;).lazyload({
      placeholder : &quot;https://ihsankajian.blogspot.com&quot;,
        effect      : &quot;fadeIn&quot;,
        threshold   : 1
     });
 });
</script>
&lt;/head&gt;&lt;!--<head/>--&gt;
<body expr:class='&quot;loading&quot; + data:blog.mobileClass'>
<div id='fb-root'/>
<div id='wrapper'>
<header id='header-wrapper'>
<nav class='top-menulite'>
<ul>
<li><a href='#' title='About Us'><svg style='width:16px;height:16px' viewBox='0 0 24 24'>
<path d='M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z' fill='#000000'/>
</svg> About</a></li>
<li><a href='https://ihsankajian.blogspot.com/p/contact-us_3.html' title='Contact us'><svg style='width:12px;height:16px' viewBox='0 0 16 16'>
<path d='M13,17V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H13M23.7,7.67C23.88,7.85 24,8.09 24,8.37C24,8.65 23.89,8.9 23.71,9.08L21.23,11.56C21.05,11.74 20.8,11.85 20.5,11.85C20.25,11.85 20,11.75 19.82,11.57C19,10.84 18.13,10.21 17.15,9.72C16.82,9.56 16.59,9.21 16.59,8.82V5.72C15.14,5.25 13.59,5 12,5C10.4,5 8.85,5.25 7.4,5.73V8.83C7.4,9.23 7.17,9.57 6.84,9.73C5.87,10.22 4.97,10.84 4.18,11.58C4,11.75 3.75,11.86 3.5,11.86C3.2,11.86 2.95,11.75 2.77,11.57L0.29,9.09C0.11,8.91 0,8.66 0,8.38C0,8.1 0.11,7.85 0.29,7.67C3.34,4.78 7.46,3 12,3C16.53,3 20.65,4.78 23.7,7.67M11,10V15H10V10H11M12,10H15V13H13V15H12V10M14,12V11H13V12H14Z' fill='#000000'/>
</svg> Contact</a></li>
<li><a href='https://ihsankajian.blogspot.com/p/privacy-policy-for-kajian-aswaja-tulen.html' title='Privacy Policy'><svg style='width:10px;height:14px' viewBox='4 0 16 16'>
<path d='M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z' fill='#000000'/>
</svg> Privacy Policy</a></li>
<li><a href='https://ihsankajian.blogspot.com/p/desclaimer.html' title='Disclaimer'><svg style='width:12px;height:12px' viewBox='4 0 16 16'>
<path d='M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z' fill='#000000'/>
</svg> Disclaimer</a></li>
<li><a href='https://ihsankajian.blogspot.com/p/daftar-isi.html' title='Sitemap'><svg style='width:12px;height:16px' viewBox='0 0 16 16'>
<path d='M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z' fill='#000000'/>
</svg> Sitemap</a></li>
<li class='bayi rrs'><a href='https://www.blogger.com/follow-blog.g?blogID=5780073839146423150' rel='nofollow' target='_blank' title='rrs feed'><svg style='width:16px;height:16px' viewBox='0 0 24 24'>
<path d='M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z' fill='#fff'/>
</svg><span class='inv'/></a></li>
<li class='bayi gplus'><a href='#' rel='nofollow' target='_blank' title='Follow us on Google+'><svg style='width:14px;height:16px' viewBox='0 0 20 20'>
<path d='M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z' fill='#fff'/>
</svg><span class='inv'/></a></li>
<li class='bayi facebook'><a href='#' rel='nofollow' target='_blank' title='Follow us on Facebook'><svg style='width:16px;height:12px' viewBox='0 0 24 24'>
<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' fill='#fff'/>
</svg><span class='inv'/></a></li>
<li class='bayi youtube-1'><a href='#' rel='nofollow' target='_blank' title='Follow us on youtube-1'><svg style='width:16px;height:24px' viewBox='0 0 24 24'><path d='M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z' fill='#fff'/></svg><span class='youtube-1'/></a></li>
<li class='bayi twitter'><a href='#' rel='nofollow' target='_blank' title='Follow us on Twitter'><svg style='width:16px;height:16px' viewBox='0 0 24 24'>
<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' fill='#fff'/>
</svg><span class='inv'/></a></li>
</ul>
<a href='#' id='pull'>MENU</a>
</nav>
<b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
  <b:widget id='Header1' locked='true' title='Kajian Aswaja Tulen (Header)' type='Header' version='1'>
    <b:widget-settings>
      <b:widget-setting name='displayUrl'>data:image/png;base64,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</b:widget-setting>
      <b:widget-setting name='displayHeight'>141</b:widget-setting>
      <b:widget-setting name='sectionWidth'>600</b:widget-setting>
      <b:widget-setting name='useImage'>true</b:widget-setting>
      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
      <b:widget-setting name='imagePlacement'>BEFORE_DESCRIPTION</b:widget-setting>
      <b:widget-setting name='displayWidth'>894</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
<b:if cond='data:useImage'>
<b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
<b:if cond='data:mobile'>
<div id='header-inner'>
<div class='titlewrapper' style='background: transparent'>
<h1 class='title' style='background: transparent; border-width: 0px'>
<b:include name='title'/>
</h1>
</div>
<b:include name='description'/>
</div>
<b:else/>
<div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                        + &quot;background-position: &quot;                        + data:backgroundPositionStyleStr + &quot;; &quot;                        + data:widthStyleStr                        + &quot;min-height: &quot; + data:height                        + &quot;_height: &quot; + data:height                        + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
<div class='titlewrapper' style='background: transparent'>
<h1 class='title' style='background: transparent; border-width: 0px'>
<b:include name='title'/>
</h1>
</div>
<b:include name='description'/>
</div>
</b:if>
<b:else/>
<div id='header-inner'>
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
<p style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></p>
<b:else/>
<h1 style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></h1>
</b:if>
<a expr:href='data:blog.homepageUrl' style='display: block'>
<img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block' title='Logo Kajian Aswaja Tulen'/>
</a>
<b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
<b:include name='description'/>
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
<p style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></p>
<b:else/>
<h1 style='text-indent:-9999px;margin:0 0 0 0;padding:0 0 0 0;height:0px;'><b:include name='title'/></h1>
</b:if>
</b:if>
</div>
</b:if>
<b:else/>
<div id='header-inner'>
<div class='titlewrapper'>
<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
<p class='title'><b:include name='title'/></p>
<b:else/>
<h1 class='title'><b:include name='title'/></h1>
</b:if>
<b:include name='description'/>
</div>
</div>
</b:if>
</b:includable>
    <b:includable id='description'>
<div class='descriptionwrapper'>
<p class='description'><span><data:description/></span></p>
</div>
</b:includable>
    <b:includable id='title'>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<data:title/>
<b:else/>
<a expr:href='data:blog.homepageUrl'><data:title/></a>
</b:if>
</b:includable>
  </b:widget>
</b:section>
<b:section class='banner468-header' id='banner468-header' showaddelement='yes'/>
<div class='clear'/>
</header>
<nav id='nav'>
<a class='toggleMenu' href='#'><svg style='width:24px;height:24px' viewBox='0 0 24 24'>
<path d='M7,10L12,15L17,10H7Z' fill='#000000'/>
</svg> Menu</a>
<ul class='nav nav-menu2'>
<li><a class='active' href='/' title='Beranda'><svg style='width:14px;height:14px' viewBox='4 0 20 20'>
<path d='M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z' fill='#fff'/>
</svg> Home</a></li>
<li><a href='//dzulcyber.blogspot.com/2015/05/kode-warna-html-css-untuk-para-blogger.html' title='Sumber Hukum'>Sumber Hukum</a>
<ul>
<li><a href='#'>Sub Menu 1</a></li>
<li><a href='#'>Sub Menu 2</a></li>
<li><a href='#'>Sub Menu 3</a></li>
</ul>
</li>
<li><a href='//dzulcyber.blogspot.com/2015/05/4-blogger-template-responsive-ringan.html' title='Fiqih'>Fiqih</a>
<ul>
<li><a href='#'>Sub Menu 1</a></li>
<li><a href='#'>Sub Menu 2</a></li>
<li><a href='#'>Sub Menu 3</a></li>
</ul>
</li>
<li><a href='//dzulcyber.blogspot.com/p/decode-javascript.html' title='Kajian'>Kajian</a></li>
<li><a href='#' title='Sejarah'>Sejarah</a></li>
<li><a href='https://www.blogger.com/blogger.g?blogID=5251037714575195045#overview' title='Gramer'>Gramer</a>
<ul>
<li><a href='#'>Sub Menu 1</a></li>
<li><a href='#'>Sub Menu 2</a></li>
<li><a href='#'>Sub Menu 3</a></li>
</ul>
</li>
<li><a href='https://www.blogger.com/blogger.g?blogID=5251037714575195045#editor/src=sidebar' title='Maroji'>Maroji&#39;</a>
<ul>
<li><a href='#'>Sub Menu 1</a></li>
<li><a href='#'>Sub Menu 2</a></li>
<li><a href='#'>Sub Menu 3</a></li>
</ul>
</li>
</ul>
<form action='/search' id='search-form' method='get'><table><tbody><tr><td class='search-box'><input id='search-box' name='q' onblur='if(this.value==&apos;&apos;)this.value=this.defaultValue;' onfocus='if(this.value==this.defaultValue)this.value=&apos;&apos;;' type='text' value='Search...' vinput=''/></td>
<td class='search-button'><input id='search-button' type='submit' value='GO'/></td></tr></tbody></table></form>
<div class='clear'/>
</nav>
<div class='clear'/>
<b:section class='banner728-top' id='banner728-top' showaddelement='yes'/>
<div id='content-wrapper'>
<div id='post-wrapper'>
<div class='post-container'>
<b:section class='main' id='main' showaddelement='no'>
  <b:widget id='Blog1' locked='true' title='Posting Blog' type='Blog' version='1'>
    <b:widget-settings>
      <b:widget-setting name='commentLabel'>comments</b:widget-setting>
      <b:widget-setting name='showShareButtons'>false</b:widget-setting>
      <b:widget-setting name='authorLabel'>Posted by</b:widget-setting>
      <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
      <b:widget-setting name='timestampLabel'>at</b:widget-setting>
      <b:widget-setting name='reactionsLabel'>Reactions:</b:widget-setting>
      <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
      <b:widget-setting name='style.layout'>1x1</b:widget-setting>
      <b:widget-setting name='showLocation'>false</b:widget-setting>
      <b:widget-setting name='showTimestamp'>true</b:widget-setting>
      <b:widget-setting name='postsPerAd'>1</b:widget-setting>
      <b:widget-setting name='style.bordercolor'>#dddddd</b:widget-setting>
      <b:widget-setting name='backlinksLabel'>Links to this post</b:widget-setting>
      <b:widget-setting name='showDateHeader'>false</b:widget-setting>
      <b:widget-setting name='style.textcolor'>#333333</b:widget-setting>
      <b:widget-setting name='showCommentLink'>true</b:widget-setting>
      <b:widget-setting name='style.urlcolor'>#0099cc</b:widget-setting>
      <b:widget-setting name='showAuthor'>true</b:widget-setting>
      <b:widget-setting name='style.linkcolor'>#0099cc</b:widget-setting>
      <b:widget-setting name='style.bgcolor'>#dddddd</b:widget-setting>
      <b:widget-setting name='showLabels'>true</b:widget-setting>
      <b:widget-setting name='postLabelsLabel'>Labels:</b:widget-setting>
      <b:widget-setting name='showBacklinks'>false</b:widget-setting>
      <b:widget-setting name='showInlineAds'>false</b:widget-setting>
      <b:widget-setting name='showReactions'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='top'>
<b:include data='posts' name='breadcrumb'/>
<b:if cond='data:mobile == &quot;false&quot;'>
<div class='blog-posts hfeed'>
<b:include data='top' name='status-message'/>
<data:defaultAdStart/>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.isDateStart'>
<b:if cond='data:post.isFirstPost == &quot;false&quot;'>
&lt;/div&gt;&lt;/div&gt;
</b:if>
</b:if>
<b:if cond='data:post.isDateStart'>
&lt;div class=&quot;date-outer&quot;&gt;
</b:if>
<b:if cond='data:post.isDateStart'>
&lt;div class=&quot;date-posts&quot;&gt;
</b:if>
<div class='post-outer'>
<b:include data='post' name='post'/>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<b:include data='post' name='comment_picker'/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:include data='post' name='comment_picker'/>
</b:if>
</div>
<b:if cond='data:post.includeAd'>
<b:if cond='data:post.isFirstPost'>
<data:defaultAdEnd/>
<b:else/>
<data:adEnd/>
</b:if>
<div class='inline-ad'>
<data:adCode/>
</div>
<data:adStart/>
</b:if>
</b:loop>
<b:if cond='data:numPosts != 0'>
&lt;/div&gt;&lt;/div&gt;
</b:if>
<data:adEnd/>
</div>
<b:include name='nextprev'/>
<b:include name='feedLinks'/>
<b:if cond='data:top.showStars'>
<script async='async' src='//www.google.com/jsapi' type='text/javascript'/>
<script type='text/javascript'>google.load(&quot;annotations&quot;,&quot;1&quot;,{&quot;locale&quot;:&quot;<data:top.languageCode/>&quot;});function initialize(){google.annotations.setApplicationId(<data:top.blogspotReviews/>);google.annotations.createAll();google.annotations.fetch();}
google.setOnLoadCallback(initialize);</script>
</b:if>
<b:else/>
<b:include name='mobile-main'/>
</b:if>
<b:if cond='data:top.showDummy'>
<data:top.dummyBootstrap/>
</b:if>
</b:includable>
    <b:includable id='backlinkDeleteIcon' var='backlink'>
<span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
<a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</b:includable>
    <b:includable id='backlinks' var='post'>
<a name='links'/><h4><data:post.backlinksLabel/></h4>
<b:if cond='data:post.numBacklinks != 0'>
<dl class='comments-block' id='comments-block'>
<b:loop values='data:post.backlinks' var='backlink'>
<div class='collapsed-backlink backlink-control'>
<dt class='comment-title'>
<span class='backlink-toggle-zippy'>&#160;</span>
<a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
<b:include data='backlink' name='backlinkDeleteIcon'/>
</dt>
<dd class='comment-body collapseable'>
<data:backlink.snippet/>
</dd>
<dd class='comment-footer collapseable'>
<span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
<span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
</dd>
</div>
</b:loop>
</dl>
</b:if>
<p class='comment-footer'>
<a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
</p>
</b:includable>
    <b:includable id='breadcrumb' var='posts'>
<b:if cond='data:blog.homepageUrl != data:blog.url'>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span><data:blog.pageName/></span>
</div>
<b:else/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<div class='breadcrumbs'><span itemscope='' itemtype='://data-vocabulary.org/Breadcrumb'><a expr:href='data:blog.homepageUrl' itemprop='url'><span itemprop='title'>Home</span></a></span> &#187; <b:loop values='data:post.labels' var='label'><span itemscope='' itemtype='//data-vocabulary.org/Breadcrumb'><a expr:href='data:label.url + &quot;?&amp;max-results=8&quot;' itemprop='url'><span itemprop='title'><data:label.name/></span></a></span><b:if cond='data:label.isLast != &quot;true&quot;'> &#187; </b:if> </b:loop> &#187; <span><data:post.title/></span>
</div>
<b:else/>
<div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span>Uncategories</span> &#187; <span><data:post.title/></span></div>
</b:if>
</b:loop>
<b:else/>
<b:if cond='data:blog.pageType == &quot;archive&quot;'>
<div class='breadcrumbs'> <span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span>Archive for <data:blog.pageName/></span>
</div>
<b:else/>
<b:if cond='data:blog.searchQuery'>
<div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span><data:blog.pageName/></span>
</div>
<b:else/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<div class='breadcrumbs'>
<b:if cond='data:blog.pageName == &quot;&quot;'> <span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span>All post</span>
<b:else/>
<span><a expr:href='data:blog.homepageUrl' rel='nofollow'>Home</a></span> &#187; <span><data:blog.pageName/></span>
</b:if>
</div>
</b:if>
</b:if>
</b:if>
</b:if>
</b:if>
</b:if>
</b:includable>
    <b:includable id='comment-form' var='post'>
<div class='comment-form'>
<a name='comment-form'/>
<b:if cond='data:mobile'>
<h4 id='comment-post-message'>
<a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
<div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
<data:blogTeamBlogMessage/>
<a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
<iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display:block' width='100%'/>
<b:else/>
<h4 id='comment-post-message'><data:postCommentMsg/></h4>
<div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
<data:blogTeamBlogMessage/>
<a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
<iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
</b:if>
<data:post.friendConnectJs/>
<data:post.cmtfpIframe/>
<script type='text/javascript'>BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;,&#39;<data:post.communityId/>&#39;);</script>
</div>
</b:includable>
    <b:includable id='commentDeleteIcon' var='comment'>
<span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
<b:if cond='data:showCmtPopup'>
<div class='goog-toggle-button'>
<div class='goog-inline-block comment-action-icon'/>
</div>
<b:else/>
<a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</b:if>
</span>
</b:includable>
    <b:includable id='comment_count_picker' var='post'>
<b:if cond='data:post.commentSource == 1'>
<span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.canonicalUrl'>
</span>
<b:else/>
<a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
<data:post.commentLabelFull/>:
</a>
</b:if>
</b:includable>
    <b:includable id='comment_picker' var='post'>
<b:if cond='data:post.commentSource == 1'>
<b:include data='post' name='iframe_comments'/>
<b:else/>
<b:if cond='data:post.showThreadedComments'>
<b:include data='post' name='threaded_comments'/>
<b:else/>
<b:include data='post' name='comments'/>
</b:if>
</b:if>
</b:includable>
    <b:includable id='comments' var='post'>
<div class='comments' id='comments'>
<a name='comments'/>
<b:if cond='data:post.allowComments'>
<h3><b:if cond='data:post.numComments == 0'> 0 Response to &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments == 1'> 1 Response to &quot;<data:blog.pageName/>&quot; </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Responses to &quot;<data:blog.pageName/>&quot; </b:if></h3>
<b:if cond='data:post.commentPagingRequired'>
<span class='paging-control-container'>
<b:if cond='data:post.hasOlderLinks'>
<a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
&#160;
<a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
&#160;
</b:if>
<data:post.commentRangeText/>
<b:if cond='data:post.hasNewerLinks'>
&#160;
<a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
&#160;
<a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
</b:if>
</span>
</b:if>
<div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
<dl expr:class='data:post.avatarIndentClass' id='comments-block'>
<b:loop values='data:post.comments' var='comment'>
<dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
<b:if cond='data:comment.favicon'>
<img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
</b:if>
<a expr:name='data:comment.anchorName'/>
<b:if cond='data:blog.enabledCommentProfileImages'>
<data:comment.authorAvatarImage/>
</b:if>
<b:if cond='data:comment.authorUrl'>
<a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
<b:else/>
<data:comment.author/>
</b:if>
<data:commentPostedByMsg/>
</dt>
<dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
<b:if cond='data:comment.isDeleted'>
<span class='deleted-comment'><data:comment.body/></span>
<b:else/>
<p>
<data:comment.body/>
</p>
</b:if>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a expr:href='data:comment.url' title='comment permalink'>
<data:comment.timestamp/>
</a>
<b:include data='comment' name='commentDeleteIcon'/>
</span>
</dd>
</b:loop>
</dl>
</div>
<b:if cond='data:post.commentPagingRequired'>
<span class='paging-control-container'>
<a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
<data:post.oldestLinkText/>
</a>
<a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
<data:post.olderLinkText/>
</a>
&#160;
<data:post.commentRangeText/>
&#160;
<a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
<data:post.newerLinkText/>
</a>
<a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
<data:post.newestLinkText/>
</a>
</span>
</b:if>
<p class='comment-footer'>
<b:if cond='data:post.embedCommentForm'>
<b:if cond='data:post.allowNewComments'>
<b:include data='post' name='comment-form'/>
<b:else/>
<data:post.noNewCommentsText/>
</b:if>
<b:else/>
<b:if cond='data:post.allowComments'>
<a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
</b:if>
</b:if>
</p>
</b:if>
<b:if cond='data:showCmtPopup'>
<div id='comment-popup'>
<iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
</iframe>
</div>
</b:if>
<div id='backlinks-container'>
<div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
<b:if cond='data:post.showBacklinks'>
<b:include data='post' name='backlinks'/>
</b:if>
</div>
</div>
</div>
</b:includable>
    <b:includable id='feedLinks'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:feedLinks'>
<div class='blog-feeds'>
<b:include data='feedLinks' name='feedLinksBody'/>
</div>
</b:if>
<b:else/>
<div class='post-feeds'>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.allowComments'>
<b:if cond='data:post.feedLinks'>
<b:include data='post.feedLinks' name='feedLinksBody'/>
</b:if>
</b:if>
</b:loop>
</div>
</b:if>
</b:includable>
    <b:includable id='feedLinksBody' var='links'>
<div class='feed-links'>
<data:feedLinksMsg/>
<b:loop values='data:links' var='f'>
<a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
</b:loop>
</div>
</b:includable>
    <b:includable id='iframe_comments' var='post'>
<b:if cond='data:post.allowIframeComments'>
<script async='async' expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
<div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
<b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
<a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
</b:if>
</b:if>
</b:includable>
    <b:includable id='mobile-index-post' var='post'>
<div class='mobile-date-outer date-outer'>
<div class='mobile-post-outer'>
<b:if cond='data:post.thumbnailUrl'>
<div class='mobile-index-thumbnail'>
<div class='Image'>
<img expr:src='data:post.thumbnailUrl'/>
</div>
</div>
<b:else/>
<div class='mobile-index-thumbnail'>
<div class='Image'>
<img expr:alt='data:post.title' expr:title='data:post.title' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wAALCABIAEgBAREA/8QASwAAAgICAwEAAAAAAAAAAAAABAUDBgIHAAEICRAAAgEDAwMDAgUEAwAAAAAAAQIDAAQFERIxBhMhFCJRFkEVI1VhkwclMlJxkaH/2gAIAQEAAD8A+kyLRiJRSpU4Skp6hwwuvTG4G7dt3bTs1+N1OilCy+3jmlE0ZJJNK5o6fRrR8a0VoqKzMdFUEk/sPJrX7dWXN8uQjiiSOIWsrRt53+NBrVCqzT/1Bkw6YqB7ZZ4ntEaWTeQ+3cU1X7cLWzxsmjSRCGR0V1PyGGoNByx0qmSm0Qpgi1NLB37eaLXTuROmvxuBFaXsrC+sMgyzwiNISY7lpDsTY40Pk/I40qq5CfHyZL0MOSVbQvo9523Pt/ZQNdaFy1je5LKRpZW5lgfbb2RiPcRo4htX3D7/AHbWvSdhZGxx1pak7jBbxxk/JRQKxlSlM6UfFTGMVR+qs3d+vgw9jIYpJSgkkB0I7nCg/wDprUXUeb9RKbS2ci3gJRPP/bH5ZuSaqVNcRkTYzlJGb00+i3CqxB2/7jTh05BrcHRXUl+Mtc9P5SYzyRFxBOTqx7fKk/cEeRWypRSmcc0RDwKZR1MMbYTOJ3toe5yZCgLfHNCfSnTP6TZfwrXPpTpn9Jsv4VrB+lumgD/aLH+FambC4eG59UljbrcA6iURjePGnNclpTPWULVVZ+q721OWULDvtp41g1U6MpkCNr58ka1OeqMvHdS3qi3/AA6LLCw7RQ90+dpk361Yc5mLzG3+JhhEZW6kuBJuXU/lR7hpVJ+vMx9MC72W/rPVhNuw7O32u7rprVjynVd7ZZfE26LEYXht3vGKklfUNsXb58VFLmeorrJ3/oIYJLWwvI7aSEr+ZLr5dgxIA20PZ5fM3+Wu4xc45La3v5IO2wImdFPK+eafTmsIX8VQsrgcrdrcTQ27mT8WkZVBGrwPtO7njVaYy4bMF5sWtk5t5M4Lz1m5e2Itd2hHO6rP1DYXd5ksLLBC0iQSXRlI09oeLauv/JqhfSWb9EF9JJqMHp2/GvqdO1t5520xyPTWfyP4xcoXg0jtUggKKTcC3UEaEn2+6hsphczMMhCMVJI1zexXkUwcKIiVHcUjUe77aUZY2FxaZq7lmwJmaXJSSRXxZB2kY8jzrVrnehYpKZRSCkd51Hc217ewRJCVt7cOpOpJZdrSA6HgI3isR1Zcm4VRHD23junUnXX2l+z9/uIyTRy9RXj4K6vdkPfSdYYV8hCzhNu7z8tS246uuxKTEkBiNqki6q2u5oDL/lrpyNNvJpnJl7o5W1tQY1jktYpX/KdyS5IIBU6KPHLUwlkFK5pKAil1pnFLUYxmNkkeRodZJGlZ319zd1djAn404FdjA4bYE9OfCxqrbjuVYxtADcgaHz81mMFiVI9krIJFk7TSs0ZZRoCUPg1F9P4dQR25du3TZ3W2j2lAdvGoDEA12mMs7eZJke53ooUE3DnVQdQrefIHxUsstLJpK//Z'/>
</div>
</div>
</b:if>
<a expr:href='data:post.url' expr:title='data:post.title'>
<h3 class='mobile-index-title entry-title' itemprop='name'>
<data:post.title/>
</h3>
</a>
<div class='mobile-index-contents'>
<div class='post-body'>
<b:if cond='data:post.snippet'><data:post.snippet/></b:if>
</div>
</div>
<div style='clear: both;'/>
</div>
</div>
</b:includable>
    <b:includable id='mobile-main' var='top'>
<div class='blog-posts hfeed'>
<b:include data='top' name='status-message'/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<b:loop values='data:posts' var='post'>
<b:include data='post' name='mobile-index-post'/>
</b:loop>
<b:else/>
<b:loop values='data:posts' var='post'>
<b:include data='post' name='mobile-post'/>
</b:loop>
</b:if>
</div>
<b:include name='mobile-nextprev'/>
</b:includable>
    <b:includable id='mobile-nextprev'>
<div class='blog-pager' id='blog-pager'>
<b:if cond='data:newerPageUrl'>
<div class='mobile-link-button' id='blog-pager-newer-link'>
<a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
</div>
</b:if>
<b:if cond='data:olderPageUrl'>
<div class='mobile-link-button' id='blog-pager-older-link'>
<a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
</div>
</b:if>
<div class='mobile-link-button' id='blog-pager-home-link'>
<a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
</div>
<div class='mobile-desktop-link'>
<a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
</div>
</div>
<div class='clear'/>
</b:includable>
    <b:includable id='mobile-post' var='post'>
<div class='date-outer'>
<div class='date-posts'>
<div class='post-outer'>
<div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='//schema.org/BlogPosting'>
<b:if cond='data:post.thumbnailUrl'>
<meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
</b:if>
<meta expr:content='data:blog.blogId' itemprop='blogId'/>
<meta expr:content='data:post.id' itemprop='postId'/>
<a expr:name='data:post.id'/>
<b:if cond='data:post.title'>
<h3 class='post-title entry-title' itemprop='name'>
<b:if cond='data:post.link'>
<a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<b:if cond='data:post.url'>
<b:if cond='data:blog.url != data:post.url'>
<a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
<b:else/>
<data:post.title/>
</b:if>
</b:if>
</h3>
</b:if>
<div class='post-header'>
<div class='post-header-line-1'/>
</div>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
<data:post.body/>
<div style='clear: both;'/>
</div>
<div class='post-footer'>
<div class='post-footer-line post-footer-line-1'>
<span class='post-author vcard'>
<b:if cond='data:top.showAuthor'>
<b:if cond='data:post.authorProfileUrl'>
<span class='fn' itemprop='author' itemscope='itemscope' itemtype='//schema.org/Person'>
<meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
<a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
<span itemprop='name'><data:post.author/></span>
</a>
</span>
<b:else/>
<span class='fn' itemprop='author' itemscope='itemscope' itemtype='//schema.org/Person'>
<span itemprop='name'><data:post.author/></span>
</span>
</b:if>
</b:if>
</span>
<span class='post-timestamp'>
<b:if cond='data:top.showTimestamp'>
<data:top.timestampLabel/>
<b:if cond='data:post.url'>
<meta expr:content='data:post.canonicalUrl' itemprop='url'/>
<a class='timestamp-link' expr:href='data:post.url' expr:title='data:post.title' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
</b:if>
</b:if>
</span>
<span class='post-comment-link'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:post.allowComments'>
<b:include data='post' name='comment_count_picker'/>
</b:if>
</b:if>
</b:if>
</span>
</div>
<div class='post-footer-line post-footer-line-2'>
<b:if cond='data:top.showMobileShare'>
<div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
<a href='javascript:void(0);'><data:shareMsg/></a>
</div>
</b:if>
<b:if cond='data:top.showDummy'>
<div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
</b:if>
</div>
</div>
</div>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<b:include data='post' name='comment_picker'/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:include data='post' name='comment_picker'/>
</b:if>
</div>
</div>
</div>
</b:includable>
    <b:includable id='nextprev'>
<div class='blog-pager' id='blog-pager'>
<b:if cond='data:newerPageUrl'>
<span id='blog-pager-newer-link'>
<a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
</span>
</b:if>
<b:if cond='data:olderPageUrl'>
<span id='blog-pager-older-link'>
<a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
</span>
</b:if>
<a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
<b:if cond='data:mobileLinkUrl'>
<div class='blog-mobile-link'>
<a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
</div>
</b:if>
</div>
<div class='clear'/>
</b:includable>
    <b:includable id='post' var='post'>
<article class='post hentry'>
<b:switch var='data:blog.pageType'>
<b:case value='static_page'/>
<div>
<b:if cond='data:post.title'>
<h1 class='post-title entry-title'>
<b:if cond='data:post.link'>
<a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<b:if cond='data:post.url'>
<b:if cond='data:blog.url != data:post.url'>
<a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
<b:else/>
<data:post.title/>
</b:if>
</b:if>
</h1>
</b:if>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
<data:post.body/>
<div style='clear: both;'/>
</div>
</div>
<b:case value='item'/>
<div itemprop='blogPost' itemscope='itemscope' itemtype='//schema.org/BlogPosting'>
<b:if cond='data:post.firstImageUrl'>
<meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
</b:if>
<a expr:name='data:post.id'/>
<b:if cond='data:post.title'>
<h1 class='post-title entry-title' itemprop='name headline'>
<b:if cond='data:post.link'>
<a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<b:if cond='data:post.url'>
<b:if cond='data:blog.url != data:post.url'>
<a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
<b:else/>
<data:post.title/>
</b:if>
</b:if>
</h1>
</b:if>
<div class='post-label-block'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<div class='post-vinfo'>
<b:if cond='data:top.showAuthor'>
<b:if cond='data:post.authorProfileUrl'>
<span class='author-info'>
<svg style='width:10px;height:10px' viewBox='0 0 24 24'>
<path d='M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z' fill='#000000'/>
</svg>
<span class='vcard' itemprop='author' itemscope='itemscope' itemtype='//schema.org/Person'>
<span class='fn'>
<a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
<span itemprop='name'><data:post.author/></span>
</a>
</span>
</span>
</span>
<b:else/>
<span class='author-info'>
<svg style='width:10px;height:10px' viewBox='0 0 24 24'>
<path d='M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z' fill='#000000'/>
</svg>
<span class='fn'>
<span itemprop='name'><data:post.author/></span>
</span>
</span>
</b:if>
</b:if>
<b:if cond='data:top.showTimestamp'>
<b:if cond='data:post.url'>
<span class='time-info'>
<svg style='width:10px;height:10px' viewBox='0 0 24 24'>
<path d='M17.3,18C19,16.5 20,14.4 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12C4,14.4 5,16.5 6.7,18C8.2,16.7 10,16 12,16C14,16 15.9,16.7 17.3,18M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,9A1,1 0 0,1 8,10A1,1 0 0,1 7,11A1,1 0 0,1 6,10A1,1 0 0,1 7,9M10,6A1,1 0 0,1 11,7A1,1 0 0,1 10,8A1,1 0 0,1 9,7A1,1 0 0,1 10,6M17,9A1,1 0 0,1 18,10A1,1 0 0,1 17,11A1,1 0 0,1 16,10A1,1 0 0,1 17,9M14.4,6.1C14.9,6.3 15.1,6.9 15,7.4L13.6,10.8C13.8,11.1 14,11.5 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12C10,11 10.7,10.1 11.7,10L13.1,6.7C13.3,6.1 13.9,5.9 14.4,6.1Z' fill='#000000'/>
</svg> <a class='timestamp-link' expr:href='data:post.url' expr:title='data:post.title' rel='bookmark' title='permanent link'><abbr class='published updated' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
</span>
</b:if>
</b:if>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:post.allowComments'>
<span class='comment-info'>
<svg style='width:10px;height:10px' viewBox='0 0 24 24'>
<path d='M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z' fill='#000000'/>
</svg> <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'> <b:if cond='data:post.numComments == 0'>0</b:if> <b:if cond='data:post.numComments == 1'>1</b:if><b:if cond='data:post.numComments &gt; 1'><data:post.numComments/></b:if>
</a>
</span>
</b:if>
</b:if>
</b:if>
<b:if cond='data:post.labels'>
<span class='label-info'>
<b:loop values='data:post.labels' var='label'>
<svg style='width:10px;height:10px' viewBox='0 0 24 24'>
<path d='M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z' fill='#000000'/>
</svg> <a expr:href='data:label.url + &quot;?max-results=5&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
</b:loop>
</span>
</b:if>
</div>
</b:if>
</div>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='description articleBody'>
<div style='clear'/>
<div expr:id='&quot;post1&quot; + data:post.id'/>
<div class='related-simplify'>
<b:if cond='data:post.labels'>
<b:loop values='data:post.labels' var='label'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&amp;max-results=3&quot;' type='text/javascript'/>
</b:if>
</b:loop>
</b:if>
<h4>Baca Juga</h4>
<script type='text/javascript'>removeRelatedDuplicates();printRelatedLabels();</script>
</div>
<div expr:id='&quot;post2&quot; + data:post.id'><p><data:post.body/></p></div>
<script type='text/javascript'>var obj0=document.getElementById(&quot;post1<data:post.id/>&quot;);var obj1=document.getElementById(&quot;post2<data:post.id/>&quot;);var s=obj1.innerHTML;var t=s.substr(0,s.length/2);var r=t.lastIndexOf(&quot;&lt;br&gt;&quot;);if(r&gt;0){obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+4);}</script>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<h2 class='sharetitle'><span>Share this</span></h2>
<script type='text/javascript'>/*<![CDATA[*/var siteurl=window.location.href;document.write('<div class="sharebrow"><div class="sharede"> \
<a class="gp" href="https://plus.google.com/share?url='+siteurl+'" target="_blank" title="Share to Google+">\
    Google</a> \
<a class="fb" href="https://www.facebook.com/sharer/sharer.php?u='+siteurl+'" target="_blank" title="Share to Facebook">\
    Facebook</a> \
<a class="tw" href="https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+siteurl+'" target="_blank" title="Share to Twitter">\
    Twitter</a> \
    <span class="pl" data-target="#share-menu">More</span> \
<ul class="dropdown-menu" id="share-menu"> \
    <li><a href="//www.digg.com/submit?url='+siteurl+'" target="_blank" title="Share This On Digg">Digg</a></li> \
    <li><a href="//www.linkedin.com/shareArticle?mini=true&amp;url='+siteurl+'" target="_blank" title="Share This On Linkedin">Linkedin</a></li> \
    <li><a href="//www.stumbleupon.com/submit?url='+siteurl+'&amp;title='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Stumbleupon">Stumbleupon</a></li> \
    <li><a href="//delicious.com/post?url='+siteurl+'&amp;title='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Delicious">Delicious</a></li> \
    <li><a href="//www.tumblr.com/share/link?url='+siteurl+'&name='+encodeURIComponent(document.title)+'&description='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Tumblr">Tumblr</a></li> \
    <li><a href="//bufferapp.com/add?text='+encodeURIComponent(document.title)+'&url='+siteurl+'" target="_blank" title="Share This On BufferApp">BufferApp</a></li> \
    <li><a href="https://getpocket.com/save?url='+siteurl+'&title='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Pocket">Pocket</a></li> \
    <li><a href="//www.evernote.com/clip.action?url='+siteurl+'&title='+encodeURIComponent(document.title)+'" target="_blank" title="Share This On Evernote">Evernote</a></li> \
    </ul> \
</div><div class="clear"></div></div> \
');var button=document.querySelector(".pl");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.display="block"==t.style.display?"none":"block"});/*]]>*/</script>
<div style='clear'/>
<div id='aboutme'><div class='aboutme-image-container'>
<img alt='abaoutme' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCABLAGQDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAIEBQEDBv/EACwQAAIBAgUCBQMFAAAAAAAAAAABAgMRBAUSITETciIkNFFxFTKCQWFikcH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EABkRAQEAAwEAAAAAAAAAAAAAAAABAhExIf/aAAwDAQACEQMRAD8A90MhUMi3MyOnEdA6T4rF08Ko9TU3LhIoMXOG54uMYpvTBcGVsm1H1il+lKdvlFOFxdPFJ6FJNcpmD0p2+yX9MsyqThi9Mk1qi1uZK2xssUZispJWK9kMxJbgKA1gAdDoVDIDqGOI6AGTiqc1jak438VrGuTYyCilWXMXv8E5cXh1LeXT03397HjSpSeKpyk34Xc9nV3vZ3vc9sIurWlUa+3ZfJyx665eRUcYwrO7zlYtrDMVgI+QCwBj1QyFQyDTIHJRi5SaSXLYGVnMn1KcL7WbsY2KK2a0YbUk6j9+EZ9fMK9daW1GPskTHDNq0s601htf72EoY6vQ2i04t3s0T32sBMmlW7a1HNac7KrFwfut0WqSlFSi00+Gj5s0cok71IX2snYuVFjSYjHfAjNSVgDAD0Q6EQ6A6jJzh+Ygv4f6ayMfN35pdiMrYhAAJWAAAAuyl+Yl2kJZlT80+1mxl412Ix2KykEA6ADpjJnmh0A6MbNfWfijXRj5p619qMqojAAJUAAAAryv1f4skKst9Wu1iMrYYrYMVloFwFAD/9k=' title='aboutme'/></div>
<div class='name-author'><h3>About Me</h3></div>
<div class='aboutme-text'>
Muhammad Ihsan berasal dari Boyolali, tinggal di Kedunggobyak, Sobokerto, Ngemplak Boyolali Jateng. Saya baru belajar mendesain blog sekaligus menjadi admin blog ini.
</div></div>
<div style='clear'/>
<div class='related-post' id='related-post'/>
<script type='text/javascript'>var labelArray=[<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
</b:loop></b:if>];var relatedPostConfig={homePage:&quot;<data:blog.homepageUrl/>&quot;,widgetTitle:&quot;&lt;h4&gt;&lt;a center=&#39;&#39; class=&#39;text-action&#39; download=&#39;&#39; hidden=&#39;&#39; horizontal=&#39;&#39; href=&#39;https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_question_answer_black_24px.svg&#39; layout=&#39;&#39; on-tap=&#39;{{ trackDownloadSvg }}&#39;&gt; &lt;core-icon aria-label=&#39;file-download&#39; class=&#39;download&#39; icon=&#39;file-download&#39; role=&#39;img&#39;&gt;&lt;svg fit=&#39;&#39; height=&#39;100%&#39; preserveAspectRatio=&#39;xMidYMid meet&#39; style=&#39;pointer-events: none; display: block;&#39; viewBox=&#39;0 0 24 24&#39; width=&#39;100%&#39;&gt;&lt;g&gt;&lt;path d=&#39;M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z&#39;/&gt;&lt;/g&gt;&lt;/svg&gt;&lt;/core-icon&gt; SVG &lt;/a&gt; Related Post&lt;/h4&gt;&quot;,numPosts:6,summaryLength:370,titleLength:&quot;auto&quot;,thumbnailSize:300,noImage:&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC&quot;,containerId:&quot;related-post&quot;,newTabLink:false,moreText:&quot;Read More&quot;,widgetStyle:3,callBack:function(){}};</script>
<div style='clear'/>
</b:if>
</div>
</div>
<b:default/>
<b:if cond='data:post.thumbnailUrl'>
<a expr:href='data:post.url' expr:title='data:post.title'><div class='img-thumbnail'><img expr:alt='data:post.title' expr:src='data:post.thumbnailUrl' expr:title='data:post.title' height='74' width='74'/></div>
</a>
<b:else/>
<b:if cond='data:post.firstImageUrl'>
<a expr:href='data:post.url' expr:title='data:post.title'><div class='img-thumbnail'><img expr:alt='data:post.title' expr:src='data:post.firstImageUrl' expr:title='data:post.title' height='74' width='74'/></div>
</a>
<b:else/>
<a expr:href='data:post.url' expr:title='data:post.title'><div class='img-thumbnail'><img expr:alt='data:post.title' expr:title='data:post.title' height='74' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wAALCABIAEgBAREA/8QASwAAAgICAwEAAAAAAAAAAAAABAUDBgIHAAEICRAAAgEDAwMDAgUEAwAAAAAAAQIDAAQFERIxBhMhFCJRFkEVI1VhkwclMlJxkaH/2gAIAQEAAD8A+kyLRiJRSpU4Skp6hwwuvTG4G7dt3bTs1+N1OilCy+3jmlE0ZJJNK5o6fRrR8a0VoqKzMdFUEk/sPJrX7dWXN8uQjiiSOIWsrRt53+NBrVCqzT/1Bkw6YqB7ZZ4ntEaWTeQ+3cU1X7cLWzxsmjSRCGR0V1PyGGoNByx0qmSm0Qpgi1NLB37eaLXTuROmvxuBFaXsrC+sMgyzwiNISY7lpDsTY40Pk/I40qq5CfHyZL0MOSVbQvo9523Pt/ZQNdaFy1je5LKRpZW5lgfbb2RiPcRo4htX3D7/AHbWvSdhZGxx1pak7jBbxxk/JRQKxlSlM6UfFTGMVR+qs3d+vgw9jIYpJSgkkB0I7nCg/wDprUXUeb9RKbS2ci3gJRPP/bH5ZuSaqVNcRkTYzlJGb00+i3CqxB2/7jTh05BrcHRXUl+Mtc9P5SYzyRFxBOTqx7fKk/cEeRWypRSmcc0RDwKZR1MMbYTOJ3toe5yZCgLfHNCfSnTP6TZfwrXPpTpn9Jsv4VrB+lumgD/aLH+FambC4eG59UljbrcA6iURjePGnNclpTPWULVVZ+q721OWULDvtp41g1U6MpkCNr58ka1OeqMvHdS3qi3/AA6LLCw7RQ90+dpk361Yc5mLzG3+JhhEZW6kuBJuXU/lR7hpVJ+vMx9MC72W/rPVhNuw7O32u7rprVjynVd7ZZfE26LEYXht3vGKklfUNsXb58VFLmeorrJ3/oIYJLWwvI7aSEr+ZLr5dgxIA20PZ5fM3+Wu4xc45La3v5IO2wImdFPK+eafTmsIX8VQsrgcrdrcTQ27mT8WkZVBGrwPtO7njVaYy4bMF5sWtk5t5M4Lz1m5e2Itd2hHO6rP1DYXd5ksLLBC0iQSXRlI09oeLauv/JqhfSWb9EF9JJqMHp2/GvqdO1t5520xyPTWfyP4xcoXg0jtUggKKTcC3UEaEn2+6hsphczMMhCMVJI1zexXkUwcKIiVHcUjUe77aUZY2FxaZq7lmwJmaXJSSRXxZB2kY8jzrVrnehYpKZRSCkd51Hc217ewRJCVt7cOpOpJZdrSA6HgI3isR1Zcm4VRHD23junUnXX2l+z9/uIyTRy9RXj4K6vdkPfSdYYV8hCzhNu7z8tS246uuxKTEkBiNqki6q2u5oDL/lrpyNNvJpnJl7o5W1tQY1jktYpX/KdyS5IIBU6KPHLUwlkFK5pKAil1pnFLUYxmNkkeRodZJGlZ319zd1djAn404FdjA4bYE9OfCxqrbjuVYxtADcgaHz81mMFiVI9krIJFk7TSs0ZZRoCUPg1F9P4dQR25du3TZ3W2j2lAdvGoDEA12mMs7eZJke53ooUE3DnVQdQrefIHxUsstLJpK//Z' width='74'/></div>
</a>
</b:if>
</b:if>
<div class='post-box' itemprop='blogPost' itemscope='itemscope' itemtype='//schema.org/BlogPosting'>
<a class='timestamp-link' expr:href='data:post.url' expr:title='data:post.title' rel='bookmark' title='permanent link'><abbr class='published' expr:content='data:post.timestampISO8601' itemprop='datePublished dateModified'><span class='updated'><data:post.dateHeader/>T<data:post.timestamp/></span></abbr></a>
<div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'> <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'> <meta content='https://ihsankajian.blogspot.com' itemprop='url'/> <meta content='600' itemprop='width'/> <meta content='600' itemprop='height'/> </div> <meta expr:content='data:blog.title' itemprop='name'/> </div>
<b:if cond='data:post.firstImageUrl'>
<meta expr:content='data:post.firstImageUrl' itemprop='image'/>
</b:if>
<a expr:name='data:post.id'/>
<div class='post-label-block'>
<b:if cond='data:top.showAuthor'>
<b:if cond='data:post.authorProfileUrl'>
<span class='author-info'>
<span class='vcard'>
<span class='fn' itemprop='author' itemscope='itemscope' itemtype='//schema.org/Person'>
<meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
<a class='g-profile profile-block' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
By <span itemprop='name'><data:post.author/></span>
</a>
</span>
</span>
</span>
</b:if>
</b:if>
<b:if cond='data:post.dateHeader'>
<span class='date-block'><abbr class='updated published' expr:title='data:post.timestampISO8601' itemprop='datePublished' style='text-decoration:none;border-bottom:none;'><data:post.dateHeader/></abbr></span>
<b:else/>
<b:if cond='data:top.showTimestamp'>
<span class='date-block'><abbr class='updated published' expr:title='data:post.timestampISO8601' itemprop='datePublished' style='text-decoration:none;border-bottom:none;'><data:post.timestamp/></abbr></span>
</b:if>
</b:if>
<b:if cond='data:post.labels'>
<b:loop values='data:post.labels' var='label'>
<a class='label-block' expr:href='data:label.url' expr:title='data:label.name' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
</b:loop>
</b:if>
</div>
<b:if cond='data:post.title'>
<h2 class='post-title entry-title' itemprop='name headline'>
<b:if cond='data:post.link'>
<a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<b:if cond='data:post.url'>
<b:if cond='data:blog.url != data:post.url'>
<a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
<b:else/>
<data:post.title/>
</b:if>
</b:if>
</h2>
</b:if>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody description'>
<div expr:id='&quot;summary&quot; + data:post.id'>
<data:post.snippet/>
</div>
</div>
</div>
</b:switch>
</article>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='fbbox-comments' style='width:100%;margin-top:20px'>
<div class='fb-comments' data-num-posts='2' expr:data-href='data:blog.url'/>
</div>
</b:if>
</b:includable>
    <b:includable id='postQuickEdit' var='post'>
<b:if cond='data:post.editUrl'>
<span expr:class='&quot;item-control &quot; + data:post.adminClass'>
<a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
<img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
</a>
</span>
</b:if>
</b:includable>
    <b:includable id='shareButtons' var='post'>
<b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
</b:includable>
    <b:includable id='status-message'>
<b:if cond='data:navMessage'>
<div class='status-msg-wrap'>
<div class='status-msg-body'>
<data:navMessage/>
</div>
<div class='status-msg-border'>
<div class='status-msg-bg'>
<div class='status-msg-hidden'><data:navMessage/></div>
</div>
</div>
</div>
<div style='clear: both;'/>
</b:if>
</b:includable>
    <b:includable id='threaded-comment-form' var='post'>
<div class='comment-form'>
<a name='comment-form'/>
<b:if cond='data:mobile'>
<div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
<data:blogTeamBlogMessage/>
<a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
<iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display:block' width='100%'/>
<b:else/>
<div class='pesan-komentar'><p><data:blogCommentMessage/></p></div>
<data:blogTeamBlogMessage/>
<a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
<iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
</b:if>
<data:post.friendConnectJs/>
<data:post.cmtfpIframe/>
<script type='text/javascript'>BLOG_CMT_createIframe(&amp;#39;<data:post.appRpcRelayPath/>&amp;#39;,&amp;#39;<data:post.communityId/>&amp;#39;);</script>
</div>
</b:includable>
    <b:includable id='threaded_comment_js' var='post'>
<script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
<script type='text/javascript'>(function(){var items=<data:post.commentJso/>;var msgs=<data:post.commentMsgs/>;var config=<data:post.commentConfig/>;var cursor=null;if(items&amp;&amp;items.length&gt;0){cursor=parseInt(items[items.length-1].timestamp)+1;}
var bodyFromEntry=function(entry){if(entry.gd$extendedProperty){for(var k in entry.gd$extendedProperty){if(entry.gd$extendedProperty[k].name==&#39;blogger.contentRemoved&#39;){return&#39;&lt;span class=&quot;deleted-comment&quot;&gt;&#39;+entry.content.$t+&#39;&lt;/span&gt;&#39;;}}}
return entry.content.$t;}
var parse=function(data){cursor=null;var comments=[];if(data&amp;&amp;data.feed&amp;&amp;data.feed.entry){for(var i=0,entry;entry=data.feed.entry[i];i++){var comment={};var id=/blog-(\d+).post-(\d+)/.exec(entry.id.$t);comment.id=id?id[2]:null;comment.body=bodyFromEntry(entry);comment.timestamp=Date.parse(entry.published.$t)+&#39;&#39;;if(entry.author&amp;&amp;entry.author.constructor===Array){var auth=entry.author[0];if(auth){comment.author={name:(auth.name?auth.name.$t:undefined),profileUrl:(auth.uri?auth.uri.$t:undefined),avatarUrl:(auth.gd$image?auth.gd$image.src:undefined)};}}
if(entry.link){if(entry.link[2]){comment.link=comment.permalink=entry.link[2].href;}
if(entry.link[3]){var pid=/.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);if(pid&amp;&amp;pid[1]){comment.parentId=pid[1];}}}
comment.deleteclass=&#39;item-control blog-admin&#39;;if(entry.gd$extendedProperty){for(var k in entry.gd$extendedProperty){if(entry.gd$extendedProperty[k].name==&#39;blogger.itemClass&#39;){comment.deleteclass+=&#39; &#39;+entry.gd$extendedProperty[k].value;}else if(entry.gd$extendedProperty[k].name==&#39;blogger.displayTime&#39;){comment.displayTime=entry.gd$extendedProperty[k].value;}}}
comments.push(comment);}}
return comments;};var paginator=function(callback){if(hasMore()){var url=config.feed+&#39;?alt=json&amp;v=2&amp;orderby=published&amp;reverse=false&amp;max-results=50&#39;;if(cursor){url+=&#39;&amp;published-min=&#39;+new Date(cursor).toISOString();}
window.bloggercomments=function(data){var parsed=parse(data);cursor=parsed.length&lt;50?null:parseInt(parsed[parsed.length-1].timestamp)+1
callback(parsed);window.bloggercomments=null;}
url+=&#39;&amp;callback=bloggercomments&#39;;var script=document.createElement(&#39;script&#39;);script.type=&#39;text/javascript&#39;;script.src=url;document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);}};var hasMore=function(){return!!cursor;};var getMeta=function(key,comment){if(&#39;iswriter&#39;==key){var matches=!!comment.author&amp;&amp;comment.author.name==config.authorName&amp;&amp;comment.author.profileUrl==config.authorUrl;return matches?&#39;true&#39;:&#39;&#39;;}else if(&#39;deletelink&#39;==key){return config.baseUri+&#39;/delete-comment.g?blogID=&#39;
+config.blogId+&#39;&amp;postID=&#39;+comment.id;}else if(&#39;deleteclass&#39;==key){return comment.deleteclass;}
return&#39;&#39;;};var replybox=null;var replyUrlParts=null;var replyParent=undefined;var onReply=function(commentId,domId){if(replybox==null){replybox=document.getElementById(&#39;comment-editor&#39;);if(replybox!=null){replybox.height=&#39;250px&#39;;replybox.style.display=&#39;block&#39;;replyUrlParts=replybox.src.split(&#39;#&#39;);}}
if(replybox&amp;&amp;(commentId!==replyParent)){document.getElementById(domId).insertBefore(replybox.parentNode,null);replybox.src=replyUrlParts[0]
+(commentId?&#39;&amp;parentID=&#39;+commentId:&#39;&#39;)
+&#39;#&#39;+replyUrlParts[1];replyParent=commentId;}};var hash=(window.location.hash||&#39;#&#39;).substring(1);var startThread,targetComment;if(/^comment-form_/.test(hash)){startThread=hash.substring(&#39;comment-form_&#39;.length);}else if(/^c[0-9]+$/.test(hash)){targetComment=hash.substring(1);}
var configJso={&#39;maxDepth&#39;:config.maxThreadDepth};var provider={&#39;id&#39;:config.postId,&#39;data&#39;:items,&#39;loadNext&#39;:paginator,&#39;hasMore&#39;:hasMore,&#39;getMeta&#39;:getMeta,&#39;onReply&#39;:onReply,&#39;rendered&#39;:true,&#39;initComment&#39;:targetComment,&#39;initReplyThread&#39;:startThread,&#39;config&#39;:configJso,&#39;messages&#39;:msgs};var render=function(){if(window.goog&amp;&amp;window.goog.comments){var holder=document.getElementById(&#39;comment-holder&#39;);window.goog.comments.render(holder,provider);}};if(window.goog&amp;&amp;window.goog.comments){render();}else{window.goog=window.goog||{};window.goog.comments=window.goog.comments||{};window.goog.comments.loadQueue=window.goog.comments.loadQueue||[];window.goog.comments.loadQueue.push(render);}})();</script>
</b:includable>
    <b:includable id='threaded_comments' var='post'>
<div class='comments' id='comments'>
<a name='comments'/>
<h3><b:if cond='data:post.numComments == 0'> 0 Response to &quot;<data:blog.pageName/>&quot;</b:if> <b:if cond='data:post.numComments == 1'> 1 Response to &quot;<data:blog.pageName/>&quot; </b:if> <b:if cond='data:post.numComments &gt; 1'> <data:post.numComments/> Responses to &quot;<data:blog.pageName/>&quot; </b:if></h3>
<div class='comments-content'>
<b:if cond='data:post.embedCommentForm'>
<b:include data='post' name='threaded_comment_js'/>
</b:if>
<div id='comment-holder'>
<data:post.commentHtml/>
</div>
</div>
<p class='comment-footer'>
<b:if cond='data:post.allowNewComments'>
<b:include data='post' name='threaded-comment-form'/>
<b:else/>
<data:post.noNewCommentsText/>
</b:if>
</p>
<b:if cond='data:showCmtPopup'>
<div id='comment-popup'>
<iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
</iframe>
</div>
</b:if>
<div id='backlinks-container'>
<div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
<b:if cond='data:post.showBacklinks'>
<b:include data='post' name='backlinks'/>
</b:if>
</div>
</div>
</div>
</b:includable>
  </b:widget>
</b:section>
</div>
</div>
<aside id='sidebar-wrapper'>
<div class='sidebar-container'>
<b:section class='sidebar' id='sidebar' preferred='yes'>
  <b:widget id='PopularPosts1' locked='false' title='Entri Populer' type='PopularPosts' version='1'>
    <b:widget-settings>
      <b:widget-setting name='numItemsToShow'>7</b:widget-setting>
      <b:widget-setting name='showThumbnails'>true</b:widget-setting>
      <b:widget-setting name='showSnippets'>false</b:widget-setting>
      <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
<b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
<div class='widget-content popular-posts'>
<ul>
<b:loop values='data:posts' var='post'>
<li>
<b:if cond='!data:showThumbnails'>
<b:if cond='!data:showSnippets'>
<a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a>
<b:else/>
<div class='item-title'><a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a></div>
<div class='item-snippet'><data:post.snippet/></div>
</b:if>
<b:else/>
<div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
<b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'>
<div class='item-thumbnail'>
<a expr:href='data:post.href' expr:title='data:post.title' target='_blank'>
<b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)                                  : data:post.thumbnail' var='image'>
<img alt='' border='0' expr:src='data:image'/>
</b:with>
</a>
</div>
</b:if>
<div class='item-title'><a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a></div>
<b:if cond='data:showSnippets'>
<div class='item-snippet'><data:post.snippet/></div>
</b:if>
</div>
<div style='clear: both;'/>
</b:if>
</li>
</b:loop>
</ul>
</div>
</b:includable>
  </b:widget>
  <b:widget id='BlogArchive1' locked='false' title='Arsip Blog' type='BlogArchive' version='1'>
    <b:widget-settings>
      <b:widget-setting name='showStyle'>HIERARCHY</b:widget-setting>
      <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
      <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
      <b:widget-setting name='monthPattern'>MMMM</b:widget-setting>
      <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
      <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
      <b:widget-setting name='chronological'>false</b:widget-setting>
      <b:widget-setting name='showPosts'>true</b:widget-setting>
      <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
<b:if cond='data:title != &quot;&quot;'>
<h2><data:title/></h2>
</b:if>
<div class='widget-content'>
<div id='ArchiveList'>
<div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
<b:include cond='data:style == &quot;HIERARCHY&quot;' data='data' name='interval'/>
<b:include cond='data:style == &quot;FLAT&quot;' data='data' name='flat'/>
<b:include cond='data:style == &quot;MENU&quot;' data='data' name='menu'/>
</div>
</div>
</div>
</b:includable>
    <b:includable id='flat' var='data'>
<ul class='flat'>
<b:loop values='data:data' var='i'>
<li class='archivedate'>
<a expr:href='data:i.url'><data:i.name/></a> (<data:i.post-count/>)
</li>
</b:loop>
</ul>
</b:includable>
    <b:includable id='interval' var='intervalData'>
<b:loop values='data:intervalData' var='interval'>
<ul class='hierarchy'>
<li expr:class='&quot;archivedate &quot; + data:interval.expclass'>
<b:include cond='data:interval.toggleId' data='interval' name='toggle'/>
<a class='post-count-link' expr:href='data:interval.url'>
<data:interval.name/>
</a>
<span class='post-count' dir='ltr'>(<data:interval.post-count/>)</span>
<b:include cond='data:interval.data' data='interval.data' name='interval'/>
<b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
</li>
</ul>
</b:loop>
</b:includable>
    <b:includable id='menu' var='data'>
<select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
<option value=''><data:title/></option>
<b:loop values='data:data' var='i'>
<option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
</b:loop>
</select>
</b:includable>
    <b:includable id='posts' var='posts'>
<ul class='posts'>
<b:loop values='data:posts' var='post'>
<li><a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a></li>
</b:loop>
</ul>
</b:includable>
    <b:includable id='toggle' var='interval'>
<a class='toggle' href='javascript:void(0)'>
<span expr:class='&quot;zippy&quot; + (data:interval.expclass == &quot;expanded&quot; ? &quot; toggle-open&quot; : &quot;&quot;)'>
<b:if cond='data:interval.expclass == &quot;expanded&quot;'>
&#9660;&#160;
<b:elseif cond='data:blog.languageDirection == &quot;rtl&quot;'/>
&#9668;&#160;
<b:else/>
&#9658;&#160;
</b:if>
</span>
</a>
</b:includable>
  </b:widget>
  <b:widget id='Label1' locked='false' title='Label' type='Label' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
      <b:widget-setting name='display'>CLOUD</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'/>
      <b:widget-setting name='showType'>ALL</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
<b:if cond='data:title != &quot;&quot;'>
<h2><data:title/></h2>
</b:if>
<div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
<b:if cond='data:display == &quot;list&quot;'>
<ul>
<b:loop values='data:labels' var='label'>
<li>
<b:if cond='data:blog.url == data:label.url'>
<span expr:dir='data:blog.languageDirection'><data:label.name/></span>
<b:else/>
<a expr:dir='data:blog.languageDirection' expr:href='data:label.url' expr:title='data:label.name'><data:label.name/></a>
</b:if>
<b:if cond='data:showFreqNumbers'>
<span dir='ltr'>(<data:label.count/>)</span>
</b:if>
</li>
</b:loop>
</ul>
<b:else/>
<b:loop values='data:labels' var='label'>
<span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
<b:if cond='data:blog.url == data:label.url'>
<span expr:dir='data:blog.languageDirection'><data:label.name/></span>
<b:else/>
<a expr:dir='data:blog.languageDirection' expr:href='data:label.url' expr:title='data:label.name'><data:label.name/></a>
</b:if>
<b:if cond='data:showFreqNumbers'>
<span class='label-count' dir='ltr'>(<data:label.count/>)</span>
</b:if>
</span>
</b:loop>
</b:if>
</div>
</b:includable>
  </b:widget>
</b:section>
</div>
</aside>
</div>
<div class='clear'/>
<b:section class='banner728-bottom' id='banner728-bottom' showaddelement='yes'/>
<div id='subscribe-css'>
<p class='subscribe-note'><span>SUBSCRIBE</span> <span class='itatu'>TO</span> OUR NEWSLETTER</p>
<div class='subscribe-wrapper'>
<div class='subscribe-form'>
<form action='//feedburner.google.com/fb/a/mailverify?uri=ID feedburner blog anda' class='subscribe-form' method='post' onsubmit='window.open (&apos;//feedburner.google.com/fb/a/mailverify?uri=ID feedburner blog anda&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true' target='popupwindow'>
<input name='uri' type='hidden' value='ID feedburner blog anda'/><input name='loc' type='hidden' value='en_US'/><input autocomplete='off' class='subscribe-css-email-field' name='email' placeholder='Enter your Email'/><input class='subscribe-css-email-button' title='' type='submit' value='submit'/></form>
</div>
</div></div>
<footer id='footer-wrapper'>
<div class='footer-left'>
Copyright 2016 <a expr:href='data:blog.homepageUrl' rel='copyright'><data:blog.title/></a>
</div>
<div class='footer-right'>
Design by <a href='https://ihsankajian.blogspot.com' target='_blank' title='Kang Ihsan'>Kang Ihsan</a>
</div>
</footer>
</div>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script type='text/javascript'>/*<![CDATA[*/var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"https://ihsankajian.blogspot.com",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:72,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+d.thumbnailSize+""):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="thumbnail" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'" title="'+t+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><img alt="thumbnail" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'" title="'+t+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="thumbnail" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'" title="'+t+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="thumbnail" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'" title="'+t+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);/*]]>*/</script>
<script async='async' src='data:text/javascript;base64,/9j/4AAQSkZJRgABAQEAWgBaAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAAB...' type='text/javascript'/>
<div id='totop' style='display block;'>
<a href='#'>
<span id='totop-icon'/><br/>
Top
</a>
</div>
<script type='text/javascript'>var jQueryscrolltotop=jQuery(&quot;#totop&quot;);jQueryscrolltotop.css(&#39;display&#39;,&#39;none&#39;);jQuery(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()&gt;100){jQueryscrolltotop.slideDown(&#39;fast&#39;);}else{jQueryscrolltotop.slideUp(&#39;fast&#39;);}});jQueryscrolltotop.click(function(){jQuery(&#39;body,html&#39;).animate({scrollTop:0},&#39;fast&#39;);return false;});});</script>
<script>/*<![CDATA[*/(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.3";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));/*]]>*/</script>
</b:if>
<script type='text/javascript'>/*<![CDATA[*/for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));console.log(document.body.innerHTML);var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".toggleMenu").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".toggleMenu").css("display","inline-block");if(!$(".toggleMenu").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".toggleMenu").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}/*]]>*/</script>
<script type='text/javascript'>/*<![CDATA[*/var f=new smartLink();f.add("Kajian Aswaja","https://ihsankajian.blogspot.com/");f.startScript();$(document).ready(function(){$('img').each(function(){var $img=$(this);var filename=$img.attr('src')
$img.attr('alt',filename.substring((filename.lastIndexOf('/'))+1,filename.lastIndexOf('.')));});});$(document).ready(function(){$('img').each(function(){var $img=$(this);var filename=$img.attr('src')
$img.attr('title',filename.substring((filename.lastIndexOf('/'))+1,filename.lastIndexOf('.')));});});var scrollTimer=null;$(window).scroll(function(){var viewportHeight=$(this).height(),scrollbarHeight=viewportHeight/$(document).height()*viewportHeight,progress=$(this).scrollTop()/($(document).height()-viewportHeight),distance=progress*(viewportHeight-scrollbarHeight)+scrollbarHeight/2-$('#scroll').height()/2;$('#scroll').css('top',distance).text(' ('+Math.round(progress*100)+'%)').fadeIn(100);if(scrollTimer!==null){clearTimeout(scrollTimer);}
scrollTimer=setTimeout(function(){$('#scroll').fadeOut();},1500);});function smartLink(){this.keywdHref=new Object();this.add=function(keyword,href){if(keyword.substr(0,1)!=" "){keyword=" "+keyword;}
this.keywdHref[keyword]=href;}
this.createAnchor=function(){var objs=document.getElementsByTagName("div");for(var i=0;i<objs.length;i++){var obj=objs[i];if(obj.className.indexOf("post-body")>-1){var content=obj.innerHTML;for(var keyword in this.keywdHref){var href=this.keywdHref[keyword];var newstr=content.replace(keyword,"<a href='"+href+"'>"+keyword+"</a>","gi");obj.innerHTML=newstr;content=newstr;}}}}
this.startScript=function(){var onLoad=window.onload;window.onload=function(){if(onLoad){onLoad();}
setTimeout("f.createAnchor()",100);}}}/*]]>*/</script>
<script language='javascript' type='text/javascript'>function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(6*60*60*1000));var expires=&quot;; expires=&quot;+date.toGMTString();}
else var expires=&quot;&quot;;document.cookie=name+&quot;=&quot;+value+expires+&quot;; path=/&quot;;}
function readCookie(name){var nameEQ=name+&quot;=&quot;;var ca=document.cookie.split(&#39;;&#39;);for(var i=0;i ca.length;i++){var c=ca[i];while(c.charAt(0)==&#39; &#39;)c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function popMarket(url){var x=readCookie(&#39;popup-crk&#39;);if(!x){createCookie(&#39;popup-crk&#39;,&#39;1&#39;,1);window.open(url);}}</script>
<body onClick='popMarket(&apos;https://ihsankajian.blogspot.com&apos;)'/>
&lt;!--</body>--&gt; &lt;/body&gt;
</html>