const xml2js = require('xml2js');
const path = require("path");
const fs = require("fs");

// JSON to XML runner
const json_to_xml_runner = async function(original_file_name = "", new_file_name) {
    if (original_file_name == "") return console.log("original file name required");

    try {
        let json_data = JSON.parse(fs.readFileSync(`./input_files/json_input/${original_file_name}.json`));

        let my_build = new xml2js.Builder();
        const my_xml = my_build.buildObject(json_data);

        // random number generator
        const getRandom = () => Math.abs(Math.floor(Math.random() * (1000 - 100) + 100));
        if (!new_file_name) new_file_name = getRandom() + "_";


        fs.writeFileSync(`./output_files/xml/${new_file_name}.xml`, my_xml);
        console.log("SUCCESS: " + '"< ' +
            new_file_name + ' >"' +
            ".xml" + " has been created");

    } catch (e) {
        console.error(e.message)
    }
}

module.exports = { json_to_xml_runner };