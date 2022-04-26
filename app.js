var app = new Vue({
    el: "#app",
    data: {
        welcomeMessage: "¡Hola, Mundo!",
        a: 5,
        b: 3,
    },
    methods: {
        calculatorMethod() {
                return this.a * this.b
            }
    },
    computed: {
        calculatorComputed() {
            return this.a * this.b
        }
    }
})
