fetch('http://api.weatherapi.com/v1/current.json?key=9db6a93cc2ed4dbeac692514231412&q=London')
    .then((response) => response.json())
    .then((data) => console.log(data))