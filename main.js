// - - - - - - - - - - - - MAP - - - - - - - - - - - -
// Координаты + зум.
var mapOptions = {
   center: [58.02707, 38.86224],
   zoom: 16
}
// Создание объекта "map".
var map = new L.map('map', mapOptions);
// Создание слоев.
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// Добавляем слои на карту.
map.addLayer(layer);

// - - - - - - - - - - - - LOGO - - - - - - - - - - - -
// Настройки лого.
var iconOptions = {
   iconUrl: 'orion.png',
   iconSize: [65, 65]
}
// Создание иконки.
var customIcon = L.icon(iconOptions);

// - - - - - - - - - - - - MARKER - - - - - - - - - - - -
// Настройки маркера.
var markerOptions = {
   title: "MyLocation",
   clickable: true,
   draggable: true,
   icon: customIcon
}

// Создание маркера.
var marker = L.marker([58.02707, 38.86224], markerOptions);
//Подпись под маркером.
marker.bindPopup('Hi, this is my work! :)').openPopup();
// Добавляем маркер.
marker.addTo(map);

// - - - - - - - - - - - - CIRCLE - - - - - - - - - - - -
var circleCenter = [58.02707, 38.86224];
// Настройки круга.

var circleOptions = {
   color: 'green'
}
// СОздание круга.
var circle = L.circle(circleCenter, 20, circleOptions);
circle.addTo(map);
