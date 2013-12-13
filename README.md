dropList
========

<p>dropList is a lightweight jQuery plugin to custom UI style for drop down list. The plugin has droplist, multilist and combo list (search and dropdown) options</p>


###Basic dropList
<p>This is standard dropList with simple selection, users can make one selection at a time.</p>
```
		        $('#dlist').dropList({<br />
				selected	: '["default"]'<br />
				});	
```

###Multiselection dropList
<p>Multiselect dropList is same as standard droplist with additional feature to select more than one item, you can customize the drop list easily by adding property variables</p>
```
		        $('#dlist2').dropList({<br />
					multiple	: true,<br />
					selected	: '["saab","Honda"]'<br />
				});	
```

###Combo dropList with search option
	<p>Combo dropList is a combination of both search and selection list box. </p>
```
		        $('#dlist3').dropList({<br />
					search		: true<br />
				});
```

###Installation
	<p>For installation you gone need the following plugins, just include the latest version of jQuery, jQuery UI and dropList plugin</p>
```
			&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot;&gt;&lt;/script&gt;<br/>			&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js&quot;&gt;&lt;/script&gt;<br/>			&lt;script src=&quot;js/jquery.dropList.1.0.0.js&quot;&gt;&lt;/script&gt;
```
	<p>Then include the External CSS library</p>
```
			&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/dropList.css&quot; /&gt;
```
	<p>Finally include the script to initialize the dropList</p>
```
			$('#dlist').dropList();
```

###Configuration



####selected:####
		<p style="background:#ececec; padding:7px 5px;">'["default"]' or '["saab","Honda"]'</p>
		<p>Selected option will enable the default selection of the dropList. This selected option is applicable only for the standard and multiselect. It is not available for the search dropList </p>
####>speed####
		<p style="background:#ececec; padding:7px 5px;">200 or 300</p>
		<p>speed is to determine the UI animation Speed, will accept integer values.</p>
####multiple####
		<p style="background:#ececec; padding:7px 5px;">true/false</p>
		<p>This one for enabling the multi selection option for the dropList.</p>
####search####
		<p style="background:#ececec; padding:7px 5px;">true/false</p>
		<p>search option is to enable the combo option (droplist with search box).</p>
####text####
		<p style="background:#ececec; padding:7px 5px;">"Select your car" </p>
		<p>text option for customize the textbox value of the combo dropList.</p>

