
lista = [
    {
        nome: 'Leonardo',
        sobrenome: 'Nunes Soares'
       
    },
    {
        nome: 'Cauã',
        sobrenome: 'Soares'
    }
]

const cadForm = {

    data() {
        return {
            lista: window.lista,
            topo: "Lista de Nomes com VUE",
            titulo: "Exemplo VUE",
            camposObrigatorios: false,
            novoNome: {

            }
        }
    },

    methods: {
        adicionarNome: function() {
            if (!(this.novoNome.nome && this.novoNome.sobrenome)) {
                this.camposObrigatorios = true
                setTimeout(() => this.camposObrigatorios = false, 1500);
            } else {
                this.camposObrigatorios = false;
                this.lista.push(this.novoNome);
                this.novoNome = {};
            }
        },   
        removerNome: function(nome) {
            const i = this.lista.indexOf(nome)
            this.lista.splice(i, 1)         
        }
    }
};

Vue.createApp(cadForm).mount('#app');
