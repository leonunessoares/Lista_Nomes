
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
            novoNome: {

            }
        }
    },

    methods: {
        adicionarNome: function() {
            if (!(this.novoNome.nome && this.novoNome.sobrenome)) {
                alert('Informe todos os campos!')
            } else {
                this.lista.push(this.novoNome);
                this.novoNome = {};
            }
        },        
    }

};

Vue.createApp(cadForm).mount('#app');
