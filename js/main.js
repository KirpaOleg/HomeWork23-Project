/* Задания на урок:
Все изминения реализовать только при помощи JS
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "эпическая фантастика"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту (загуглить специальный метод массивов)

5) Добавить нумерацию выведенных фильмов */

//1
const promo__adv = document.querySelector('.promo__adv');
promo__adv.remove();
// console.log(promo__adv);

//2
const promo__genre = document.querySelector('.promo__genre');
promo__genre.innerText = 'эпическая фантастика';
// console.log(promo__genre);

//3
const promo__bg = document.querySelector('.promo__bg');
promo__bg.style.background = 'url(../img/bg.jpg)';
// console.log(promo__bg);


const movieDB = {
    movies: [
        "ГЛАВНЫЙ ГЕРОЙ",
        "ГЛАДИАТОР",
        "ГОДЗИЛЛА 2",
        "ВРЕМЯ",
        "НИКТО"
    ]
};


const promo__interactive = document.createElement('promo__interactive-item');
// promo__interactive-item.forEach((li) => {
//     li.innerText = 'The first';
//   })    
console.log(promo__interactive);