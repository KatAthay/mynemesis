const { Router } = require('express');
const getTweets = require('./utils/get_tweets');
const filterTweetsForTopics = require('./utils/filter_tweets');

const router = Router();

// http://localhost:3000/tweets/elonmusk/bitcoin,fungible,valuation/10
// base route: '/tweets'
router.route('/:username/:topics/:maxTweets?').get(async (req, res) => {
  /*
  '?' after ':maxTweets' tells express the param is optional – otherwise would
  throw error if it wasn't provided. The user might not bother specifying
  maxTweets. So i'll make 10 its default value in the object destucturing below.
  */
 console.log('req.params:', req.params)
 
  const { username, topics: topicsList, maxTweets = 10 } = req.params;
  // From the url query string we get the topics comma-separated
  const topics = topicsList.split(','); // easier to work with them as array
//this is the output of get tweets
  const {
    id: twitterId,
    name,
    tweets: recentTweets,
  } = await getTweets(username, maxTweets);

  // object we'll send as response to the client – now ready to wrap in a bow!
  req.user = {
    username,
    name,
    twitterId,
    topics,
    topicalTweets: filterTweetsForTopics(recentTweets, topics),
    recentTweets,
  };



  res.json({ data: req.user });
});

module.exports = router;
