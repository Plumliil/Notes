module.exports = [
    { text: '首 页', link: '/' },
    { text: '指 南', link: '/guide/' },
    {
        text: '参 考', children: [
            { text: '组 件', link: '/reference/components/button' },
            { text: '指 令', link: '/reference/directives/' },
            // { text: '插 件', link: '/reference/plugins/' },
        ]
    },
    {
        text: '学习痕迹', children: [
            { text: 'JavaScript', link: '/notes/JavaScript/' },
            { text: 'TypeScript', link: '/notes/TypeScript/' },
            // { text: '插 件', link: '/reference/plugins/' },
        ]
    },
    {
        text: '学习记录', children: [
            { text: 'Javascript', link: 'https://github.com/Plumliil/notes/blob/master/Javascript/Js%E5%9F%BA%E7%A1%80.md' },
            { text: 'Typescript', link: 'https://github.com/Plumliil/notes/blob/master/Typescript/Typescript.md' },
            { text: 'Webpack', link: 'https://github.com/Plumliil/notes/blob/master/webpack/webpack_2.md' },
            { text: 'Nodejs', link: 'https://github.com/Plumliil/notes/blob/master/Node/Node.md' },
            { text: 'Express', link: 'https://github.com/Plumliil/notes/blob/master/Express/express.md' },
            { text: 'MongoDB', link: 'https://github.com/Plumliil/notes/blob/master/MongoDB/mongoDB.md' },
            { text: 'Vue2', link: 'https://github.com/Plumliil/notes/blob/master/Vue/vue2/Vue.md' },
            { text: 'Vue3', link: 'https://github.com/Plumliil/notes/blob/master/Vue/vue3/vue3.md' },
            { text: 'Less', link: 'https://github.com/Plumliil/notes/blob/master/Less/less.md' },
            { text: 'Http', link: 'https://github.com/Plumliil/notes/blob/master/HTTP/HTTP.MD' },
            { text: 'Ajax', link: 'https://github.com/Plumliil/notes/blob/master/Ajax/ajax.md' },
            { text: 'Git', link: 'https://github.com/Plumliil/notes/blob/master/Git/Git.md' },
        ]
    },
    {
        text: '生态系统', children: [
            { text: 'Vue3.x', link: 'https://v3.cn.vuejs.org/' },
            { text: 'Vuepress', link: 'https://vuepress.vuejs.org/zh/' },
        ]
    },
    { text: 'Blog', link: 'https://www.plumli.xyz' },
];
