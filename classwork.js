/*
* Given the data segment "preview", create functions that satisfy the function
* descriptions. There are a total of 4 functions in this file
*/
var preview = {
	images: [
		{
		source: {
			url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?s=8598544207619a3020f808583e28b4c4",
			width: 256,
			height: 256
		},
		resolutions: [
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0",
				width: 108,
				height: 108
			},
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=2b071d25ede17deadf68cb9b7db13230",
				width: 216,
				height: 216
			}
		],
		variants: { },
		id: "KR8oJeB8ComfEPX0bkCe_p2L73IOmk0sTCsyNlfXSNg"
		}
	],
	enabled: false
}

/*
* Function that retrieves the value from the key "enabled"
*, stores the value in a string called "isEnabled", and returns the created 
* variable
*
* Note 		You must use the method "typeof" to ensure the return value is of type 
* 			string
* Return 	isEnabled (string)
*/

function retrieve(pre){
	var isEnabled = "";
	for(var key in pre){
		if(key === "enabled"){
			isEnabled += pre[key]; //+= used to concat the data
			console.log(typeof isEnabled);
		}
	}
	return isEnabled;
}
console.log(retrieve(preview)); //console log the invoking of the function to show return

/*
* Function that changes the value from the key "enabled" to true, and returns 
* the value from the key "enabled"
*
* Return 	value from key enabled (boolean)
*/

function change(pre){
  for(var key in pre){
    if(key === "enabled"){
      pre[key] = true;
    }
  }
  return pre[key];
  //or return pre.enabled
}
console.log(change(preview));

/*
* Function that retrieves the urls only from the key "resolutions" 
* , stores the values in an array called "urls", and returns the created array
* 
* Return 	urls (array)
*/

function retrieveURL(pre){
	var urls = [];
	//loops through preview
	for(var key in pre){
		
		//checks for "images", in preview (object)
		if(key === "images"){
			//console.log(pre[key]);

			//loops through "images" using a for loop since it is an array
			//console.log(pre.images[0].resolutions);
  		var imgLength = pre[key].length
			for(var i = 0; i < imgLength; i++){
				//console.log(pre[key][i]);
				
				for(var reso in pre[key][i]){
					
					if(reso === "resolutions"){
					  //console.log(pre[key][i][reso]);
					  var resoLength = pre[key][i][reso].length;
						
						for(var x = 0; x < resoLength; x++){

							for(var link in pre[key][i][reso][x]){
								if(link === "url"){

								}					
							}
						}
					}
				}
			}
			/*for(var i = 0; i < pre[key][0].resolutions.length; i++){
				  var resolutionArray = pre[key][0].resolutions[i];
          urls.push(resolutionArray);    
      }*/
		}
	}
	//return urls;
}
console.log(retrieveURL(preview));
/*
* Function that retrieves the first nested key and value pairing
* from the values of "images", stores them in a new object called 
* "allKeyValuePairs", and returns the created object
*
* Format	var allKeyValuePairs = {
*				keys: [],
*				values: []
*			};
*
* Return 	allKeyValuePairs (object)
*/
