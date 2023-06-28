console.log('Vue ok', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = Vue.createApp({
    data() {
        return{
            mails: []

        }
    },
    methods: {
        getRandomMails() {
            axios.get(endpoint)
            .then(res => {
                const mail = res.data.response;
                if(!this.mails.includes(mail)) this.mails.push(mail);
                    if(this.mails.length < 10) this.getRandomMails();
            })
        } 
    },
    mounted() {
        this.getRandomMails();

        /*while(this.mails.length < 10){
            axios.get(endpoint)
            .then(res => {
                const mail = res.data.response;
                if(!this.mails.includes(mail)) this.mails.push(mail);
                   
            })
        } */
            
    }
});

app.mount('#root');

//io chiedo una mail al programma. se la mail non è presente nell'array, la pusho. se l'array non ha 10 elementi, chiedo una mail al programma.