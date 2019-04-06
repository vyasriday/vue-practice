let products = [

    {   id: 1,
        title: "Vue Cli App",
        description: "Vue Cli apps are great to have and easy to create.",
        avatar: "./images/avatar.jpg",
        submittedBy: "Hridayesh Sharma",
        votes: 20,
        url: '#'
    },
    {   id: 2,
        title: "React Cli",
        description: "React Cli makes it easy to bootstrap react apps.",
        avatar: "./images/avatar.jpg",
        submittedBy: "Hriday Sharma",
        votes: 11,
        url: '#'
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
        description: "Facebook is a social networking with billion users.",
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
            const product = this.sortedProducts.find((product) => {
                return product.id == id;
            });
            product.votes++;
        }
    },
})