
const app = Vue.createApp({
        data(){
            return{
                searchText: '',

                listContacts: []
            }
        },
        computed: {
            listResult(){
                if(this.searchText){
                    return this.listContacts.filter(contact=>{
                        return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase());
                    });

                }else{
                    return this.listContacts
                }
            }
        },

        methods:{
            async getData(){
                let response = await fetch('https://randomuser.me/api/?results=5')
                let data = await response.json()
                console.log(data.results)
                data.results.forEach(element => {
                    let contact = new Object();

                    contact.firstName = element.name.first
                    contact.lastName = element.name.last
                    contact.email = element.email
                    contact.city = element.location.city
                    contact.picture = element.picture.large
                    
                    this.listContacts.push(contact)
                });
            }
        }

})

app.mount('#app');