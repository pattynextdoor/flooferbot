var twit = require('twit');
var config = require('./config.js');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('fs');

//Connect to Twitter
var Twitter = new twit(config);

var breeds = ["https://dog.ceo/api/breed/akita/images/random",
              "https://dog.ceo/api/breed/shiba/images/random",
              "https://dog.ceo/api/breed/chow/images/random",
              "https://dog.ceo/api/breed/eskimo/images/random",
              "https://dog.ceo/api/breed/husky/images/random",
              "https://dog.ceo/api/breed/leonberg/images/random",
              "https://dog.ceo/api/breed/malamute/images/random",
              "https://dog.ceo/api/breed/mountain/bernese/images/random",
              "https://dog.ceo/api/breed/pyrenees/images/random",
              "https://dog.ceo/api/breed/samoyed/images/random"];

setInterval(function(){
  var generatorURL = pickBreed();
  doggoDownload();
  tweet();
}, 30 * 60 * 1000);

//Doin a download
function doggoDownload(){
  request(generatorURL, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var doggo = JSON.parse(body)["message"];
      console.log(doggo);
      request(doggo, {encoding: 'base64'}, function(error, response, body) {
        fs.writeFile('dog.jpg', body, 'base64', function (err) {});
      });
      console.log("Downloaded image.");
    }
  });
}

function tweet() {
  var b64content = fs.readFileSync('dog.jpg', { encoding: 'base64' })

  // first we must post the media to Twitter
  Twitter.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = "doggo"
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    Twitter.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: '', media_ids: [mediaIdStr] }

        Twitter.post('statuses/update', params, function (err, data, response) {
          console.log("Posted status.")
        })
      }
    })
  });
}

//TODO: Optimize dog-picking algorithm
function pickBreed() {
  var num = Math.floor(Math.random() * 800);

  console.log(num);

  if(num <= 12) {
    return breeds[0];
    console.log("Picked Akita");
  }
  else if(num > 12 && num <= 25) {
    return breeds[1];
    console.log("Picked Shibe");

  }
  else if(num > 25 && num <= 100) {
    return breeds[2];
    console.log("Picked Chow");

  }
  else if(num > 100 && num <= 200) {
    return breeds[3];
    console.log("Picked Eskimo");

  }
  else if(num > 200 && num <= 300) {
    return breeds[4];
    console.log("Picked Husky");
  }
  else if(num > 300 && num <= 400) {
    return breeds[5];
    console.log("Picked Leonberg");

  }
  else if(num > 400 && num <= 500) {
    return breeds[6];
    console.log("Picked Malamute");

  }
  else if(num > 500 && num <= 600) {
    return breeds[7];
    console.log("Picked Bernese Mountain");

  }
  else if(num > 600 && num <= 700) {
    return breeds[8];
    console.log("Picked Pyrenees");

  }
  else if(num > 700 && num <= 800) {
    return breeds[9];
    console.log("Picked Samoyed");

  }
}
