vm.component('card-template', {
    props: ['budget','title','description','label','rateList','buttonLabel'],
    data() {
        return{}
    },
    template:
    `
    <section>
        <button-component
            v-if="budget"
            label="star"
        ></button-component>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <ul v-if="rateList" v-for="rate in rateList">
            <li>
            <button-component
                :label="rate"
            ></button-component
            </li>
        </ul>
        <button-component
            :label="buttonLabel"
            v-if="buttonLabel"
        ></button-component>
    </section>
    `
})