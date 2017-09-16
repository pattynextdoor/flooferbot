[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: MIT](https://img.shields.io/badge/License-Good%20Boy-brightgreen.svg)](https://icons8.com/good-boy-license/)


# flooferbot

![alt text](https://pbs.twimg.com/profile_images/908801602584113152/qxMmL9mr_400x400.jpg "lil Steele")

An automated Twitter client that tweets floof pictures every 30 minutes. Visit him over [here.](https://twitter.com/flooferbot) Hosted on [Heroku](https://heroku.com/).

## Built With

* [Node.js](https://nodejs.org/en/) - because Node boys
  * [Twit](https://www.npmjs.com/package/twit) - Twitter API client for Node
  * [request](https://www.npmjs.com/package/request) - HTTP module for Node
* [Dog API](https://dog.ceo/dog-api/) - API from Dog CEO to access images from Stanford's Dog Dataset.

## Usage

Clone the repository to your computer.

``` 
git clone https://github.com/ptumb001/flooferbot.git 
```
The version of `config.js` that you clone contains empty data fields.

```
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token: '-',
  access_token_secret: ''
}
```
You can find these values by obtaining an API key from Twitter. Create a Twitter account for your bot, then go to [apps.twitter.com](http://apps.twitter.com) and create a new app. You'll be able to find all the values in the application settings.

Once you've written your changes to `config.js`, you can run the bot in the terminal with Node.js.

```
node bot.js
```

