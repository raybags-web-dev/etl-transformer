const xml2js = require('xml2js');
const path = require("path");
const fs = require("fs");
// XML to JSON runner 
const xml_to_json_runner = async function(original_file_name = "", new_file_name) {
    if (original_file_name == "") return console.log("original file name required");

    try {
        const xml = fs.readFileSync(`./input_files/xml_input/${original_file_name}.xml`);
        // convert XML to JSON
        xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
            if (err) throw err.message;
            // random number generator
            const getRandom = () => Math.abs(Math.floor(Math.random() * (1000 - 100) + 100));
            if (!new_file_name) new_file_name = getRandom() + "_";

            const json = JSON.stringify(result, null, 4);
            // log JSON string
            fs.writeFileSync(`./output_files/json/${new_file_name}.json`, json);
            console.log("SUCCESS: " + '"< ' +
                new_file_name + ' >"' +
                ".json" + " has been created");
        });

    } catch (e) {
        console.error(e.message)
    }
}

module.exports = { xml_to_json_runner };