function GetMap()
    {
        var map = new Microsoft.Maps.Map('#myMap', {
    
    center: new Microsoft.Maps.Location(42.0372, -111.3960),
    mapTypeId: Microsoft.Maps.aerial,
    zoom: 13
});
    }