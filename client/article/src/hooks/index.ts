import {useState, useEffect} from 'react';

// мы из localStorage с помощью метода getItem("theme") по ключю 'theme'получаем значение, которое содержится в localStorage as string как строку
// с помощью функции JSON.parse() мы переобразовываем ранее полученную строку в объект.
//теперь мы можем получить объект theme и с помощью setTheme можем его поменять
// по дефолту мы используем тему 'dark'
export const useTheme = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') as string )|| 'dark');//localStorage - это объект в JavaScript, 
    //который предоставляет возможность хранить данные на стороне клиента (в браузере). Он позволяет сохранять данные в виде пар "ключ: значение"
    // и предоставляет методы для доступа к этим данным, добавления новых данных, обновления и удаления существующих данных. Данные, сохраненные
    // в localStorage, остаются доступными после перезагрузки страницы или закрытия браузера. Это позволяет использовать localStorage 
    //для сохранения настроек пользователя, состояния приложения и других данных, которые должны сохраняться между сессиями.
    const darkTheme ='https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@1.0.0/dist/css/bootstrap-dark.min.css" />';
    const lightTheme ='https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-light@1.0.0/dist/css/bootstrap-light.min.css" />';
//JSON.stringify() - это метод JavaScript, который преобразует значение JavaScript в строку JSON. В данном случае, метод принимает 
//объект "inverseMode" и преобразует его в строку JSON, где каждое свойство объекта становится парой "ключ: значение" в формате JSON. 
//Таким образом, переменная "jsonString" будет содержать строку JSON, представляющую объект "inverseMode".
    const switchTheme = () => {
        const inverseMode = theme === 'dark'? 'light' : 'dark';
        localStorage.setItem('theme', JSON.stringify(inverseMode));

        const link = document.getElementById('theme-link') as HTMLLinkElement;//получаем HTML элемнт как html линк элемент.
        link.href = theme === 'dark'? darkTheme : lightTheme;

        setTheme(inverseMode);
}
useEffect(() => {//отрисовываем тему при первой загрузке страницы.
    const link = document.getElementById('theme-link') as HTMLLinkElement;//получаем HTML элемнт как html линк элемент.
    link.href = theme === 'dark'? darkTheme : lightTheme;
}, [theme]);
}