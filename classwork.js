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

//This was done in the most complex way to understand each step to iterate to a specific value in nested objects/arrays
function retrieveURL(pre){
	//array variable that urls will be pushed to later
	var urls = [];
	
	//loops through variable preview using for/in loop
	for(var key in pre){
		
		//finds the array named "images", this means "enabled" is ignored
		if(key === "images"){
			//console.log(pre[key]);
			
			//variable containing the length of array "images"	
      var imgLength = pre[key].length
      //console.log(imgLength);
      
      //for loop used becuase "images" is an array; loops through values in "images"
			for(var i = 0; i < imgLength; i++){
				//console.log(pre[key][i]);
			
				//because "images" contains an object, for loop will only run once; for/in loop used to iterate through values of that object
				for(var reso in pre[key][i]){
			
					//loop through the object in array "images", conditional statement is used to find the key, "resolutions" within it
					if(reso === "resolutions"){
					  //console.log(pre[key][i][reso]);
					    
					  //length of resolution array is stored in variable "resoLength"
            var resoLength = pre[key][i][reso].length;
            //console.log(resoLength);
						
						//once for/in loop finds "resolutions", for loop is used to iterate through the values of "resolutions", it will run twice
						for(var x = 0; x < resoLength; x++){
							//console.log(pre[key][i][reso][x]);
						
							//becuase there are two objects in resolutions, for/in loop is used again to iterate through the values of each object
							for(var link in pre[key][i][reso][x]){
						
								//checks for the key "url", its value contains the actual url that needs to be exctracted
								if(link === "url"){
									//console.log(pre[key][i][reso][x][link]);
						
									//once the "url" is found in both objects the value from the key is pushed to the array "urls"
                  urls.push(pre[key][i][reso][x][link]);                        
								}					
							}
						}
					}
				}
			}
		}
	}
	//all iterations whether it be through an object or array is shown above
	//this is also the most dynamic method, meaning if any values were to be added to any part of the array or object, this function will only return the URLs in the array
	return urls;

	/* The method below is a shorter version above but does not show each iteration
	for(var key in pre){
		
		//checks for "images", in preview (object)
		if(key === "images"){
			for(var i = 0; i < pre[key][0].resolutions.length; i++){
				  var resolutionArray = pre[key][0].resolutions[i];
          urls.push(resolutionArray);    
      }
		}
	}
	*/
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

function nestedKey(pre){
  var allKeyValuePairs = {
	keys: [],
	values: []
  };

  for(var key in pre){
    if(key === "images"){
      for(var i = 0; i < pre[key].length; i++){
        for(var nestedPairs in pre[key][i]){
          allKeyValuePairs.keys.push(nestedPairs);
          allKeyValuePairs.values.push(pre[key][i][nestedPairs]);
        }
      }
    }
  }
  return allKeyValuePairs;
}
console.log(nestedKey(preview));
