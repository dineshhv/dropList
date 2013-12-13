### dropList
dropList is a lightweight jQuery plugin to custom UI style for drop down list. The plugin has droplist, multilist and combo list (search and dropdown) options


###Basic dropList
This is standard dropList with simple selection, users can make one selection at a time.
```
		        $('#dlist').dropList({<br />
				selected	: '["default"]'<br />
				});	
```

###Multiselection dropList
Multiselect dropList is same as standard droplist with additional feature to select more than one item, you can customize the drop list easily by adding property variables
```
		        $('#dlist2').dropList({<br />
					multiple	: true,<br />
					selected	: '["saab","Honda"]'<br />
				});	
```

###Combo dropList with search option
Combo dropList is a combination of both search and selection list box. 
```
		        $('#dlist3').dropList({<br />
					search		: true<br />
				});
```

###Installation
For installation you gone need the following plugins, just include the latest version of jQuery, jQuery UI and dropList plugin
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="js/jquery.dropList.1.0.0.js"></script>

```
Then include the External CSS library
```
	<link rel="stylesheet" type="text/css" href="css/dropList.css" />
```
Finally include the script to initialize the dropList
```
			$('#dlist').dropList();
```

###Configuration



####selected:
'["default"]' or '["saab","Honda"]'

Selected option will enable the default selection of the dropList. This selected option is applicable only for the standard and multiselect. It is not available for the search dropList 
####speed
200 or 300

speed is to determine the UI animation Speed, will accept integer values.
####multiple
true/false

This one for enabling the multi selection option for the dropList.
####search
true/false

search option is to enable the combo option (droplist with search box).
####text
"Select your car" 

text option for customize the textbox value of the combo dropList.

