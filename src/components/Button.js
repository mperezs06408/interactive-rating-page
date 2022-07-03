vm.component('button-component', {
    props: {
        label: {type: String, default: null, required: true},
        className: {type: String, default: null, required: true},
        buttonType: {type: String, default: 'button', required: false}
    }
    ,data() {
        return {}
    },
    template: 
    `
    <button :type="buttonType" :class="className">{{ label }}</button>
    `
});