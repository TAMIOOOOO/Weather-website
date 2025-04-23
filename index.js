http://api.weatherapi.com/v1/current.json?key=ee8a9c14399b4f45b3d50136252304&q=Philippines&aqi=no

let target = 'Philippines'

fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=ee8a9c14399b4f45b3d50136252304&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);
    
};

fetchResult(target);
