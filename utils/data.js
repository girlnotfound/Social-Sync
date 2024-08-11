const userNames = [
  "RyanGooseling",
  "KatyPurry",
  "CindyCrawfish",
  "AngelinaCollie",
  "MerylSheep",
  "WillFerret",
  "OwlPacino",
  "HalleBeary",
  "LeonardoDiCatrio",
  "MorganFleaman",
  "JackBlackbird",
  "JimmyFalcon",
  "HughJackrabbit",
  "SandraBullfrog",
  "ChrisHemswoof",
  "NataliePorkman",
  "ColinFurrth",
  "LlamaDelRey",
  "PumaThurman",
  "ScarlettJohamster",
];

const thoughts = [
  "Just realized I've been singing the wrong lyrics this whole time!",
  "Life update: currently holding it all together with one bobby pin.",
  "Mirror: 'You look cute today.' Camera: 'LOL, no.",
  "Im just a girl, standing in front of a salad, asking it to be a donut.",
  "Celebrating the little wins, like finding a parking spot at the supermarket.",
  "Trying to make the awkward moment when I wave back at someone who wasn't waving at me look cool",
  "Aspiring to be the person my dog thinks I am.",
  "Is there an app to sort out my life as quickly as it sorts out my photos?",
  "Turning 'It's too late' into 'It's still early!",
  "Adventures in adulthood: today, I matched my socks.",
  "Plot twist: I actually enjoyed my workout today.",
  "If life gives you lemons, squeeze them in your tea.",
  "Starting the day with coffee and ending it with... more coffee.",
  "Thinking outside the box is great but have you tried staying inside the box and taking a nap?",
  "Im currently on energy saving mode.",
  "Survived another meeting that should have been an email.",
  "Rumor has it I know what Im doing.",
  "Currently under construction. Thank you for your patience.",
  "Sometimes I amaze myself. Other times I look for my phone while I'm talking on it.",
  "Just another day in paradise… just kidding, Im at the grocery store.",
];

const thoughtReactions = ["Like", "Dislike"];

// get a random item from an array
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// generate a random username by combining two random user names
function randomUsername() {
  return random(userNames) + random(userNames);
}

// generate an array of random thoughts, each with a specified number of reactions
function generateThoughts(count) {
  return Array.from({ length: count }, () => ({
    thoughtText: random(thoughts),
    reactions: generateReactions(2),
  }));
}

// generate reactions for a thought
function generateReactions(count) {
  return Array.from({ length: count }, () => ({
    reactionBody: random(thoughtReactions),
    username: randomUsername(),
  }));
}

module.exports = { randomUsername, generateThoughts, random };
