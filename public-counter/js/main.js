axios
  .get('/api/count')
  .then(function(response) {
    document.getElementById('count').innerHTML = response.data;
  })
  .catch(function(error) {
    console.log(error);
  });

function increment() {
  axios.post('/api/increment').then(function(response) {
    document.getElementById('count').innerHTML = response.data;
  });
}

function decrement() {
  axios.post('/api/decrement').then(function(response) {
    document.getElementById('count').innerHTML = response.data;
  });
}
