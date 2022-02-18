const SpotifyWebApi = require('spotify-web-api-node')

exports.home = async (req, res) => {
    console.log('La page home');
    res.render('home')
}

exports.search = async (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        clientId: '<your clientId>',
        clientSecret: '<your clientSecret>'
    })

    // Retrieve an access token
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);


            console.log(req.body);
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.searchTracks(req.body.searchinput).then(
                function (data) {

                    let dataLoop = data.body.tracks.items

                    console.log('Search Loop', dataLoop)

                    res.render('home', {
                        dataLoop
                    })
                    // console.log('Search by "Love"', data.body.tracks.items[0]);
                },
                function (err) {
                    console.error(err);
                }
            )
        },
        function (err) {
            console.log(
                'Something went wrong when retrieving an access token',
                err.message
            );
        }
    );
}



// /**
//  * This example uses the Client Credentials authorization flow. 
//  */

// /**
//  * Get the credentials from Spotify's Dashboard page.
//  * https://developer.spotify.com/dashboard/applications
//  */