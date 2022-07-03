const vm = Vue.createApp({
    data(){
        return {
            ratingPage: [],
            submitPage: [],
        }
    },
    template: 
    `
    <card-template
        :budget="ratingPage.budget"
        :title="ratingPage.title"
        :description="ratingPage.description"
        :rateList="ratingPage.rateList"
        :buttonLabel="ratingPage.buttonLabel"
    ></card-template>

    <card-template
        :budget="submitPage.budget"
        :title="submitPage.title"
        :label="submitPage.label"
        :description="submitPage.description"
    ></card-template>
    `,
    mounted() {
        fetch('./data/db.json')
            .then(resp => resp.json())
            .then(resp => {this.ratingPage = resp.ratingPage; this.submitPage = resp.submitPage})
            .catch(e => console.log(e))
    }

})