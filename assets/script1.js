$.ajax({
  url: 'https://www.metaweather.com/api/location/search/?query=london',
  method: 'GET'
}).then(response => {
  $.ajax({
    url: `https://www.metaweather.com/api/location/${response.woeid}`,
    method: 'GET'
  }).then(response => {
    
  })
})