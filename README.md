# SAP-Training
SAP Training 
<br>
<b>Notes :-</b>https://docs.google.com/document/d/e/2PACX-1vQzjaQH2LiuQHdW9jRtGKVn3z_GNJMCMWM2depEuOQGbBwSL0-IUrFbUC_O2GkdYXeTyJOTBQLy3Kwp/pub 

<hr>

<b>-->z1_Login :-</b> 
    <p>In this login page, if the user enters correct information, then they can log in successfully, otherwise an error message is displayed.</p>
Username:- admin <br>
Password:- admin
<br>

<hr>

<b>-->z2_Model :-</b> 
    <p>For my second project, I constructed a simple JSON model and binding it to the project </p>
    <p>There are 3 step for How to use Model in SAPui5</p>
    Step 1) Declare a brand new model object.<br>
    Step 2) set the data to the model.<br>
    Step 3) set the model to the your App / View / control level.<br>
    
  <p>After completing 3 step you need to binding(for connection).</p>
  For Notes :- https://docs.google.com/document/d/e/2PACX-1vQ1OimgYS-Mtx3Qk9BjmUeqJKAf1X-uu9WFmB3DJM9dtvLouqDOOnXZHmNVv1Xltbc9L4ddPivyM_30/pub

<hr>

<b>-->z3_JSONModels :-</b>
    <p>In my third file, I only created a JSON model and set data and fetched data to it</p>

<hr>

<b>-->z4_Aggregation :-</b>
  <p>It is use for repetitively binding.</p>
  <p>There are mainly two Aggregation</p>
  1. Column Aggregation. <br>
  2. Row Aggregation.

<hr>

<b>-->z5_Expression_binding :-</b>
  <p>If you want to bind the value to the control on some condition or expression is called expression binding.</p>
  <p>Expression binding is a complex binding</p>
  <p>for complex binding you need to define in index.html <br>
  data-sap-ui-xx-bindingSyntax="complex"</p>

<hr>

<b>-->z6_Element_binding :-</b>
  <p>Element binding is useful for containers and layouts containing other controls.</p>
  <p>element-binding allows the relative binding of all children with respect to a parent.</p>

<hr>

<b>-->z7_XML_Model :-</b>
  <p>XMLModel is a client side model function same as JSONModel only syntax different</p>

<hr>

<b>-->z8_ResourceModel :-</b>
  <p>Resource model in sap in used for internationalization. It is use for app in different country in different language.</p>

<hr>

<b>-->z9_Formatter :-</b>
  <p>Formatter is function which is used to modify or manipulate the data before the data binds to the ui control</p>
  <p>Only work in property binding</p>
  <p>Syntax :-</p>
  for Single:- 	"{path: 'cName',formatter: '.formatter.makeItUpperCase'}" 
  <br>
  for Double:- "{parts:[{path:'cColor'},{path:'Other'}],formatter: '.formatter.makeItUpperCase'}"

<hr>

<b>-->z10_ListControll :-</b>
  <p>There are mainly user list controll</p>
  1. DisplayListItem <br>
  2. ObjectListItem <br>
  3. InputListItem <br>
  4. FeedListItem <br>
  5. StanderdListItem <br>
  6. CustomListItem <br>
  7. ColumnListItem <br>
  8. ActionListItem 

<hr>

<b>-->z11_SearchField :-</b>
  <p>Search Field. Use the Search Field to let the user enter a search string and trigger the search process.</p>

<hr>

<b>-->z12_Fragment :-</b>
  <p>Fragment is a one type of pop op box. They use <Dialog> tag. </p>

<hr>

<b>-->z13_Navigation :-</b>
