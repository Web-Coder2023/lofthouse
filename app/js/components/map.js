
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543,30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([59.943543,30.338928], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/map/location-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });
    
    myMap.geoObjects.add(myPlacemark); 
}
