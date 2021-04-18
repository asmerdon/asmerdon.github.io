const strava_auth_link = "https://www.strava.com/oauth/token"
var lastFMUser 
var globalBestObject


class userWorkout { //class for each workout. Includes songs listened
    constructor(obj_name, start_date, elapsed_time, average_heartrate, average_speed, max_heartrate, max_speed, suffer_score, songsListened) {
        this.obj_name = obj_name;
        this.start_date = start_date;
        this.elapsed_time = elapsed_time;
        this.average_heartrate = average_heartrate;
        this.average_speed = average_speed;
        this.max_heartrate = max_heartrate;
        this.max_speed = max_speed;
        this.suffer_score = suffer_score;
        this.songsListened = songsListened;
    }
}

class bestObject { //class for best workout
    constructor(bestArray, bestMaxHeartrate, bestMaxSpeed, bestSufferScore, bestAverageSpeed, bestAverageHeartrate){
        this.bestArray = bestArray;
        this.bestMaxHeartrate = bestMaxHeartrate;
        this.bestMaxSpeed = bestMaxSpeed;
        this.bestSufferScore = bestSufferScore;
        this.bestAverageSpeed = bestAverageSpeed;
        this.bestAverageHeartrate = bestAverageHeartrate;
    }
}

async function getUserName(){ //check to see if username exists
    var lastFMUserCheck = document.getElementById("lastfm_username").value
    const userNameLink = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${lastFMUserCheck}&api_key=a3394ed77f14de87fddf4288c5480c26&format=json`
    const response = await fetch(userNameLink);
    const data = await response.json();
    if(data.hasOwnProperty("user")){ //continues if username is found
        lastFMUser = document.getElementById("lastfm_username").value ;
        document.getElementById("inputError").style="display:none";
        document.getElementById("progressDiv").style=""; //shows loading bar
        document.getElementById("progressbar").style = "width:0%"; //sets loading bar percentage to 0
        disableButton();
        reAuthorize();
    }
    else{
        document.getElementById("inputError").style=""; //asks for user to enter again
    }
    
}

function disableButton(){ //disables button once results generation begins
    document.getElementById("generateButton").disabled = true;
}

async function stravaUserLogin(){
    location.replace("https://www.strava.com/oauth/authorize?client_id=61540&redirect_uri=https://asmerdon.github.io/&response_type=code&approval_prompt=auto&scope=activity:read_all") //connects user's strava
}

async function reAuthorize(){ //authorizes strava api tokens.
    const response = await fetch(strava_auth_link,{ //api request
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({

            client_id: '61540',
            client_secret: 'c4549adebe10726af65914cade2b527d4fb60e47',
            refresh_token: 'a100cdbc13e707ca5efdba5201b03ef251fe889f',
            grant_type: 'refresh_token'
        })
    })
    const data = await response.json(); //handles response
    getActivities(data);
    document.getElementById("progressbar").style = "width:15%;background-color:#EF323E !important"; //loading bar, !important overrides initial colour
}

async function getActivities(res){
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}` ///json access token generated from reAuthorize
    const response = await fetch(activities_link)
    const data = await response.json()
    makeVar(data)
    document.getElementById("progressbar").style = "width:20%;background-color:#EF323E !important";
}

async function makeVar(res){ //creates each workout object. async and await used to pull last.fm data
    var workoutArray = []
    var stravaOutput = res;
    for (var key of Object.keys(stravaOutput)) {
        var startDateUnix = convertStartDate(stravaOutput[key]['start_date'])
        var endDateUnix = getEndDate(startDateUnix, stravaOutput[key]['elapsed_time'])
        var songsListened = await getUserTracks(startDateUnix, endDateUnix)      
        var name = String("Workout " + key);
        let workoutObj = new userWorkout(
            name,
            stravaOutput[key]['start_date'],
            stravaOutput[key]['elapsed_time'],
            stravaOutput[key]['average_heartrate'],
            stravaOutput[key]['average_speed'],
            stravaOutput[key]['max_heartrate'],
            stravaOutput[key]['max_speed'],
            stravaOutput[key]['suffer_score'],
            songsListened.recenttracks.track)

        workoutArray.push(workoutObj)
        console.log(workoutObj);
    }
    getBest(workoutArray);
    document.getElementById("progressbar").style = "width:50%;background-color:#EF323E !important";
}

function convertStartDate(start_date) { //converts start time to unix
    var startDateUnix = new Date(start_date).valueOf() / 1000;
    return(startDateUnix)
}

function getEndDate(startDateUnix, elapsed_time) { //converts end time to unix
    var endDateUnix = startDateUnix + elapsed_time;
    return(endDateUnix)
}

async function getUserTracks(startDateUnix, endDateUnix) { //funciton to get the user tracks from last.fm
    const userTracksLink = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFMUser}&api_key=a3394ed77f14de87fddf4288c5480c26&format=json&from=${startDateUnix}&to=${endDateUnix}`
    const response = await fetch(userTracksLink)
    const data = await response.json()
    return data;
}

async function select(){ //gets called when user selects a workout to view
    document.getElementById("progressbar").style = "width:0%;background-color:#EF323E !important"
    var select = document.getElementById("select").value
    if(select == "overall"){
        getTrackInformation(globalBestObject.bestArray);
        document.getElementById("workoutInfo").style="display:none";
    }
    if(globalBestObject.hasOwnProperty(select)) {
        selectVar = window[select]
        selectInfo = await getIndividualGenresArray(selectVar); //gets song info for selected workout
        countOccurences(selectInfo)
        const writtenDate = new Date(convertStartDate(selectVar.start_date)*1000); //converts date time into better readable format
        const elapsed = secondsToHMS(selectVar.elapsed_time)
        document.getElementById("workoutInfo").style="padding:20px";
        document.getElementById("date").innerHTML = writtenDate.toLocaleString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric",
            hour: "numeric", minute: "numeric", second: "numeric"}); //shows datetime
        document.getElementById("elapsed").innerHTML = elapsed;
        showTracks(selectVar.songsListened)
    }

}

function secondsToHMS(elapsed){ //converts seconds to minutes and hours
    elapsed = Number(elapsed);
    var h = Math.floor(elapsed / 3600);
    var m = Math.floor(elapsed % 3600 / 60);
    var s = Math.floor(elapsed % 3600 % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

function showTracks(tracks){
    for(x=0; x<3; x++){
        document.getElementById(String("info"+x)).style="float: left; padding:20px"
        if(!tracks[x]){
            document.getElementById(String("info"+x)).style="display:none" //don't show element if not enough tracks
            break;
        }
        if(!tracks[x].hasOwnProperty(["@attr"])){ //check to get rid of currently playing tracks (lastfm api quirk)
            if(tracks[x].name == "No Love"){
                document.getElementById(String("image"+x)).src = "https://media.pitchfork.com/photos/5929c027c0084474cd0c314f/1:1/w_320/6698e088.jpeg";
            }
            else if(tracks[x].name == "The Fever (Aye Aye)"){
                document.getElementById(String("image"+x)).src ="https://img.discogs.com/m0t7G4PxCd37poUw3hGhzXEI5IY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7574583-1444343617-5364.jpeg.jpg"
            }
            else{
                document.getElementById(String("image"+x)).src = tracks[x].image[3]["#text"]; //shows album image
            }
            artistName = String(tracks[x].artist["#text"]);
            trackName = String(tracks[x].name);
            document.getElementById(String("artistname"+x)).style="display: inline" 
            document.getElementById(String("artistname"+x)).innerHTML = artistName; //shows artist name
            document.getElementById(String("songname"+x)).style="display: inline"
            document.getElementById(String("songname"+x)).innerHTML = trackName; //shows track name
        }
    }
}

async function getBest(workoutArray){ //sorts array of workouts to find the best workouts
    var bestArray = [];
    bestMaxHeartrate = workoutArray.sort(function(a, b){return b.max_heartrate - a.max_heartrate})[0]; //.sort sorts an array based on the parameters defined with a and b
    bestMaxSpeed = workoutArray.sort(function(a, b){return b.max_speed - a.max_speed})[0];
    bestSufferScore = workoutArray.sort(function(a, b){return b.suffer_score - a.suffer_score})[0];
    bestAverageSpeed = workoutArray.sort(function(a, b){return b.average_speed - a.average_speed})[0];
    bestAverageHeartrate = workoutArray.sort(function(a, b){return b.average_heartrate - a.average_heartrate})[0];
    bestArray.push(bestMaxHeartrate, bestMaxSpeed, bestSufferScore, bestAverageSpeed, bestAverageHeartrate); //all pushed to an array for the overall breakdown
        
    let best = new bestObject( //best object created for use in select function (although stored globally)
        bestArray,
        bestMaxHeartrate,
        bestMaxSpeed,
        bestSufferScore,
        bestAverageSpeed,
        bestAverageHeartrate
    )
    globalBestObject = best; //stores as globas
    getTrackInformation(bestArray); //inital results shown called from here instead of select() function
    showTracks(best.bestSufferScore.songsListened)
    document.getElementById("progressbar").style = "width:75%;background-color:#EF323E !important" 
}

async function getTrackInformation(array){ //called for overall best workouts
    var genresArray = []; //will hold every genre returned
    for(let item of array){ 
        var individualGenresArray = await getIndividualGenresArray(item); 
        for(let item of individualGenresArray){
            genresArray.push(item);
        }
    }
    countOccurences(genresArray);
}

async function getIndividualGenresArray(item){ //called for individual workouts
    var individualGenresArray = await getWorkoutSongsInformation(item);
    return(individualGenresArray)
}

async function getWorkoutSongsInformation(item){
    var individualGenresArray = []; //will hold every genre returned from current workout
    for(let track of item.songsListened) {
        if(!track.hasOwnProperty(["@attr"])){ //check to get rid of currently playing tracks (lastfm api quirk)
            artistName = String(track.artist["#text"]);
            trackName = String(track.name);
            console.log(artistName + " - " + trackName);
            var songInformation = await getAudioDB(artistName, trackName); //fetches audiodb info
            if(!songInformation.track){ //checks if track exists on audiodb database
                console.log("No information on this track.")
            }
            else {
                if(!songInformation.track[0].strGenre){ //checks to see if info on track's genre exists
                    console.log("No information on this track's genre.") 
                }
                else {
                    var genre = songInformation.track[0].strGenre;
                    individualGenresArray.push(genre) //pushes genre to genreArray
                }
            }
        }
    }
    return individualGenresArray;
}

function countOccurences(array){
    var occurences = []; //will hold number of times a genre appears in passed in array
    let genresUnique = Array.from(new Set(array)) //gets each unique genre from array
    for(let item of genresUnique) { //iterates through each unique genre
        var genreOccurence = 0;
        for(var i = 0; i < array.length; i++){ //iterates through each item in genre array
            if(array[i] == item){
                var genreOccurence = genreOccurence + 1; //counts how many instances of a genre there are
            }
        }
        occurences.push(genreOccurence); //pushes to occurences array
    }
    pieChart(genresUnique, occurences); //order of each array should always match
}

async function getAudioDB(artistName, trackName){ //audioDB api
    const itemSearch = `https://theaudiodb.p.rapidapi.com/searchtrack.php?s=${artistName}&t=${trackName}`
    const response = await fetch(itemSearch, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4cf12d8912msh606aa704b01b0fep1d30f8jsn9d41f9778ee7",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
    })
    const data = await response.json()
    return data;
}

function pieChart(genresUnique, occurences) {
    document.getElementById("progressbar").style = "width:100%;background-color:#EF323E !important" //loading bar finished
    document.getElementById("selectDiv").style="padding:20px"; //shows select div
    document.getElementById("breakdownDiv").style="padding-top:20px";
    document.getElementById("moreInfo").style="padding:20px";
    var pieChartContent = document.getElementById('pieChartContent');
    pieChartContent.innerHTML = '&nbsp;';
    $('#pieChartContent').append('<canvas id="pieChart" style="width:50%;height:50%;"></canvas>') //redraws canvas when user selects a different workout to view
    ctx = $("#pieChart").get(0).getContext("2d");
    chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',
    responsive:true,
    maintainAspectRatio: false,
    // The data for our dataset
    data: {
        labels: genresUnique, //each unique genre is passed through as for the labels
        datasets: [{
            backgroundColor: 'rgb(239, 50, 62)',
            borderColor: 'rgb(255, 99, 132)',
            data: occurences, //data is the occurences of each genre
        }]
    },

    // Configuration options go here
    options: {
        plugins: {
          datalabels: {
            color: 'white',
            labels: {
                render:'labels',
              value: {},
              title: {
                color: 'white'
              }
            }
          }
        }
      }
    });
}


