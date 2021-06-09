const {NodeVM} = require('vm2');
const vm = new NodeVM({
				require: {
					external: true,
					builtin: ['path'],
					root: "./",
				}
			});

let getJSON_vm = vm.run(`module.exports = function getJSON(callback) {
	  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	  var xhr = new XMLHttpRequest();
	  xhr.withCredentials = true;

	  xhr.addEventListener("readystatechange", function() {
		if(this.readyState === 4) {
		// console.log(this.responseText);
		// Begin accessing JSON data here
		data = this.responseText
		// console.log(data)
		// console.log("data.status= "+data.status)

		extractJSON = data.slice(data.indexOf("var indexUpdatedDataJSON = "), data.indexOf("// Extract the right content from the JSON data based on the language"))
		// extractJSON = extractJSON.slice("var indexUpdatedDataJSON = ".length-1, extractJSON.length-25)
		eval(extractJSON)
		// console.log(extractJSON)
		console.log(indexUpdatedDataJSON)
		callback(indexUpdatedDataJSON)

		}
	  });

	  xhr.open("GET", "https://cors-relay-123.herokuapp.com/https://travel.gc.ca/travelling/advisories");
	  xhr.setRequestHeader("x-requested-with", "travel.gc.ca");

	  xhr.send();}`, 'vm.js');

function save_obj(obj) {
	const fs = require('fs');
	var json_str = JSON.stringify(obj);
	fs.writeFile("CanadaTravelAdvisory.json", json_str, 'utf8', function (err) {if (err) console.log("welp")});
}


getJSON_vm(save_obj)
