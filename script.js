const json_to_xml_runner = require("./src/json_transformer").json_to_xml_runner;
const xml_to_json_runner = require("./src/xml_transformer").xml_to_json_runner;

// END USER FUNCTIONS
/* These two functions do as their names describe. They should be called with two parameters.
1: The first parameters is the row data source (the file you wish to transform)
2: The secod parameter is the name you wish to provide to the newly created file. 

Note: - Two parameters are required, but one/1st parameter (source file name)  is mandetory. 
      - If one parameter is suplied, a generic name will be provided for the output file.
*/
xml_to_json_runner("null_err_row", "null_rr_row");
xml_to_json_runner("butcher_", "new_butcher_");

json_to_xml_runner("butcher", "butcher");