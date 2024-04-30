Vue.component('registration-popup', {
    template: `
        <div class="popup">
            <div class="popup-content">
                <span class="close" @click="$emit('close')">&times;</span>
                <div class="step" v-show="currentStep === 1">
                    Step 1: Personal Information
                    <button @click="nextStep">Next</button>
                </div>
                <div class="step" v-show="currentStep === 2">
                    Step 2: Contact Information
                    <button @click="submitForm">Submit</button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            currentStep: 1
        };
    },
    methods: {
        nextStep() {
            this.currentStep++;
        },
        submitForm() {
            // Handle form submission logic here
            alert('Form submitted successfully!');
            this.$emit('close');
        }
    }
});
