const SpotifyWebApi = require('spotify-web-api-node')

exports.home = async (req, res) => {
    console.log('La page home');
    res.render('home')
}

exports.search = async (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        clientId: '<your clientID>',
        clientSecret: '<your clientSecret>'
    })
    
    console.log(req.body);
    spotifyApi.setAccessToken("<your token>");
    spotifyApi.searchTracks(req.body.searchinput).then(
        function (data) {
            
            let dataLoop = data.body.tracks.items

            console.log('Search by TA MERE', dataLoop)

            res.render('home', {
                dataLoop
            })
            // console.log('Search by "Love"', data.body.tracks.items[0]);
        },
        function (err) {
            console.error(err);
        }
    )
}



// /**
//  * This example uses the Client Credentials authorization flow. 
//  */

// /**
//  * Get the credentials from Spotify's Dashboard page.
//  * https://developer.spotify.com/dashboard/applications
//  */

