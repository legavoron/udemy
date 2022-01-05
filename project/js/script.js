 
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'), 
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        addNameFilm = document.querySelector('.adding__input'),
        spanYes = document.querySelector('.yes'),
        checkBox = spanYes.previousElementSibling;
    
    
    const delAdv = (arr) => {
        arr.forEach(item => item.remove());// delete advertisement blocks
    };
   

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        
    };
    

    const sortMovieList = () => {
        movieDB.movies.sort();
    };
    
            
    const createMovieList = (films, parent) => {
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
                sortMovieList();
            });
        });
        
    };
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let str = addNameFilm.value;
        
        if (str.length > 21) { // length film name
            str = str.slice(0,21) + '...';
        }
    
        movieDB.movies.push(str);
        sortMovieList();
        createMovieList(movieDB.movies, movieList);
    
        event.target.reset(); // clear input
    
        if (checkBox.checked) { // checkbox
            console.log('Добавляем любимый фильм');
            checkBox.checked = false;
        }
    });

    delAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});


