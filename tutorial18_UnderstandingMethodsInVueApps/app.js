const app= Vue.createApp({
    data(){
        return{
            courseGoal: 'Finish the course and lean Vue!',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber<0.5){
                return 'Leanr Vue!'
            } else {
                return 'Master Vue!'
            }
        }
    }
})

app.mount('#user-goal')