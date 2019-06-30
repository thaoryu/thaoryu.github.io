function GetMap()
    {
        var map = new Microsoft.Maps.Map('#myMap', {
    
    center: new Microsoft.Maps.Location(53.763200, -2.703100),
    mapTypeId: Microsoft.Maps.aerial,
    zoom: 10
});
    }