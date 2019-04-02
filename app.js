let products = [

    {   id: 1,
        title: "Vue Cli App",
        description: "Vue Cli apps are great to have.",
        avatar: "./images/avatar.jpg",
        submittedBy: "Hridayesh Sharma",
        votes: 20
    },
    {   id: 2,
        title: "React Cli App",
        description: "React Cli apps are great to have.",
        avatar: "./images/avatar.jpg",
        submittedBy: "Hriday Sharma",
        votes: 11
    },
    {   id: 3,
        title: "Angular Cli App",
        description: "Angular Cli apps are heavier comapred to others",
        avatar: "./images/avatar.jpg",
        submittedBy: "John Doe",
        votes: 19,
        url: '#'
    },
    {   id: 4,
        title: "Facebook",
        description: "Facebook is a social networking site",
        avatar: "./images/avatar.jpg",
        submittedBy: "Mark Z",
        votes: 12,
        url: '#'
    },
    {   id: 5,
        title: "Medium",
        description: "Medium is a platform for readers and writers.",
        avatar: "./images/avatar.jpg",
        submittedBy: "William J",
        votes: 8,
        url: '#'
    }
];

new Vue({
    el: '#app',
    data: {
        products
    },
    computed: {
        sortedProducts() {
            return this.products.sort((a,b) => {
                return b.votes - a.votes;
            })
        }
    },
    methods: {
        upvote(id) {
            const product = this.products.find((product) => {
                return product.id == id;
            });
            product.votes++;
        }
    },
})