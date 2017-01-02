/* Address to extract all the flights from */
var adrs = 'http://www.kayak.co.uk/flights/TYO-MAD/2017-06-07/2017-06-16'
//var adrs = 'http://www.momondo.co.uk/flightsearch/?Search=true&TripType=2&SegNo=2&SO0=TYO&SD0=AGP&SDP0=20-02-2017&SO1=AGP&SD1=TYO&SDP1=27-02-2017&AD=1&TK=ECO&DO=false&NA=false'
//var adrs = 'http://skyscanner.net'
//var adrs = 'http://www.expedia.com'

/* Function to run after timeout */
function set_timeout_cb() {
//  page.render('results' + '.png');
  console.log('Plain text\n\n' + page.plainText);
  phantom.exit();
}

var WebPage = require('webpage');
page = WebPage.create();
page.settings.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36';

page.onLoadFinished = function(status) {
  if (status !== 'success') {
    console.log('Error wating to finish');
    phantom.exit(1);
  } else {
    window.setTimeout(set_timeout_cb, 5000); /* Wait 5s */
  }
}

page.open(adrs);
