<template>
<div class="container pt-5">
    <div class="row">
      <div class="form-container col-sm-6">
<form @submit.prevent="saveData" >
      <!-- Step 1 -->
      <div v-if="currentStep === 1">
        <label class="form-label" for="name">
            <i class="fas fa-user"></i> Name (Full):
          </label>
          <input class="form-input" v-model="formData.name" type="text" id="name" />

          <!-- Improve radio button styling -->
          <div class="form-radio-group">
            <label class="form-radio-label">
              <input type="radio" v-model="formData.gender" value="male" />
              <i class="fas fa-mars"></i> Male
            </label>
            <label class="form-radio-label">
              <input type="radio" v-model="formData.gender" value="female" />
              <i class="fas fa-venus"></i> Female
            </label>
          </div>

          <!-- Improve textarea styling -->
          <label class="form-label" for="presentAddress">Present Address:</label>
          <textarea class="form-input form-textarea" v-model="formData.presentAddress" id="presentAddress"></textarea>

          <!-- Adjust button styling -->

      <label class="form-label" for="pinCode">Pin Code of Present Address:</label>
      <input class="form-input" v-model="formData.pinCode" type="text" id="pinCode" />

      <label class="form-label" for="phoneNumber">Phone Number:</label>
      <input class="form-input" v-model="formData.phoneNumber" type="text" id="phoneNumber" />

      <label class="form-label" for="email">Email Address:</label>
      <input class="form-input" v-model="formData.email" type="text" id="email" />

      <div class="form-buttons">
        <!-- <button class="form-button form-button-back" @click="prevStep" >
          <i class="fas fa-arrow-left"></i> Back
        </button> -->
        <button class="form-button" @click="nextStep"  >
          Next <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      </div>

      <!-- Step 2 -->
     <!-- Step 2 -->
        <div v-if="currentStep === 2">


            <label class="form-label" for="fatherName">Name of Father:</label>
            <input class="form-input" v-model="formData.fatherName" type="text" id="fatherName" />

            <label class="form-label">Is your father Tamil Brahmin?</label>
            <div class="form-radio-group">
            <label class="form-radio-label">
                <input type="radio" v-model="formData.isFatherTamilBrahmin" value="yes" />
                Yes
            </label>
            <label class="form-radio-label">
                <input type="radio" v-model="formData.isFatherTamilBrahmin" value="no" />
                No
            </label>
            </div>

            <label v-if="formData.isFatherTamilBrahmin === 'no'" class="form-label" for="fatherDetails">
            Provide details about your father:
            </label>
            <textarea v-if="formData.isFatherTamilBrahmin === 'no'" class="form-input" v-model="formData.fatherDetails" id="fatherDetails"></textarea>

            <label class="form-label" for="motherName">Name of Mother:</label>
            <input class="form-input" v-model="formData.motherName" type="text" id="motherName" />

            <label class="form-label">Is your mother Tamil Brahmin?</label>
            <div class="form-radio-group">
            <label class="form-radio-label">
                <input type="radio" v-model="formData.isMotherTamilBrahmin" value="yes" />
                Yes
            </label>
            <label class="form-radio-label">
                <input type="radio" v-model="formData.isMotherTamilBrahmin" value="no" />
                No
            </label>
            </div>

            <label v-if="formData.isMotherTamilBrahmin === 'no'" class="form-label" for="motherDetails">
            Provide details about your mother:
            </label>
            <textarea v-if="formData.isMotherTamilBrahmin === 'no'" class="form-input" v-model="formData.motherDetails" id="motherDetails"></textarea>

            <label class="form-label" for="languageSpoken">Language You Speak at Home:</label>
        <input class="form-input" v-model="formData.languageSpoken" type="text" id="languageSpoken" />

        <label class="form-label" for="gothram">Your Gothram:</label>
        <input class="form-input" v-model="formData.gothram" type="text" id="gothram" />

        <!-- Separator -->
        <hr class="form-separator" />

        <label class="form-label">Occupation:</label>
        <select class="form-input" v-model="formData.occupation">
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="business">Business</option>
            <option value="vaideekham">Vaideekham</option>
        </select>

        <label class="form-label" for="occupationAddress">Occupation Address:</label>
        <textarea class="form-input" v-model="formData.occupationAddress" id="occupationAddress"></textarea>


            <!-- Add more fields based on your requirements -->

            <div class="form-buttons">
            <button class="form-button form-button-back" @click="prevStep">Back</button>
            <button class="form-button" @click="nextStep">Next</button>
            </div>
        </div>

      <!-- Repeat similar blocks for other steps -->

      <!-- Step N -->
      <div v-if="currentStep === 3">

        <label class="form-label">Password:</label>
  <input class="form-input" v-model="formData.password" type="password" />

  <label class="form-label">Confirm Password:</label>
  <input class="form-input" v-model="confirmPassword" type="password" />

        <!-- Form fields for the Nth step -->
        <label class="form-label">Are you married?</label>
      <div class="form-radio-group">
        <label class="form-radio-label">
          <input type="radio" v-model="formData.married" value="yes" />
          Yes
        </label>
        <label class="form-radio-label">
          <input type="radio" v-model="formData.married" value="no" />
          No
        </label>
      </div>

      <!-- Show spouse details if married -->
      <div v-if="formData.married === 'yes'">
        <label class="form-label" for="spouseName">Name of Spouse:</label>
        <input class="form-input" v-model="formData.spouseName" type="text" id="spouseName" />

        <label class="form-label">Is your spouse Tamil Brahmin?</label>
        <div class="form-radio-group">
          <label class="form-radio-label">
            <input type="radio" v-model="formData.isSpouseTamilBrahmin" value="yes" />
            Yes
          </label>
          <label class="form-radio-label">
            <input type="radio" v-model="formData.isSpouseTamilBrahmin" value="no" />
            No
          </label>
        </div>
      </div>
         <!-- Add a blank space for additional details or remarks -->
      <label class="form-label" for="additionalDetails">Additional Details or Remarks:</label>
      <textarea class="form-input" v-model="formData.additionalDetails" id="additionalDetails"></textarea>
      <!-- <label class="form-label">Sharable Link through WhatsApp:</label>
      <input class="form-input" v-model="formData.whatsappLink" type="text" readonly /> -->

        <div class="form-buttons">
          <button class="form-button form-button-back" @click="prevStep">Back</button>
          <button class="form-button" type="submit" value="Save" @click="submitForm">Submit</button>
        </div>
      </div>
  </form>
    </div>
    <div class="col-sm-5 welcome-section">
        <!-- Welcome to the website and register now -->
        <div class="text-caro-meta">
            <span>Pitnik Social Network</span>
            <img src="images/icon-21.png" alt="">
          <span style="font-size: 38px;">Bhramamithra</span>
          
          
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore volutpat naomi delgado.
            </p>
        </div>
    </div>
</div>
</div>

</template>


<!-- 
<script >
import Vue from 'vue';
import axios from 'axios'
Vue.use(axios)
  export default {
    name:'Registration',
  data() {
    return {
        circles: [1, 2, 3, 4, 5],
      activeIndex: 0,
      progressBarWidth: '0%',


      currentStep: 1,
      formData: {
        // Initialize with default values if needed
        name: '',
        // birthYear: '',
        // gender: '',
        // presentAddress: '',
        // permanentAddress: '',
        // pinCode: '',
        // phoneNumber: '',
        email: '',
        password:'',
        // married: '',
        // spouseName: '',
        // isSpouseTamilBrahmin: '',
        // additionalDetails: '',
        // whatsappLink: '',
        // Add other form fields as needed
      },

    };
  },
  created(){},
  mounted(){
    console.log("mounted()called.......")
  },
  methods: {


    saveData()
                  {
                   axios.post("http://127.0.0.1:8000/api/register", this.student)
                   .then(
                     ({data})=>{
                      console.log(data);
                       try 
                         {
                            alert("saveddddd");
                            
                          } 
                      catch(err) 
                          {
                            alert("failed");
                          }    
                     }
                   )
                  }
             },
        
    nextStep() {

      this.currentStep += 1;



    },
    prevStep() {
      this.currentStep -= 1;

    },
    submitForm() {
      // Implement form submission logic here
    },
    generateSharableLink() {
      // Implement logic to generate a sharable link
      // For example, concatenate base URL with form data
      this.formData.whatsappLink = 'https://example.com?' ;
    },
  },
};



</script> -->


<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data() {
    return {
      circles: [1, 2, 3, 4, 5],
      activeIndex: 0,
      progressBarWidth: '0%',
      currentStep: 1,
      formData: {
    name: '',
    email: '',
    password: '',
    gender: '', // Radio button value: 'male' or 'female'
    presentAddress: '',
    pinCode: '',
    phoneNumber: '',
    // Add father details
    fatherName: '',
    isFatherTamilBrahmin: '', // Radio button value: 'yes' or 'no'
    fatherDetails: '', // Provide details if father is not Tamil Brahmin
    // Add mother details
    motherName: '',
    isMotherTamilBrahmin: '', // Radio button value: 'yes' or 'no'
    motherDetails: '', // Provide details if mother is not Tamil Brahmin
    languageSpoken: '',
    gothram: '',
    occupation: '', // Dropdown value: 'student', 'employed', 'business', 'vaideekham'
    occupationAddress: '',
    // Add spouse details
    spouseName: '',
    isSpouseTamilBrahmin: '', // Radio button value: 'yes' or 'no'
    // Add marital status
    married: '', // Radio button value: 'yes' or 'no'
    // Additional details or remarks
    additionalDetails: ''
    // whatsappLink: '', // If needed, you can uncomment this line for WhatsApp link
},

    };
  },
  created() {},
  mounted() {
    console.log('mounted() called.......')
  },
  methods: {
    saveData() {
      axios.post("http://127.0.0.1:8000/api/register", this.formData)
        .then(({ data }) => {
          console.log(data);
          try {
            alert("Saved successfully");
          } catch (err) {
            alert("Failed to save");
          }
        })
        // .catch(error => {
        //   console.error("Error:", error);
        //   alert(" hi Failed to save");
        // });
    },
    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },
    submitForm() {
      // Implement form submission logic here
    },
    generateSharableLink() {
      // Implement logic to generate a sharable link
      // For example, concatenate base URL with form data
      this.formData.whatsappLink = 'https://example.com?';
    },
  },
};
</script>

<style scoped>
/* .col-sm-5 {
    display: none;
  }
@media only screen and (max-width: 600px) {
  .col-sm-5 {
    display: none;
  }
} */
.welcome-section {
    background: url('https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==') center center fixed;
    background-size: cover;
    color: #fff; /* Set text color to white or light color for better contrast */
    text-align: center;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(9, 9, 9, 0.16);
    animation: fadeIn 1.5s ease-out; /* Page load animation */
}




.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #3498db; /* Change border color on focus */
}

/* Button styles */
.form-button {
  padding: 15px 30px;
  background-color: #7a1719;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #370a0b;
}

/* Form container styles */
.form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: justify;
  padding: 30px;
  transition: box-shadow 0.3s ease-in-out;
}

.form-container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.col-sm-5{
    width: 100%;
    max-width: 598px;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 8px rgba(9, 9, 9, 0.16);
    border-radius: 8px;
    text-align: justify;
    padding: 30px;
    margin: 0px 0; /* Add some margin for better spacing */
    transition: box-shadow 0.3s ease-in-out; /* Add a subtle box-shadow transition */

    /* Center the content vertically and horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .col-sm-3:hover {
    box-shadow: 0 8px 16px rgba(9, 9, 9, 0.2); /* Add a slightly larger shadow on hover */
  }

  .col-sm-5p {
    margin: 0 0 15px; /* Adjust spacing between paragraphs */
    font-size: 18px;
    line-height: 1.5;
  }

  .col-sm-5strong {
    color: #3498db; /* Add a color to the strong text */
  }

  body {
    background: url('https://media.istockphoto.com/id/484270482/photo/autumn-in-vermont.jpg?s=1024x1024&w=is&k=20&c=AVLppw1JT6C4zdX7oou3s9j5SXTQqMGTjWQHskEkJNA=') center center fixed;
    background-size: cover;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Rest of your existing styles... */

.form-container {
    width: 100%;
    max-width: 598px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: justify;
    padding: 50px;
}

.form-step {
    display: block;
    transition: opacity 0.3s ease-in-out;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

.form-input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-radio-group {
    display: flex;
    margin-top: 6px;
}

.form-radio-label {
    margin-right: 20px;
    font-size: 16px;
}

.form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.form-button {
    padding: 12px 24px;
    background-color: #7a1719;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.form-button:hover {
    background-color: #370a0b;
}

.form-button-back {
    background-color: #808080;
}

.form-button-back:hover {
    background-color: #707070;
}

</style>
