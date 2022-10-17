const FB = require('fb');

const ACCESS_TOKEN =  '';

FB.setAccessToken(ACCESS_TOKEN);
FB.api(
 '/{PAGE-ID}/feed',
 'POST',
 { "message": "Testing with api" },
 function (response) {
  if (response.error) {
   console.log('error occurred: ' + response.error)
   console.log(response.error)
   return;
  }
  console.log('successfully posted to page!');
 }
);
