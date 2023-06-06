/*
##############################################
##                                          ##
## Author: Guillaume Lequart                ##
## GitHub: @MaloCoccyx                      ##
## Project: BrickBreaker-PureJS             ##
## Used To: Generate and Select DOM (Sound) ##
## Created: 05/06/2023                      ##
##                                          ##
##############################################
*/

/**
 * @type {HTMLAudioElement} audioHTMLCountDown - Played when before game start
 */
const audioHTMLCountDown = document.createElement('audio');

audioHTMLCountDown.id = "soundCountDown";
audioHTMLCountDown.src = "sound/CountDown.mp4";
audioHTMLCountDown.type = "audio/mp4";
audioHTMLCountDown.muted = "muted";

document.body.appendChild(audioHTMLCountDown);

/**
 * @type {HTMLAudioElement} audioHTMLLoose - Played when player loose the game
 */
const audioHTMLLoose = document.createElement('audio');

audioHTMLLoose.id = "soundLoosing";
audioHTMLLoose.src = "sound/Loose.mp4";
audioHTMLLoose.type = "audio/mp4";
audioHTMLLoose.muted = "muted";

/**
 * @type {HTMLAudioElement} audioHTMLWinning - Played when player win the game
 */
const audioHTMLWinning = document.createElement('audio');

audioHTMLWinning.id = "soundWinning";
audioHTMLWinning.src = "sound/Win.aac";
audioHTMLWinning.type = "audio/aac";
audioHTMLWinning.muted = "muted";

document.body.appendChild(audioHTMLWinning);

/**
 * @type {HTMLAudioElement} audioHTMLBrick - Played when a brick breaks
 */
const audioHTMLBrick = document.createElement('audio');

audioHTMLBrick.id = "soundBrick";
audioHTMLBrick.src = "sound/BreakBrick.aac";
audioHTMLBrick.type = "audio/aac";
audioHTMLBrick.muted = "muted";

document.body.appendChild(audioHTMLBrick);

/**
 * @type {HTMLAudioElement} audioHTMLBounce - Played when the ball bounce
 */
const audioHTMLBounce = document.createElement('audio');

audioHTMLBounce.id = "soundBounce";
audioHTMLBounce.src = "sound/Bounce.aac";
audioHTMLBounce.type = "audio/aac";
audioHTMLBounce.muted = "muted";

document.body.appendChild(audioHTMLBounce);

/**
 * @type {HTMLAudioElement} audioHTMLRetry - Played when the ball is lost
 */
const audioHTMLRetry = document.createElement('audio');

audioHTMLRetry.id = "soundRetry";
audioHTMLRetry.src = "sound/Retry.aac";
audioHTMLRetry.type = "audio/aac";
audioHTMLRetry.muted = "muted";

document.body.appendChild(audioHTMLRetry);

/**
 * @type {HTMLAudioElement} audioHTMLBrickSpaceInvader - Played when a brick breaks in space invader schema
 */
const audioHTMLBrickSpaceInvader = document.createElement('audio');

audioHTMLBrickSpaceInvader.id = "soundBrick";
audioHTMLBrickSpaceInvader.src = "sound/space/invaderKilled.wav";
audioHTMLBrickSpaceInvader.type = "audio/wav";
audioHTMLBrickSpaceInvader.muted = "muted";

document.body.appendChild(audioHTMLBrickSpaceInvader);

/**
 * @type {HTMLAudioElement} audioHTMLBounceSpaceInvader -Played when the ball bounce in space invader schema
 */
const audioHTMLBounceSpaceInvader = document.createElement('audio');

audioHTMLBounceSpaceInvader.id = "soundBounce";
audioHTMLBounceSpaceInvader.src = "sound/space/shoot.wav";
audioHTMLBounceSpaceInvader.type = "audio/wav";
audioHTMLBounceSpaceInvader.muted = "muted";

document.body.appendChild(audioHTMLBounceSpaceInvader);

/**
 * @type {HTMLAudioElement} audioHTMLRetrySpaceInvader - Played when the ball is lost in space invader schema
 */
const audioHTMLRetrySpaceInvader = document.createElement('audio');

audioHTMLRetrySpaceInvader.id = "soundRetry";
audioHTMLRetrySpaceInvader.src = "sound/space/explosion.wav";
audioHTMLRetrySpaceInvader.type = "audio/wav";
audioHTMLRetrySpaceInvader.muted = "muted";

document.body.appendChild(audioHTMLRetrySpaceInvader);