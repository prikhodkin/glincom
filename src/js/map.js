ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
      center: [55.712910, 37.644477],
      zoom: 12
    }),

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [55.712710, 37.644477]
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: 'Метка',
        balloonContent: 'Меня можно перемещать'
      }
    }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'twirl#redStretchyIcon',
      // Метку можно перемещать.
      draggable: false
    }),


    myPlacemark2 = new ymaps.Placemark([55.712710, 37.644477], {
      // Свойства.
      hintContent: 'GLINCOM'
    }, {
      // Опции.
      // Своё изображение иконки метки.
      iconImageHref: '/img/pin.svg',
      // Размеры метки.
      iconImageSize: [110, 35],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-3, -42]
    });

  // Добавляем все метки на карту.
  myMap.geoObjects

    .add(myPlacemark2)

}
