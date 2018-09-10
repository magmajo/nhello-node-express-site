'use strict';

/**
 * https://github.com/bokub/gradient-string
 * http://patorjk.com/software/taag-v1/ -> Chunky, Graceful,
 *
 * @type {InitGradient}
 */

var gradient = require('gradient-string');

exports.artword = {
  nauth: '\n        _______         __   __\n.-----.|   _   |.--.--.|  |_|  |--.\n|     ||       ||  |  ||   _|     |\n|__|__||___|___||_____||____|__|__|',
  nhello: '\n        _______         __ __\n.-----.|   |   |.-----.|  |  |.-----.\n|     ||       ||  -__||  |  ||  _  |\n|__|__||___|___||_____||__|__||_____|',
  ndrone: '\n        _____\n.-----.|     .----..-----..-----..-----.\n|     ||  --  |   _||  _  ||     ||  -__|\n|__|__||_____/|__|  |_____||__|__||_____|',
  otpwrap: '\n        __\n.-----.|  |_.-----..--.--.--..----..---.-..-----.\n|  _  ||   _|  _  ||  |  |  ||   _||  _  ||  _  |\n|_____||____|   __||________||__|  |___._||   __|\n            |__|                          |__|',
  nhello_node_express_site: '\n        __            __ __                              __                                                                        __ __         \n.-----.|  |--..-----.|  |  |.-----.    .-----..-----..--|  |.-----.    .-----..--.--..-----..----..-----..-----..-----.    .-----.|__|  |_.-----.\n|     ||     ||  -__||  |  ||  _  |    |     ||  _  ||  _  ||  -__|    |  -__||_   _||  _  ||   _||  -__||__ --||__ --|    |__ --||  |   _|  -__|\n|__|__||__|__||_____||__|__||_____|    |__|__||_____||_____||_____|    |_____||__.__||   __||__|  |_____||_____||_____|    |_____||__|____|_____|'
};

exports.drawArtword = function (artword) {
  // Use the same gradient on every line
  // let duck = gradient('orange', 'green').multiline([
  // let duck = gradient('orange', 'red').multiline([
  var appname = gradient.rainbow.multiline([artword].join('\n'));
  console.log(appname);
};

exports.drawLogOtpWrap = function (artword) {
  // Use the same gradient on every line
  // let duck = gradient('orange', 'green').multiline([
  // let duck = gradient('orange', 'red').multiline([
  var appname = gradient.rainbow.multiline([artword].join('\n'));
  console.log(appname);
};