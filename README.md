Name of this repo will change after everything is finished

# APIs challenge

## Robot Generator 
Robot Generator uses [RoboHash API](https://robohash.org/)

```javascript 
  // I used the state to store all the url queries 
  this.state = {
    name: 'default',
    type: "set_set1",
    rangeX: 200,
    rangeY: 200,
    backGround: 0
  };

  // state updates on input change
  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  // since state change will re-render the component, img will update with the update url 
  const { name, type, rangeX, rangeY, backGround } = this.state;

  const url = `https://robohash.org/${name}/${type}/bgset_bg${backGround}/?size=${rangeX}x${rangeY}`;

  <img alt="robot" src={url} />

```
## MetaWeather 
Weather report is generated with [MetaWeather API](https://www.metaweather.com/api/)

There is a chain of API calls I need to make to retrieve user current location weather report 

```javascript 
// I utilized the state to keep track on info fetched and tell me if all APIs have successfully finished their work 
this.state = {
  lat: '',
  lng: '',
  resolved: false
};

// first I need to grab user current location, I used browser built-in API to do so 
navigator.geolocation.getCurrentPosition(position => {
  const lat =  position.coords.latitude;
  const lng =  position.coords.longitude;

  // used metaweather API to fetch current location city and woeid
  const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`;
  fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      city: data[0].title,
      woeid: data[0].woeid,
      lat,
      lng
  // and then I used city and woeid to grab weather report 
  })).then(() => this.getInfo())

  // getInfo get cloest 5 day weather report of the city 
  getInfo(){
    const { woeid } = this.state;
    const url = `https://www.metaweather.com/api/location/${woeid}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        weathers: data.consolidated_weather
      }))
      .then(() => this.buildWeather());
  }

  // and then I built weather components to display information 
  buildWeather(){
    const { weathers } = this.state;
    const weatherInfo = weathers.map(weather => {
      return (
        <WeatherItem key={weather.id}
          weather={weather} />
      );
    });
  
  // since resolved: true can't be reached unless all info is fetched and weather components are built, it can be used to display the report 
    this.setState({
      weathers: weatherInfo,
      resolved: true
    });
  }
```

With resolved set up in the state, I am able to use that boolean to tell weather the component is still loading or not
```javascript 
if(this.state.resolved){
  return (
    <div className="component"> 
      <h1>{this.state.city}</h1>
      {this.state.weathers}
    </div>
  );
}else{
  return( 
    <div className="component">
      <h1>Loading...</h1>
    </div>
  );
}
```

## Email Hack
Email Hack uses [HaveIBeenPwned API](https://haveibeenpwned.com/)
& [Clearbit API](https://clearbit.com/docs)

I used HaveIBeenPwned API v2 which gives a lot more information to utilize. However, it doesn't provide company logo, so I used another API called clearbit to fetch that image.

One interesting thing to note is that it returns description as a string of html so I needed to forcefully parse that into an innerHTML, so that the html can be interpreted.

```javascript
<p dangerouslySetInnerHTML={{__html: hack.Description}}/>

```

## Newton Calculator 
Newton Calculator uses [Newton API](https://newton.now.sh/)

I built an array of options so that user will only need to input the expression they want to calculate. The API itself returns error message if expression cannot be calculated, so I could conveniently use that as error message
