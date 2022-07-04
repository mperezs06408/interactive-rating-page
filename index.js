const vm = Vue.createApp({
    data(){
        return {
            ratingPage: [],
            submitPage: [],
            visibilitySubmit: true,
            resultValues: []
        }
    },
    template: 
    `
    <card-template
        :visibilityState="visibilitySubmit"
        :budget="ratingPage.budget"
        :budgetImg="true"
        :title="ratingPage.title"
        :description="ratingPage.description"
        :rateList="ratingPage.rateList"
        :buttonLabel="ratingPage.buttonLabel"
        @result="printResults"
    ></card-template>

    <card-template
        :visibilityState="!visibilitySubmit"
        :budget="submitPage.budget"
        :title="submitPage.title"
        :label="submitPage.label"
        :description="submitPage.description"
        :rateResultValues="resultValues"
    ></card-template>
    `,
    methods: {
        printResults(e){
            this.visibilitySubmit = !this.visibilitySubmit;
            this.resultValues.push(e);
            this.resultValues.push(this.ratingPage.rateList.length);
        }
    },
    mounted() {
        fetch('./data/db.json')
            .then(resp => resp.json())
            .then(resp => {this.ratingPage = resp.ratingPage; this.submitPage = resp.submitPage})
            .catch(e => console.log(e))
    },
    watch: {
        ratingPageVisibility(){
            console.log('something has been change');
        }
    }

})