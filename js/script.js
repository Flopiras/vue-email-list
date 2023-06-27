console.log('Vue ok', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = Vue.createApp({
    data() {
        return{
            mails: []

        }
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            axios.get(endpoint)
            .then(res => {
                this.mails.push(res.data.response);
            })
        }
            
    }
});

app.mount('#root');