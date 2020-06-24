import React from 'react';

export const API_URL = 'http://localhost:4040';

export const USER_ID = 'USER_ID';

export const test = {
    title: 'Задачи по электродинамике',
    description:
        'Важной частью курса' +
        ' является закрепление изученного материала' +
        ' через решение задач. И именно по результатам' +
        ' решения задач вам будет поставлена оценка за курс.' +
        ' На шагах с задачами рядом с полем ответа приводится' +
        ' остаются доступны по ссылке под полем задачи.',
    questions: [
        {
            text: 'в чем измеряется сопротивление?',
            component: 'checkbox',
            questions: {
                'Вариант 11': false,
                'Вариант 21': true,
                'Вариант 31': true,
            },
        },
        {
            text: 'в чем измеряется сила тока?',
            component: 'checkbox',
            questions: {
                'Вариант 12': false,
                'Вариант 22': true,
            },
        },
    ],
};

export const themes = [
    {
        id: 1,
        title: 'Тема 1',
        date: '18.04.2020',
        description: 'Описание темы 1',
        lectures: [
            {
                id: 1,
                title: 'Лекция 1',
                progress: {
                    total: 5,
                    complete: 3,
                },
            },
            {
                id: 2,
                title: 'Лекция 2',
                progress: {
                    total: 5,
                    complete: 5,
                },
            },
            {
                id: 3,
                title: 'Лекция 3',
                progress: {
                    total: 5,
                    complete: 5,
                },
            },
        ],
    },
    {
        id: 2,
        title: 'Тема 2',
        date: '18.04.2020',
        description: 'Описание темы 2',
        lectures: [
            {
                id: 4,
                title: 'Лекция 4',
                progress: {
                    total: 5,
                    complete: 1,
                },
            },
            {
                id: 5,
                title: 'Лекция 5',
                progress: {
                    total: 5,
                    complete: 1,
                },
            },
        ],
    },
];

export const comments = [
    {
        id: 1,
        authorId: 1,
        authorName: 'Пожиратель душ 1',
        estimation: 'default',
        text:
            'There are many variations of passages of Lorem Ipsum available,' +
            ' but the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 2,
        authorId: 2,
        authorName: 'Пожиратель душ 2',
        estimation: 'like',
        text:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 3,
        authorId: 3,
        authorName: 'Пожиратель душ 3',
        estimation: 'dislike',
        text:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 4,
        authorId: 'bMmhpTzIi6swHPb7IM7Zi',
        authorName: 'Пожиратель душ 4',
        estimation: 'default',
        text: 'Text',
        dateTime: '17.04.2019 01:25',
    },
];

export const lecture = {
    id: 1,
    title: 'Лекция 1',
    lectureContent: 'И text, И description, И tasks',
    test,
    comments,
};
