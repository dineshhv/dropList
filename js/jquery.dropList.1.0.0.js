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

       // Merge options with defaults
       var settings = $.extend({
          highlight : true,
          speed		: 1000,
          direction	: "bottom",
          type		: "dropdown",
          
          
          
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
       addhighlight(elem, settings, matched.browser);
      
       
       
       // Public method
       this.addhighlight = function()
       {
           
       };
   };

   function GenerateUI(element, options, browser) 
   {
		
		var rand=Math.floor((Math.random()*9999999)+9999);

		ID=element.attr('id');
		parentID=element.parent().attr('id');
		$('#'+ID).hide();
		if(options.direction=='bottom')
		{
			$('#'+parentID).append('<div class="dListholder" id="dlholder_'+rand+'"><div class="dListText" id="dltext">Select your Car</div><div class="dListBtn" id="dlbtn"></div></div>');
			$('#'+parentID).append('<div class="dListdivider" id="dldivider_'+rand+'"></div>');
			$('#'+parentID).append('<div class="dListdrop" id="dldrop_'+rand+'"></div>');
			$('#'+ID+' option').each(function(){
				$('#dldrop_'+rand).append('<div class="dlitem" id="SelectItem" data-val='+this.value+'>'+this.value+'</div>');
			});
		}
		if(options.direction=='left')
		{
			$('#'+parentID).append('<div class="dListholder fleft" id="dlholder"><div class="dListText" id="dltext">Select your Car</div><div class="dListBtn" id="dlbtn"></div></div>');
			$('#'+parentID).append('<div class="dListdivider fleft" id="dldivider"></div>');
			$('#'+parentID).append('<div class="dListdrop fleft" id="dldrop"></div>');
			$('#'+ID+' option').each(function(){
				$('#dldrop').append('<div class="dlitem" id="SelectItem" data-val='+this.value+'>'+this.value+'</div>');
			});
		}
		
	    	
   }
   function addhighlight(element, options, browser) 
   {
		
		$(".dListholder").click(function(){
			var split=this.id.split("_");
			if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
			{
				$("#dldrop_"+split[1]+" #SelectItem").each(function(){
						$(this).addClass('dlithov');
				 });
				$( "#dldrop_"+split[1] ).slideDown( 200, function() {
				});
			} 
			else 
			{
			   $("#dldrop_"+split[1]+" #SelectItem").each(function(){
					$(this).removeClass('dlithov');
				});
				$( "#dldrop_"+split[1] ).slideUp( 200, function() {
				 
			  	});
			}
			if( $( "#dldrop_"+split[1] ).is( ":hidden" ) )
			{
						
			}
			else
			{
				
				$("#dldrop_"+split[1]+" #SelectItem").click(function(){
					selection=$(this).text();
					$('#dlholder_'+split[1]+' #dltext').text(selection);
					$( "#dldrop_"+split[1] ).slideUp( 200, function() {
					});
				});
			}	
		});
		
		   
		
	   	
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