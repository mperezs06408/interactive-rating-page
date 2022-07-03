vm.component('button-component', {
    props: {
        label: {type: String, default: null, required: true}
    }
    ,data() {
        return {}
    },
    template: 
    `
    <button>{{ label }}</button>
    `
});