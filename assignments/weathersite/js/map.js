function GetMap()
    {
        var map = new Microsoft.Maps.Map('#myMap', {
    
    center: new Microsoft.Maps.Location(44.714389, -114.699917),
    mapTypeId: Microsoft.Maps.aerial,
    zoom: 6
});
    }