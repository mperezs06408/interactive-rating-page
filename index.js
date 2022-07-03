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
        :budgetImg="true"
        :title="ratingPage.title"
        :description="ratingPage.description"
        :rateList="ratingPage.rateList"
        :buttonLabel="ratingPage.buttonLabel"
    ></card-template>
    `,
    mounted() {
        fetch('./data/db.json')
            .then(resp => resp.json())
            .then(resp => {this.ratingPage = resp.ratingPage; this.submitPage = resp.submitPage})
            .catch(e => console.log(e))
    }

})

/**
    <card-template
        :budget="submitPage.budget"
        :title="submitPage.title"
        :label="submitPage.label"
        :description="submitPage.description"
        :rateResultValues="[4,5]"
    ></card-template>
 */

/**
* Template de rating
 */