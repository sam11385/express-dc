axios
  .get('/api/owners')
  .then(function(response) {
    document.getElementById('pets').innerHTML = response.data[0].name;
  })
  .catch(function(error) {
    console.log(error);
  });
