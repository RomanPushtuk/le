var express = require('express');
var cookieParser = require('cookie-parser');
var Lecture = require('./Lecture');
var Lectures = require('./Lectures');
var Users = require('./Users');
var { test, comments } = require('./constants');

const lecture1  = {
    id: 1,
    lectureTitle: 'Лекция 1',
    lectureContent: 'Контент лекции 1',
    test: test,
    comments: comments
};

const lecture2 = {
    id: 2,
    lectureTitle: 'Лекция 2',
    lectureContent: 'Контент лекции 2',
    test: test,
    comments: comments
};


const lectures = [
    lecture1,
    lecture2
];

const theme1 = {
    id: 1,
    title: 'Тема 1',
    description: 'Описание темы 1',
    date: '18.04.2020',
    lectures: [
        {
            id: 1,
            title: 'Лекция 1',
            progress: {
                total: 2,
                complete: 0,
            },
        }
    ],
};

const theme2 = {
    id: 2,
    title: 'Тема 2',
    description: 'Описание темы 2',
    date: '18.04.2020',
    lectures: [
        {
            id: 2,
            title: 'Лекция 2',
            progress: {
                total: 2,
                complete: 0,
            },
        }
    ],
};

const themes = [
    theme1,
    theme2
];

const users = [
    {
        id: 1,
        userName: "Разрушитель Миров",
        login: "123",
        password: "456",
    }
];

const Lecture1 = new Lecture(lecture1);
const Lecture2 = new Lecture(lecture2);

const LectureS = new Lectures([Lecture1, Lecture2]);


var app = express();

const jsonParser = express.json();

app.use("/circuitjs1", express.static('./circuitjs1/circuitjs1'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cookieParser());

app.get('/', function(req, res) {
    res.sendfile('./circuitjs1/circuitjs.html');
});

// получение всех тем
app.get('/themes', function(req, res) {
    res.send(themes);
});

// авторизация пользователя из куков
app.get('/authorization', function(req, res) {
    console.log(req.cookies);
    const {login, password} = req.cookies;
    for (let i = 0; i < users.length; i++) {
        if (users[i].login === login && users[i].password === password) {
            return res.send(users[i]);
        }
    }
    res.status(404).send(`Пользователь не найден`);
});

// Получение лекции по её id
app.get('/lecture/:id', function(req, res) {
    const lectureId = Number(req.params.id);
    const lecture = LectureS.getLectureById(lectureId);
    if(lecture){
        return res.send(lecture);
    }
    res.status(404).send(`Лекция ${lectureId} не найдена`);
});

// Добавить коммментрий
// Оценить комментраий
app.post('/lecture/:id', function(req, res) {
    const lectureId = Number(req.params.id);
    const {login, password} = req.cookies;
    const lecture = getLectureById(lectureId);
    const {command, comment, commentId} = req.body;

    if (!userExist(login, password)) return res.status(404).send(`Данный пользователь не найден`);

    if (command === "ADD_COMMENT") {
        const comments = lecture.addComment(comment);
        return res.send(comments);
    }

    if (command === "LIKE_COMMENT") {
        const comments = lecture.likeComment(commentId);
        return res.send(comments);
    }

    if (command === "DISLIKE_COMMENT") {
        const comments = lecture.dislikeComment(commentId);
        return res.send(comments);
    }
});

// Изменить прогресс лекции
// Изменить комментарий
app.put('/lecture/:id', function(req, res) {
    const lectureId = Number(req.params.id);
    const {login, password} = req.cookies;
    const lecture = getLectureById(lectureId);
    const {command, commentId, comment, progress} = req.body;

    if (!userExist(login, password)) return res.status(404).send(`Данный пользователь не найден`);

    if (command === "CHANGE_COMMENT") {
        const comments = lecture.changeComment(commentId, comment);
        return res.send(comments);
    }

    if (command === "CHANGE_PROGRESS") {
        lecture.changeProgress(progress);
    }
});

app.delete('/lecture/:id', function(req, res) {
    const lectureId = Number(req.params.id);
    const {login, password} = req.cookies;
    const lecture = getLectureById(lectureId);
    const {command, commentId} = req.body;

    if (!userExist(login, password)) return res.status(404).send(`Данный пользователь не найден`);


    if (command === "DELETE_COMMENT") {
        const comments = lecture.deleteComment(commentId, comment);
        return res.send(comments);
    }
});

app.listen(8080);

console.log('Сервер стартовал!');
