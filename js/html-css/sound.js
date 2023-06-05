/*
##############################################
##                                          ##
## Author: Guillaume Lequart                ##
## GitHub: @MaloCoccyx                      ##
## Project: BrickBreaker-PureJS             ##
## Used to: Generate and Select DOM (Sound) ##
## Created: 05/06/2023                      ##
##                                          ##
##############################################
*/


/**
 * @type {HTMLAudioElement} audioHTMLBrick - Played when a brick breaks
 */
const audioHTMLBrick = document.createElement('audio');

audioHTMLBrick.id = "soundBrick";
audioHTMLBrick.src = "sound/BreakBrick.aac";
audioHTMLBrick.type = "audio/aac";

document.body.appendChild(audioHTMLBrick);

/**
 * @type {HTMLAudioElement} audioHTMLBallPaddle - Played when the ball touch the paddle
 */
const audioHTMLBallPaddle = document.createElement('audio');

audioHTMLBallPaddle.id = "soundBallPaddle";
audioHTMLBallPaddle.src = "sound/Bounce.aac";
audioHTMLBallPaddle.type = "audio/aac";

document.body.appendChild(audioHTMLBallPaddle);

/**
 * @type {HTMLAudioElement} audioHTMLCountDown - Played when before game start
 */
const audioHTMLCountDown = document.createElement('audio');

audioHTMLCountDown.id = "soundCountDpwn";
audioHTMLCountDown.src = "sound/CountDown.mp4";
audioHTMLCountDown.type = "audio/mp4";

document.body.appendChild(audioHTMLCountDown);

/**
 * @type {HTMLAudioElement} audioHTMLRetry - Played when the ball is lost
 */
const audioHTMLRetry = document.createElement('audio');

audioHTMLRetry.id = "soundRetry";
audioHTMLRetry.src = "sound/Retry.aac";
audioHTMLRetry.type = "audio/aac";

document.body.appendChild(audioHTMLRetry);

/**
 * @type {HTMLAudioElement} audioHTMLLoose - Played when player loose the game
 */
const audioHTMLLoose = document.createElement('audio');

audioHTMLLoose.id = "soundLoosing";
audioHTMLLoose.src = "sound/Loose.mp4";
audioHTMLLoose.type = "audio/mp4";

/**
 * @type {HTMLAudioElement} audioHTMLWinning - Played when player win the game
 */
const audioHTMLWinning = document.createElement('audio');

audioHTMLWinning.id = "soundWinning";
audioHTMLWinning.src = "sound/Win.aac";
audioHTMLWinning.type = "audio/aac";

document.body.appendChild(audioHTMLBallPaddle);