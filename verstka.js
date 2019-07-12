// 03 - Свойство display
//\\2019-07-09 18:00:38

переназначаем св - ва элтов, блочному присваиваем
строчные и наоборот:

div { display: inline; }

span { display: block; }

// 04 - Блочная модель
//\\2019-07-09 18:13:06

Блочным элтам можно задавать ширину(width),
    высоту(height), внутренние отступы(padding),
        границу(border) и  внешние отступы(margin)

            ===
            div {
    background: red;
    color: fff;
    width: 200px;
    height: 200px;
    padding: 20px;
    border: 2px solid #000;
    margin: 20px;
}
===

    Ширина элта будет 244px - блок плюс 2 * padding + 2 * borders

Попытаемся сделать это для строчных элтов
В принципе, они сработают - пока элты будут помещаться
на странице.Больше - бардельерро

Margin collapse - по вертикали отступы накладываются,
    т е между блоками в нашем случае отступ будет не 40 px,
        как можно было бы ожидать - а 20

Можно комбинировать поведение блочного со строчным -
    display: inline - block;

У таких блоков коллапса отступов нет

Строчные элты браузер воспринимает как буквы - соотв
если между блоками будут пробелы, будут и отступы.Также,
    чем больше размер шрифта - тем больше отступы

// 05 - Составные свойства
//\\2019-07-09 18:48:40

Padding & margin - примеры составных свойств
там 4 границы в одном св - ве
    (padding - top, padding - right, padding - bottom, padding - left)
ВеПрь на Ниле - верх - право - низ - лево порядок следования
свойств:

padding: 10px 20px 30px 40px;

если указано одно значение - применится для всех границ
два значения: первое для верх - низ, второе - право - лево
три значения: верх - право - низ и для "лево" взято второе значение(право)

// 6 - Единицы измерения
//\\2019-07-09 18:55:26

Помимо пикселов, можно задавать в процентах
Проценты берутся от размеров родителя

Проценты хорошо работают по горизонтали, но глючат по
вертикали

'em' - зависит от св - ва font - size у родителя элта

'rem' - зависит от тега 'html' каков на нем font - size,
    таков и rem

// 07 - Выравнивание inline-block
//\\2019-07-09 18:59:50

Инлайн - блоки можно удобно выравнивать по вертикали

По умолчанию эти блоки выравниваются по содержимому
    (base - line - линия, до которой опускается контент
        внутри блока)

Изменить можно свойством 'vertical-align: middle; (top, bottom)'

// 08 - Свойства позиционирования

Позиционируем при помощи top, left, right, bottom
Но они работают только при включенном св-ве position

По умолчанию у всех элтов
position: static;

А св-ва позиционирования начинают работать при position: relative;

Но при этом сдвигается не сам элт, а его отображение

Чтобы сдвинуть сам элт - position: absolute;

При этом эл-т ищет родителя, у которого position отличный от 'static'
и выравнивается относительно него
При данном выравнивании элт "выпадает из потока" - переходит на другой слой
и никак не будет взаимодействовать с другими эл-тами - будет поверх них ходить

При выравнивании top приоритетнее bottom, а left приоритетнее right

positin: fixed; выравнивается относительно окна браузера

// 09 - Приоритет отображения

По умолчанию приоритет наложения идет сверху вниз по коду - те, которые ниже,
перекрывают вышеописанные элты

Однако если сделать блоки 'inline-block' - они будут вести себя как текст

Блоки можно накладывать друг на друга также с отрицательным margin-left: -20px;

Но это правило наложения действует только когда значения position у элтов одинаковые

Т е если у второго блока 'static', а у первого - 'relative', то первый блок перекроет второй

Еще можно регулировать наложение z-index. Это такая воображаемая ось по направлению 
к наблюдателю, по умолчанию значение z-index: 0, и чем оно выше, тем приоритетнее элт
 
// 11 - Perfect Pixel