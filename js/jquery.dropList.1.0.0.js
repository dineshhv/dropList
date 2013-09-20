/*****************************************************
*													 *
*	Author: Dinesh Vadivel							 *
*	Plugin: jquery.dropList.1.0.0.js				 *
*	Date:	20-06-2013								 *
*													 *
*													 *
*													 *
*													 *
*													 *
*													 *
*****************************************************/

(function($){
   var DropList = function(element, options)
   {
       var elem = $(element);
       var obj = this;
       var rand;
       // Merge options with defaults
       var settings = $.extend({
       	  text		: "Select your car",
          speed		: 200,
          direction	: "bottom",
          type		: "dropdown",
          search	: false,
          multiple	: false
       }, options || {});
       
       var matched, browser;
       jQuery.uaMatch = function( ua ) {
	   ua = ua.toLowerCase();
	   var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

		    return {
		        browser: match[ 1 ] || "",
		        version: match[ 2 ] || "0"
		    };
		};

		matched = jQuery.uaMatch( navigator.userAgent );
		browser = {};
		
		if ( matched.browser ) {
		    browser[ matched.browser ] = true;
		    browser.version = matched.version;
		}
		
		// Chrome is Webkit, but Webkit is also Safari.
		if ( browser.chrome ) {
		    browser.webkit = true;
		} else if ( browser.webkit ) {
		    browser.safari = true;
		}
		
		jQuery.browser = browser;
		
       GenerateUI(elem, settings, matched.browser);

      
       
       
       // Public method
       this.addhighlight = function()
       {
           
       };
   };

   function GenerateUI(element, options, browser) 
   {
		
		rand=Math.floor((Math.random()*9999999)+9999);

		ID=element.attr('id');
		parentID=element.parent().attr('id');
		$('#'+ID).hide();
		if(options.search==false)
		{
			if(options.direction=='bottom')
			{
				
				$('#'+parentID).append('<div class="dListholder" id="dlholder_'+rand+'"><div class="dListText" id="dltext"  data-titem="'+options.text+'">'+options.text+'</div><div class="dListBtn" id="dlbtn"></div><div id="tempdllist" style="display:none;">'+options.text+'</div></div>');
				$('#'+parentID).append('<div class="dListdivider" id="dldivider_'+rand+'"></div>');
				$('#'+parentID).append('<div class="dListdrop" id="dldrop_'+rand+'"></div>');
				$('#'+ID+' option').each(function(){
					$('#dldrop_'+rand).append('<div class="dlitem" id="SelectItem" data-val='+this.value+'>'+this.value+'</div>');
				});
			}
			else if(options.direction=='left')
			{
				$('#'+parentID).append('<div class="dListholder fleft" id="dlholder"><div class="dListText" id="dltext">'+options.text+'</div><div class="dListBtn" id="dlbtn"></div><div id="tempdllist" style="display:none;">'+options.text+'</div></div>');
				$('#'+parentID).append('<div class="dListdivider fleft" id="dldivider"></div>');
				$('#'+parentID).append('<div class="dListdrop fleft" id="dldrop"></div>');
				$('#'+ID+' option').each(function(){
					$('#dldrop').append('<div class="dlitem" id="SelectItem" data-val='+this.value+'>'+this.value+'</div>');
				});
			}
			
			if(options.multiple==false)
			{
				$('#dlholder_'+rand).click(function(){
					var split=this.id.split("_");
						
					if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
					{
						
						$("#dldrop_"+split[1]+" #SelectItem").each(function(){
							$(this).addClass('dlithov');
						});
						$( "#dldrop_"+split[1] ).slideDown( options.speed, function() {
						});
					} 
					else 
					{
					    $("#dldrop_"+split[1]+" #SelectItem").each(function(){
							$(this).removeClass('dlithov');
						});
						$( "#dldrop_"+split[1] ).slideUp( options.speed, function() {
						 
					  	});
					}
					if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
					{
								
					}
					else
					{
						$(this).removeClass('currentclick');
						$("#dldrop_"+split[1]+" #SelectItem").click(function(){
							selection=$(this).text();
							$('#dlholder_'+split[1]+' #dltext').text(selection);
							$('#dlholder_'+split[1]).siblings('#dlist').children('option:selected').removeAttr('selected');
							$('#dlholder_'+split[1]).siblings('#dlist').children('option[value='+selection+']').attr('selected', 'selected');
							$( "#dldrop_"+split[1] ).slideUp( options.speed, function() {
							});
						});
					}
						
				});
			}
			else if(options.multiple==true)
			{
				$('#dlholder_'+rand).click(function(){
					var split=this.id.split("_");
					var Stext=$("#dlholder_"+split[1]).children('#tempdllist').text();	
					if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
					{
						
						$("#dldrop_"+split[1]+" #SelectItem").each(function(){
							$(this).addClass('dlithov');
						});
						$( "#dldrop_"+split[1] ).slideDown( options.speed, function() {
						});
					} 
					else 
					{
					    $("#dldrop_"+split[1]+" #SelectItem").each(function(){
							$(this).removeClass('dlithov');
						});
						$( "#dldrop_"+split[1] ).slideUp( options.speed, function() {
						 
					  	});
					}
					if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
					{
								
					}
					else
					{
						
						if(Stext==options.text)
						{
							var items=[];
						}
						else
						{
							var items=Stext.split(',');
						}
						
						//var trainindIdArray = 
						$(this).removeClass('currentclick');
						$("#dldrop_"+split[1]+" #SelectItem").each(function(){
							$(this).click(function(){
								var disable=$(this).hasClass('ItemAdded');
								if(disable==false)
								{					
									$(this).addClass('ItemAdded');
									var selection=$(this).text();
	
									items.push(selection);
									$('#dlholder_'+split[1]+' #dltext').text(selection);
									$('#dlholder_'+split[1]).siblings('select').children('option:selected').removeAttr('selected');
									$.each(items,function(e,value){
										$('#dlholder_'+split[1]).siblings('select').children('option[value='+value+']').attr('selected', 'selected');
									});
									var stringme=items+"";
									$('#dlholder_'+split[1]+' #dltext').text(stringme);
									$('#dlholder_'+split[1]+' #tempdllist').text(stringme);	
									
								}
								else
								{
									selection=$(this).text();
									$(this).removeClass('ItemAdded');
									items = jQuery.grep(items, function(value) {
									  return value != selection;
									});
									var stringme=items+"";
									$('#dlholder_'+split[1]+' #dltext').text(stringme);
									$('#dlholder_'+split[1]+' #tempdllist').text(stringme);
									$('#dlholder_'+split[1]).siblings('select').children('option[value='+selection+']').removeAttr('selected');
									if(items.length==0)
									{
										$('#dlholder_'+split[1]+' #dltext').text(options.text);
										$('#dlholder_'+split[1]+' #tempdllist').text(options.text);
										
									}
								}
							});
						
						});
					
					}
						
				});
	
			}
			
			
			
		}
		else if(options.search==true&&options.multiple==false)
		{
			$('#'+parentID).append('<div class="dListholder" id="dlholder_'+rand+'"><div class="dListText" id="dltext"  data-titem="'+options.text+'">'+options.text+'</div><div class="dListBtn" id="dlbtn"></div><div id="tempdllist" style="display:none;">'+options.text+'</div></div>');
			$('#'+parentID).append('<div class="dListdivider" id="dldivider_'+rand+'"></div>');
			$('#'+parentID).append('<div class="dListdrop" id="dldrop_'+rand+'"></div>');
			$('#'+ID+' option').each(function(){
				$('#dldrop_'+rand).append('<div class="dlitem" id="SelectItem" data-val='+this.value+'>'+this.value+'</div>');
			});
			
			
			
		}
		
		
		
 };
  
  
   $.fn.dropList = function(options)
   {
       return this.each(function()
       {
           var element = $(this);
          
           // Return early if this element already has a plugin instance
           if (element.data('dropList')) return;

           // pass options to plugin constructor
           var dropList = new DropList(this, options);
          
           // Store plugin object in this element's data
           element.data('dropList', dropList);
       });
   };
})(jQuery);