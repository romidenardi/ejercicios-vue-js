var app = new Vue({
    el: "#app",
    data: {
        welcomeMessage: "¡Hola, Mundo!",
        a: 5,
        b: 3,
        subtitle: "<p>Jugando con Vue</p>",
        photo: "./images/london.jpg",
        altText: "London",
        defaultText: "Best perro ever"
    },
    methods: {
        calculatorMethod() {
            return this.a * this.b;
        },
        calculatorDirective() {
            console.log(this.calculatorComputed);
        }
    },
    computed: {
        calculatorComputed() {
            return this.a * this.b;
        }
    }
})
