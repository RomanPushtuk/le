const test = {
    title: "Тест1",
    description:
        'Важной частью курса' +
        ' является закрепление изученного материала' +
        ' через решение задач. И именно по результатам' +
        ' решения задач вам будет поставлена оценка за курс.' +
        ' На шагах с задачами рядом с полем ответа приводится' +
        ' остаются доступны по ссылке под полем задачи.',
    questions: [
        {
            title: 'В чем измеряется сопротивление?',
            component: 'checkbox',
            options: [
                {
                    value: "Вариант11",
                    correct: true
                },
                {
                    value: "Вариант12",
                    correct: true
                },
                {
                    value: "Вариант13",
                    correct: false
                }
            ],
        },
        {
            title: 'В чем измеряется сила тока?',
            component: 'checkbox',
            options: [
                {
                    value: "Вариант21",
                    correct: true
                },
                {
                    value: "Вариант22",
                    correct: true
                },
                {
                    value: "Вариант23",
                    correct: false
                }
            ]
        },
    ],
};

const comments = [
    {
        id: 1,
        authorId: 1,
        authorName: 'Пожиратель душ 1',
        vote: 'default',
        text:
            'There are many of passages of Lorem Ipsum available,' +
            ' some form, by injected humour.',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 2,
        authorId: 2,
        authorName: 'Пожиратель душ 2',
        vote: 'like',
        text:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority havesuffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum suffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum suffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum suffered alteration in some form, by injected humour There are many variations of passages of Lorem Ipsum available, but',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 3,
        authorId: 3,
        authorName: 'Пожиратель душ 3',
        vote: 'dislike',
        text:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 4,
        authorId: 4,
        authorName: 'Пожиратель душ 4',
        vote: 'default',
        text: 'Text',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 5,
        authorId: 1,
        authorName: 'Пожиратель душ 4',
        vote: 'default',
        text: 'There are many variations of passages of Lorem Ipsum available, but',
        dateTime: '17.04.2019 01:25',
    },
];

module.exports.test = test;
module.exports.comments = comments;