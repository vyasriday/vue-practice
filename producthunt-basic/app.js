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

// creating a vue component
const productComponent = {
    template: `
    <div>
    <section  v-bind:class="{'top-votes': product.votes > 20}"
        <div class="avatar">
            <img v-bind:src="product.avatar" alt="avatar">
            <a v-bind:href="product.url">#</a>
        </div>
        <div class="center-content">
            <h4 class="title">{{product.title}}</h4>
            <p class="description">{{product.description}}</p>
            <small class="submitted-by">{{product.submittedBy}}</small>
        </div>
        <div class="vote-count">
            <i class="fa fa-chevron-up" v-on:click="upvote(product.id)"></i>
            <strong class="has-text-info">{{product.votes}}</strong>
        </div>
    </section>
    </div>
    `,
    methods: {
        upvote(id) {
            const product = this.sortedProducts.find((product) => {
                return product.id == id;
            });
            product.votes++;
        }
    },
    props: ['sortedProducts', 'product']
}

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
    components: {
        //  registering the vue components
        'product-component': productComponent
    },
})