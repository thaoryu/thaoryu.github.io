function GetMap()
    {
        var map = new Microsoft.Maps.Map('#myMap', {
    
    center: new Microsoft.Maps.Location(42.6544,-111.6047),
    mapTypeId: Microsoft.Maps.aerial,
    zoom: 10
});
    }