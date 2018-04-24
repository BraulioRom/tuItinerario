const FB = require("fb");

let Extraction = (id) => {
    FB.setAccessToken('EAACEdEose0cBADZBbSVM9EuSnmRjRGCMB5SNDQCHCngkpZCJilvCDO90bbwt7ZAgjmIvpoCZBE7SQjFRORTNEsmnLZApzFDGZCGDCcHyixYcB9UPeTcHvqqtMOOICGcLKxsn7LqszTX4cL1xMRfQ7mZAI8YfXLuxc5hYwATA1pmsKWjdzUMpQZChkVuT5SVXkeyhRpuyavPExG3tXJaaSZBlF');
    return new Promise((resolve, reject) => {
        FB.api(id, { fields: 'id,name,price_range,payment_options,parking,about,location,hours,picture{url},visitor_posts.limit(100000){message}' }, (res) => {
            if (!res || res.error) {
                reject(!res ? 'error occurred' : res.error);
            } else {
                resolve(res);
            }
        });
    });
};

module.exports = {
    Extraction
};