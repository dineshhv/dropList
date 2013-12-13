dropList
========

<p>dropList is a lightweight jQuery plugin to custom UI style for drop down list. The plugin has droplist, multilist and combo list (search and dropdown) options</p>

	<div class="block">
		<h3>Basic dropList</h3>
		<p>This is standard dropList with simple selection, users can make one selection at a time.</p>
			<div class="wrapper" id="dwrapper">
				<select id="dlist">
				 <option value="default">cars</option>
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>
			</div>
		<div class="button_area" style="min-height:75px;">
				<p>Click Here to see the selected item </p>
				<a href="#" id="get_json" style="text-decoration:none; padding:5px 20px; background:#f44549; color:#fff; margin-bottom:20px;">Get Item</a>
		</div>
		<h4>script</h4>
		<blockquote>
		    <code>
		        $('#dlist').dropList({<br />
				selected	: '["default"]'<br />
				});	
		    </code>
		</blockquote>
			
	</div>	
	<div class="block">
	<h3>Multiselection dropList</h3>
	<p>Multiselect dropList is same as standard droplist with additional feature to select more than one item, you can customize the drop list easily by adding property variables</p>
		<div class="wrapper" id="dwrapper2">
			<select id="dlist2"  multiple>
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="mercedes">Mercedes</option>
			  <option value="audi">Audi</option>
			  <option value="Hyndai">Hyndai</option>
			  <option value="Honda">Honda</option>
			  <option value="Ferrari">Ferrari</option>
			  <option value="Ducati">Ducati</option>
			  <option value="Tesla">Tesla</option>
			  <option value="volkswagon">volkswagon</option>
			  <option value="Mclaren">Mclaren</option>
			</select>
		</div>
		<div class="button_area" style="min-height:75px;">
				<p>Click Here to see the selected item </p>
				<a href="#" id="get_json2" style="text-decoration:none; padding:5px 20px; background:#f44549; color:#fff; margin-bottom:20px;">Get Item</a>
		</div>
		<h4>script</h4>
		<blockquote>
		    <code>
		        $('#dlist2').dropList({<br />
					multiple	: true,<br />
					selected	: '["saab","Honda"]'<br />
				});	
		    </code>
		</blockquote>
	</div>
	<div class="block">
	<h3>Combo dropList with search option</h3>
	<p>Combo dropList is a combination of both search and selection list box. </p>
		<div class="wrapper" id="dwrapper3">
			<select id="dlist3">
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="mercedes">Mercedes</option>
			  <option value="audi">Audi</option>
			  <option value="Ferrari">Ferrari</option>
			  <option value="Ducati">Ducati</option>
			  <option value="Tesla">Tesla</option>
			  <option value="volkswagon">volkswagon</option>
			  <option value="Mclaren">Mclaren</option>
			</select>
		</div>
		<div class="button_area" style="min-height:75px;">
				<p>Click Here to see the selected item </p>
				<a href="#" id="get_json3" style="text-decoration:none; padding:5px 20px; background:#f44549; color:#fff; margin-bottom:20px;">Get Item</a>
		</div>
		<h4>script</h4>
		<blockquote>
		    <code>
		        $('#dlist3').dropList({<br />
					search		: true<br />
				});
		    </code>
		</blockquote>
	</div>	
	
	<div class="block">
	<h3>Installation</h3>
	<p>For installation you gone need the following plugins, just include the latest version of jQuery, jQuery UI and dropList plugin</p>
	<blockquote>
	    <code>
			&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot;&gt;&lt;/script&gt;<br/>			&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js&quot;&gt;&lt;/script&gt;<br/>			&lt;script src=&quot;js/jquery.dropList.1.0.0.js&quot;&gt;&lt;/script&gt;
	   </code>
	</blockquote>
	<p>Then include the External CSS library</p>
	<blockquote>
	    <code>
			&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/dropList.css&quot; /&gt;
	   </code>
	</blockquote>
	<p>Finally include the script to initialize the dropList</p>
	<blockquote>
	    <code>
			$('#dlist').dropList();
	   </code>
	</blockquote>
	</div>
	<div class="block">
	<h3>Configuration</h3>
	<!--text		: "Select your car",
          speed		: 200,
        
          type		: "dropdown",
          search	: false,
          multiple	: false,
          selected	: ""-->


		<h4>selected:</h4>
		<p style="background:#ececec; padding:7px 5px;">'["default"]' or '["saab","Honda"]'</p>
		<p>Selected option will enable the default selection of the dropList. This selected option is applicable only for the standard and multiselect. It is not available for the search dropList </p>
		<h4>speed</h4>
		<p style="background:#ececec; padding:7px 5px;">200 or 300</p>
		<p>speed is to determine the UI animation Speed, will accept integer values.</p>
		<h4>multiple</h4>
		<p style="background:#ececec; padding:7px 5px;">true/false</p>
		<p>This one for enabling the multi selection option for the dropList.</p>
		<h4>search</h4>
		<p style="background:#ececec; padding:7px 5px;">true/false</p>
		<p>search option is to enable the combo option (droplist with search box).</p>
		<h4>text</h4>
		<p style="background:#ececec; padding:7px 5px;">"Select your car" </p>
		<p>text option for customize the textbox value of the combo dropList.</p>
	</div>
