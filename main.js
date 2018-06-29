/*
 * Author: DarkShanks
 * Version: 1.00
 * Date: 7/18/2017
 * Description: A sample discord chat bot
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'xxxx'; // Replace with the token


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // Call bot with '>'
  if (message.content[0] === '>') {
    var text = message.content.substring(1);
if(message.content[1] != ' '){
var command = text.split(" ");
//LOVE COMMAND
if(command[0] === 'love'){
if(command.length >= 2){
var totalSum1 = 0;
var totalSum2 = 0; 
var authorNameLength = message.author.username.length;
var name = "";
for (i = 1; i < command.length; i++) { 
name = name + command[i] + " ";
for(j = 0; j < command[i].length; j++){
totalSum1 += command[i].charCodeAt(j);
}
}
for(i = 0; i < authorNameLength; i++) {
totalSum2 += message.author.username.charCodeAt(i);
}

var result = (totalSum1*totalSum2) % 101; 
message.channel.send('There is ' + result + '% love between ' + message.author + ' and ' + name);
}
else{
message.channel.send('Incorrect usage. Sample usage: !love Max');
}
}
}
}
});

// Log our bot in
client.login(token);
