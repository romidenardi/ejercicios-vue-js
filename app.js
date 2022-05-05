Vue.component ("my-component", { 
    template:
        `<div>
            <h1>¡Hola, Coders!</h1>
            <p> Estamos probando componentes </p>
        </div>`
});

Vue.component ("product-gride", {
    
    props: {
        name: {type: String, required: true},
        id: {type: String, required: true},
        productPhoto: {type: String, required: true},
    },
    
    template:
    `<div>
        <ul>
            <li class="product">
                <span> {{name}} </span>
                <span> {{id}}  </span>
                <span> <img :src="productPhoto" :alt="name" :style="{'width':'30px'}"/> </span>
            </li>
        </ul>
    </div>`

});

var app = new Vue({

    el: "#app",

    data: {
        welcomeMessage: "¡Hola, Mundo!",
        a: 5,
        b: 3,
        subtitle: "<p>Jugando con Vue</p>",
        photo: "./images/london.jpg",
        altText: "London",
        defaultText: "Best perro ever",
        showGreeting: true,
        showConditional: "5",
        buttonText: "Ocultar texto",
        showMessage: true,
        products: [
            {id: "001", name: "Avioncito", productPhoto: "./images/avioncito.png"},
            {id: "002", name: "Mono", productPhoto: "./images/mono-de-peluche.png"},
            {id: "003", name: "Chiches", productPhoto: "./images/set-chiches-agua.png"},
        ],
        ccsStyle:{
            "classOne": true,
            "classTwo": true,
        }
    },

    methods: {
        calculatorMethod() {
            return this.a * this.b;
        },
        calculatorDirective() {
            console.log(this.calculatorComputed);
        },
        changeButton() {
            this.showMessage = !this.showMessage;
            if (this.showMessage) this.buttonText = "Ocultar texto";
            else this.buttonText = "Mostrar texto";
        },
        classForTable(i) {
            if (i % 2 == 0) return "darkBackground";
            else return "lightBackground";
        }
    },

    computed: {
        calculatorComputed() {
            return this.a * this.b;
        }
    },

})
