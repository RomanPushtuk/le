export const menuItems = {
    registered: [
        {
            name: 'editor',
            access: true,
        },
        {
            name: 'text',
            access: true,
        },
        {
            name: 'tests',
            access: true,
        },
        {
            name: 'comments',
            access: true,
        },
    ],
    unregistered: [
        {
            name: 'editor',
            access: 'true',
        },
        {
            name: 'text',
            access: 'true',
        },
        {
            name: 'tests',
            access: false,
        },
        {
            name: 'comments',
            access: false,
        },
    ],
};

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

const comments = [
    {
        id: 1,
        userId: 'Пуштук Роман',
        estimation: 'default',
        content:
            'There are many variations of passages of Lorem Ipsum available,' +
            ' but the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 2,
        userId: 'Пуштук Роман',
        estimation: 'like',
        content:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
    {
        id: 3,
        userId: 'Пуштук Роман',
        estimation: 'dislike',
        content:
            'There are many variations of passages of Lorem Ipsum available, but' +
            ' the majority have suffered alteration in some form, by injected humour',
        dateTime: '17.04.2019 01:25',
    },
];

export const lecture = {
    id: 1,
    title: 'Лекция1',
    lectureContent: '',
    test,
    comments,
};
