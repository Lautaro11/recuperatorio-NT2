import VueForm from "vue-form";
import Vue from "vue";

const options = {
    validators: {
        'espacios-vacios': (value) => {
            return !/\s/.test(value);
        }
    }
}

Vue.use(VueForm, options);