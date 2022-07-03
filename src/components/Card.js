vm.component('card-template', {
    props: [
        'budget',
        'budgetImg',
        'title',
        'description',
        'label',
        'rateList',
        'rateResultValues',
        'buttonLabel'
    ],
    data() {
        return{}
    },
    template:
    `
    <section class="card">
        <div v-if="budgetImg == true">
            <div class="card-budgetContainer_button budget_star">
                <img class="budgetContainer_img" :src="budget" />
            </div>
        </div>
        <div v-else>
            <div class="card-budgetContainer_img">
                <img class="budgetContainer_img" :src="budget" />
            </div>
            <button-component
                :label="ratingResult"
                :className="['ratingResult-label']"
            ></button-component>
        </div>
        <div class="card-content" :class="budgetImg? ['card-content_left'] : ['']">
            <h1 class="card-title">{{ title }}</h1>
            <p class="card-description">{{ description }}</p>
        </div>
        <div v-if="rateList">
        <ul class="card-rateList">
            <li
                v-for="rate in rateList"
            >
            <button-component
                :label="rate"
                :className="['card-budgetContainer_button','rateList_button']"
            ></button-component
            </li>
        </ul>
        <button-component
            :label="buttonLabel"
            :className="['submit-label']"
        ></button-component>
        </div>
    </section>
    `,
    computed: {
        ratingResult() {
            return `You selected ${ this.rateResultValues[0] } out of ${ this.rateResultValues[1]}`;
        }
    }
})