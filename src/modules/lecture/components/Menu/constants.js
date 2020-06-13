import editor from './img/editor.svg';
import lecture from './img/lecture.svg';
import tasks from './img/tasks.svg';
import comments from './img/comments.svg';

export const menuItems = {
    registered: [
        {
            name: 'editor',
            access: true,
            img: editor,
        },
        {
            name: 'text',
            access: true,
            img: lecture,
        },
        {
            name: 'tests',
            access: true,
            img: tasks,
        },
        {
            name: 'comments',
            access: true,
            img: comments,
        },
    ],
    unregistered: [
        {
            name: 'editor',
            access: 'true',
            img: editor,
        },
        {
            name: 'text',
            access: 'true',
            img: lecture,
        },
        {
            name: 'tests',
            access: false,
            img: tasks,
        },
        {
            name: 'comments',
            access: false,
            img: comments,
        },
    ],
};
