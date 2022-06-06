(function($){jQuery(document).ready(function(){mmm_reversal_z_index();mmm_smooth_scroll_to_anchor();mmm_sticky_menu();mmm_fullwidth_menu();mmm_keep_open();mmm_height_of_tabs_dropdown();mmm_pushing_content();mmm_mobile_double_tap_to_go();mmm_mobile_toggle_menu();jQuery(window).on('resize orientationchange',function(){mmm_smooth_scroll_to_anchor();mmm_sticky_menu();mmm_fullwidth_menu();mmm_height_of_tabs_dropdown();mmm_pushing_content();});function mmm_reversal_z_index(){var z_index=1000;function_selector='.mega_main_menu';jQuery(function_selector).unbind();jQuery(function_selector).each(function(index,element){z_index=z_index-10;jQuery(element).css({'z-index':z_index});});}
function mmm_mobile_toggle_menu(){function_selector='.mobile_toggle';jQuery(function_selector).unbind();jQuery('.mobile_menu_active').removeClass('mobile_menu_active');jQuery(function_selector).on('click',function(){if(jQuery(this).parent().hasClass('mobile_menu_active')){jQuery(this).parent().removeClass('mobile_menu_active');jQuery('#mega_main_menu .keep_open').removeClass('keep_open');}else{jQuery(this).parent().addClass('mobile_menu_active');}});}
function mmm_mobile_double_tap_to_go(){function_selector='#mega_main_menu li:has(.mega_dropdown) > .item_link, #mega_main_menu li:has(.post_details) > .processed_image';jQuery(function_selector).unbind();if(/iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
{var clicked_item=false;jQuery(function_selector).on('click',function(index)
{if(clicked_item!=this){index.preventDefault();if(jQuery(this).parent().parent().parent().hasClass('keep_open')){}else{jQuery('#mega_main_menu .keep_open').removeClass('keep_open');}
jQuery(this).parent().addClass('keep_open');clicked_item=this;}});}}
function mmm_sticky_menu(){function_selector='#mega_main_menu > .menu_holder';jQuery(function_selector).unbind();jQuery(function_selector).each(function(index,element){var stickyoffset=[];var menu_inner_width=[];var menu_inner=[];var style_attr=[];menu_inner[index]=jQuery(element).find('.menu_inner');stickyoffset[index]=jQuery(element).data('stickyoffset')*1;if(jQuery(element).attr('data-sticky')=='1'&&stickyoffset[index]==0){menu_inner_width[index]=menu_inner[index].parents('.mega_main_menu').width();menu_inner[index].attr('style','width:'+menu_inner_width[index]+'px;');jQuery(element).addClass('sticky_container');}else{;jQuery(window).on('scroll',function(){if(jQuery(element).attr('data-sticky')=='1'){scrollpath=jQuery(window).scrollTop();if(scrollpath>stickyoffset[index]){menu_inner_width[index]=menu_inner[index].parents('.mega_main_menu').width();jQuery(element).find('.menu_inner').attr('style','width:'+menu_inner_width[index]+'px;');if(!jQuery(element).hasClass('sticky_container')){jQuery(element).addClass('sticky_container');}}else{mmm_fullwidth_menu();jQuery(element).removeClass('sticky_container');style_attr[index]=jQuery(menu_inner[index]).attr('style');if(typeof style_attr[index]!=='undefined'&&style_attr[index]!==false){menu_inner[index].removeAttr('style');}}}else{jQuery(element).removeClass('sticky_container');}});}});}
function mmm_fullwidth_menu(){function_selector='.mega_main_menu.direction-horizontal.fullwidth-enable';jQuery(function_selector).unbind();body_width=jQuery('body').width();jQuery(function_selector).each(function(index,element){offset_left=jQuery(element).offset().left;if(jQuery(element).hasClass('coercive_styles-enable')){rules_priority=' !important';}else{rules_priority='';}
jQuery(element).find('.mmm_fullwidth_container').attr('style','width:'+body_width+'px'+rules_priority+';left: -'+offset_left+'px'+rules_priority+';right:auto'+rules_priority+';');});}
function mmm_height_of_tabs_dropdown(){function_selector='.mega_main_menu .tabs_dropdown > .mega_dropdown > li';jQuery(function_selector).unbind();jQuery('.mega_main_menu .tabs_dropdown').on('hover mouseleave mouseenter',function(event){my_el=jQuery(this).find('.mega_dropdown > li').first();jQuery(my_el).parent().css({"min-height":jQuery(my_el).find('.mega_dropdown').outerHeight(true)});jQuery(my_el).find(' > .mega_dropdown').css({"min-height":jQuery(my_el).closest('.mega_dropdown').outerHeight(true)});jQuery(my_el).addClass('keep_open');});jQuery('.dropdowns_trigger-hover'+function_selector).on('hover mouseenter transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(event){jQuery(this).parent().css({"min-height":jQuery(this).find('.mega_dropdown').outerHeight(true)});jQuery(this).find(' > .mega_dropdown').css({"min-height":jQuery(this).closest('.mega_dropdown').outerHeight(true)});});jQuery('.dropdowns_trigger-hover'+function_selector).on('mouseleave ',function(event){jQuery(this).parent().css({"min-height":'0px'});jQuery(this).find(' > .mega_dropdown').css({"min-height":'0px'});jQuery(this).removeClass('keep_open');});jQuery('.dropdowns_trigger-click'+function_selector).on('click',function(){jQuery(this).parent().parent().find('.mega_dropdown').css({"min-height":'0px'});jQuery(this).parent().css({"min-height":jQuery(this).find(' > .mega_dropdown').outerHeight(true)});});}
function mmm_pushing_content(){function_selector='.mega_main_menu.direction-horizontal.pushing_content-enable';jQuery(function_selector).unbind();jQuery(function_selector).each(function(index,element){if(jQuery(element).hasClass('coercive_styles-enable')){rules_priority=' !important';}else{rules_priority='';}
menu_holder_height=jQuery(element).find('.menu_holder').outerHeight(true);click_item=false;if(jQuery(element).hasClass('dropdowns_trigger-click')){dropdowns_trigger='click';if(jQuery('.mega_main_menu .nav_logo.mobile_menu_active').length){}else{jQuery('body').on(dropdowns_trigger,function(body_el){menu_item_class=jQuery(body_el.target).closest('.menu-item').attr('class');if(typeof jQuery(body_el.target).parents('.menu-item').attr('class')!='undefined'){jQuery(element).css({height:menu_holder_height+jQuery(this).find('.mega_main_menu_ul > li.keep_open > .mega_dropdown').outerHeight(true)+rules_priority});if(click_item==menu_item_class){jQuery(element).css({height:menu_holder_height});click_item=false;}else{click_item=jQuery(body_el.target).closest('.menu-item').attr('class');}}else{jQuery(element).css({height:menu_holder_height});click_item=false;}});}}else{dropdowns_trigger='hover mouseleave';if(jQuery('.mega_main_menu .nav_logo.mobile_menu_active').length){}else{jQuery(element).find('li').on(dropdowns_trigger,function(body_el){jQuery(element).css({height:menu_holder_height+jQuery(element).find('.mega_main_menu_ul > li:hover > .mega_dropdown').outerHeight(true)+rules_priority});});}}});}
function mmm_smooth_scroll_to_anchor(){function_selector='#mega_main_menu a[href*="#"]:not([href="#"])';jQuery(function_selector).unbind();jQuery(function_selector).on('click',function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=jQuery(this.hash);target=target.length?target:jQuery('[name='+this.hash.slice(1)+'], [id='+this.hash.slice(1)+']');if(target.length){jQuery('#mega_main_menu .current-menu-item').removeClass('current-menu-item');jQuery(this).parent().addClass('current-menu-item');jQuery('html,body').animate({scrollTop:target.offset().top-90},600);jQuery('#mega_main_menu .mobile_menu_active').removeClass('mobile_menu_active');return false;}}});};function mmm_keep_open(){click_item_2=false;jQuery('body').on('click',function(body_el){menu_item_class=jQuery(body_el.target).closest('.menu-item').attr('class');if((click_item_2!=menu_item_class)&&(typeof jQuery(body_el.target).parents('#mega_main_menu.dropdowns_trigger-click .menu-item:has(.mega_dropdown) > .item_link').attr('class')!='undefined')){body_el.preventDefault();jQuery('#mega_main_menu .keep_open').removeClass('keep_open');jQuery(body_el.target).parents('.menu-item').addClass('keep_open');click_item_2=jQuery(body_el.target).closest('.menu-item').attr('class');}else if(jQuery(body_el.target).is('#mega_main_menu .mega_dropdown form *:focus')){jQuery('#mega_main_menu .keep_open').removeClass('keep_open');jQuery(body_el.target).parents('.menu-item').addClass('keep_open');}else if((click_item_2==menu_item_class)){jQuery(body_el.target).closest('.menu-item').removeClass('keep_open');click_item_2=false;}else{jQuery('.menu-item').removeClass('keep_open');click_item_2=false;}});}});})(jQuery);
;/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);
;/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2020 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),function($){"function"!=typeof window.vc_js&&(window.vc_js=function(){"use strict";vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval"),10),sliderFx=this_element.attr("data-flex_fx"),slideshow=0==sliderTimeout?!1:!0;this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="../apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="../assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".vc_progress_bar").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.addClass("wpb_start_animation animated")},{offset:"85%"})})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(content){content&&content.preventDefault&&content.preventDefault();var element=jQuery(this).closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}($el?$el.hasClass("vc_toggle_title")?$el.unbind("click"):$el.find(".vc_toggle_title").off("click"):jQuery(".vc_toggle_title").off("click")).on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function(ver){var $call,old_version;jQuery.ui&&($call=ver||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0],10)&&parseInt(ver[1],10)<9,$call.each(function(index){var interval=jQuery(this).attr("data-interval"),tabs_array=[],$tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}});if(interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(err){window.console&&window.console.warn&&console.warn("tabs behaviours error",err)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").on("click",function(e){return e&&e.preventDefault&&e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click",function(length){var index;length&&length.preventDefault&&length.preventDefault(),old_version?(index=$tabs.tabs("option","selected"),jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)):(index=$tabs.tabs("option","active"),length=$tabs.find(".wpb_tab").length,index=jQuery(this).parent().hasClass("wpb_next_slide")?length<=index+1?0:index+1:index-1<0?length-1:index-1,$tabs.tabs("option","active",index))})}))}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"),10)&&parseInt($this.data("active-tab"),10)-1),$tabs=!1===active_tab||"yes"===$this.data("collapsible"),$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:$tabs,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}});!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).on("click",function($thumbs){$thumbs&&$thumbs.preventDefault&&$thumbs.preventDefault();$thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).on("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var fluid_ul=jQuery(this);!0!==fluid_ul.data("carousel_enabled")&&fluid_ul.is(":visible")&&(fluid_ul.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1"),(fluid_ul=jQuery(this).find(".wpb_thumbnails-fluid li")).css({"margin-right":fluid_ul.css("margin-left"),"margin-left":0}),(fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width()+300),jQuery(window).on("resize",function(){screen_size!=(screen_size=getSizeName())&&window.setTimeout(function(){location.reload()},20)}))})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,sliderTimeout,this_element=jQuery(this);this_element.hasClass("wpb_slider_nivo")?(0===(sliderTimeout=1e3*this_element.attr("data-interval"))&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})):this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&window.console.warn("vc_prettyPhoto initialize error",err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return window.console&&window.console.warn&&window.console.warn("function vc_google_fonts is deprecated, no need to use it"),!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var vcSkrollrOptions,callSkrollInit,$=window.jQuery;function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var el_margin_left,el_margin_right,offset,width,padding,paddingRight,$el_full=$el.next(".vc_row-full-width");$el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length&&(el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width(),"rtl"===$el.css("direction")&&(offset-=$el_full.width(),offset+=width,offset+=el_margin_left,offset+=el_margin_right),$el.css({position:"relative",left:offset,"box-sizing":"border-box",width:width}),$el.data("vcStretchContent")||("rtl"===$el.css("direction")?((padding=offset)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):((padding=-1*offset)<0&&(padding=0),(paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0)),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"})),$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width}))}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var fullHeight,offsetTop,$element=$(".vc_row-o-full-height:first");$element.length&&(fullHeight=$(window).height(),(offsetTop=$element.offset().top)<fullHeight&&(fullHeight=100-offsetTop/(fullHeight/100),$element.css("min-height",fullHeight+"vh"))),$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds(),callSkrollInit=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrStart,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrStart=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrStart+"%"),parallaxImage=$(this).data("vcParallaxImage"),(youtubeId=vcExtractYoutubeId(parallaxImage))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrStart=-(skrollrStart-100),$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&screen_w<1169?"desktop":768<screen_w&&screen_w<959?"tablet":300<screen_w&&screen_w<767?"mobile":screen_w<300?"mobile_portrait":""}"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$frame=panel.find(".vc_line-chart"),$google_maps=panel.find('[data-ride="vc_carousel"]');vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$frame.length&&jQuery.fn.vcLineChart&&$frame.vcLineChart({reload:!1}),$google_maps.length&&jQuery.fn.carousel&&$google_maps.carousel("resizeAction"),$frame=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$frame.length&&$frame.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")&&(($frame=$google_maps.find("iframe")).attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")),panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")}),$(document).trigger("wpb_prepare_tab_content",panel)}),"function"!=typeof window.vc_ttaActivation&&(window.vc_ttaActivation=function(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}),"function"!=typeof window.vc_accordionActivate&&(window.vc_accordionActivate=function(event,ui){var $pie_charts,$round_charts,$line_charts,$carousel;ui.newPanel.length&&ui.newHeader.length&&($pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]'),void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")}))}),"function"!=typeof window.initVideoBackgrounds&&(window.initVideoBackgrounds=function(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}),"function"!=typeof window.vc_initVideoBackgrounds&&(window.vc_initVideoBackgrounds=function(){jQuery("[data-vc-video-bg]").each(function(){var youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?(youtubeId=$element.data("vcVideoBg"),(youtubeId=vcExtractYoutubeId(youtubeId))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}),"function"!=typeof window.insertYoutubeVideoAsBackground&&(window.insertYoutubeVideoAsBackground=function($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).on("resize",function(){vcResizeVideoBackground($element)})}),"function"!=typeof window.vcResizeVideoBackground&&(window.vcResizeVideoBackground=function($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}),"function"!=typeof window.vcExtractYoutubeId&&(window.vcExtractYoutubeId=function(id){if(void 0===id)return!1;id=id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}),"function"!=typeof window.vc_googleMapsPointer&&(window.vc_googleMapsPointer=function(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.on("click",function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.on("mouseleave",function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}),"function"!=typeof window.vc_setHoverBoxPerspective&&(window.vc_setHoverBoxPerspective=function(hoverBox){hoverBox.each(function(){var $this=jQuery(this),perspective=4*$this.width()+"px";$this.css("perspective",perspective)})}),"function"!=typeof window.vc_setHoverBoxHeight&&(window.vc_setHoverBoxHeight=function(hoverBox){hoverBox.each(function(){var hoverBoxHeight=jQuery(this),hoverBoxInner=hoverBoxHeight.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),hoverBoxHeight=hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=hoverBoxHeight<frontHeight?frontHeight:hoverBoxHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}),"function"!=typeof window.vc_prepareHoverBox&&(window.vc_prepareHoverBox=function(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}),jQuery(document).ready(window.vc_prepareHoverBox),jQuery(window).on("resize",window.vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()})}(window.jQuery);