/**
 * https://github.com/bokub/gradient-string
 * http://patorjk.com/software/taag-v1/ -> Chunky, Graceful,
 *
 * @type {InitGradient}
 */

const gradient = require('gradient-string');

exports.artword = {
  nauth: `
        _______         __   __
.-----.|   _   |.--.--.|  |_|  |--.
|     ||       ||  |  ||   _|     |
|__|__||___|___||_____||____|__|__|`,
  nhello: `
        _______         __ __
.-----.|   |   |.-----.|  |  |.-----.
|     ||       ||  -__||  |  ||  _  |
|__|__||___|___||_____||__|__||_____|`,
  ndrone: `
        _____
.-----.|     \.----..-----..-----..-----.
|     ||  --  |   _||  _  ||     ||  -__|
|__|__||_____/|__|  |_____||__|__||_____|`,
  otpwrap: `
        __
.-----.|  |_.-----..--.--.--..----..---.-..-----.
|  _  ||   _|  _  ||  |  |  ||   _||  _  ||  _  |
|_____||____|   __||________||__|  |___._||   __|
            |__|                          |__|`,
  nhello_node_express_site: `
        __            __ __                              __                                                                        __ __         
.-----.|  |--..-----.|  |  |.-----.    .-----..-----..--|  |.-----.    .-----..--.--..-----..----..-----..-----..-----.    .-----.|__|  |_.-----.
|     ||     ||  -__||  |  ||  _  |    |     ||  _  ||  _  ||  -__|    |  -__||_   _||  _  ||   _||  -__||__ --||__ --|    |__ --||  |   _|  -__|
|__|__||__|__||_____||__|__||_____|    |__|__||_____||_____||_____|    |_____||__.__||   __||__|  |_____||_____||_____|    |_____||__|____|_____|`
};

exports.drawArtword = (artword) => {
  // Use the same gradient on every line
  // let duck = gradient('orange', 'green').multiline([
  // let duck = gradient('orange', 'red').multiline([
  let appname = gradient.rainbow.multiline([artword].join('\n'));
  console.log(appname);
};

exports.drawLogOtpWrap = (artword) => {
  // Use the same gradient on every line
  // let duck = gradient('orange', 'green').multiline([
  // let duck = gradient('orange', 'red').multiline([
  let appname = gradient.rainbow.multiline([artword].join('\n'));
  console.log(appname);
};

