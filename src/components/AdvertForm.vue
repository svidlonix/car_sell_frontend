<template>
  <layout>
    <flash-message></flash-message>
    <div class='login-block mt-5 ml-5 mr-5'>
      <b-form @submit='onSubmit'>

        <b-form-group label="Type:">
          <b-form-radio-group
            id="type_selected"
            buttons
            v-model='form.type_selected'
            :options="form.type"
            name="type_selected"
          />
        </b-form-group>

        <b-form-group label="Condition:">
          <b-form-radio-group
            id="condition_selected"
            buttons
            v-model='form.condition_selected'
            :options="form.condition"
            name="condition_selected"
          />
        </b-form-group>

        <b-form-group label='Brand:'>
          <b-form-select id="brand_selected" v-model="form.brand_selected" :options="form.brand" @input="updateBrand" required/>
        </b-form-group>

        <b-form-group label='Model:'>
          <b-form-select id="model_selected" v-model="form.model_selected" :options="form.model" @input="updateModel" required/>
        </b-form-group>

        <b-form-group label='Engine:'>
          <b-form-input id="engine" v-model='form.engine' required/>
        </b-form-group>

        <b-form-group label='Price:'>
          <b-form-input id='price' type='number' v-model='form.price' required/>
        </b-form-group>

        <b-form-group label='Distance covered:'>
          <b-form-input id='distance_covered' type='number' v-model='form.distance_covered'/>
        </b-form-group>

        <b-form-group label='Description:'>
          <b-form-textarea id='description' rows='3' v-model='form.description'/>
        </b-form-group>

        <b-form-group label='Year:'>
          <b-form-select id='year' v-model='form.year' class="mb-3">
            <option v-bind:key='year' v-for="year in range()" :value="year">
              {{ year }}
            </option>
          </b-form-select>
        </b-form-group>

        <b-form-group label='Color:'>
          <slider-picker v-model="form.color" value='slider' @input="updateColor"/>
        </b-form-group>

        <b-form-group label="Wheel:">
          <b-form-radio-group
            id="wheel_selected"
            buttons
            v-model='form.wheel_selected'
            :options="form.wheel"
            name="wheel_selected"
          />
        </b-form-group>

        <b-form-group label="Conditioner:">
          <b-form-radio-group
            id="conditioner_selected"
            buttons
            v-model='form.conditioner_selected'
            :options="form.conditioner"
            name="conditioner_selected"
          />
        </b-form-group>

        <b-form-group label="Fuel:">
          <b-form-radio-group
            id="fuel_selected"
            buttons
            v-model='form.fuel_selected'
            :options="form.fuel"
            name="fuel_selected"
          />
        </b-form-group>

        <b-form-group label="Transmission:">
          <b-form-radio-group
            id="transmission_selected"
            buttons
            v-model='form.transmission_selected'
            :options="form.transmission"
            name="transmission_selected"
          />
        </b-form-group>

        <b-form-group class='mb-5'>
          <base64-upload :imageSrc="pictureSrc()" class='upload_picture' @change="onFileChange" accept=".png, .jpg, .jpeg" />
        </b-form-group>

        <b-button class='mt-4 mb-5' type='submit' variant='primary'>Save</b-button>
      </b-form>
    </div>
  </layout>
</template>

<script>
  import Layout from './layout/Layout.vue'
  import AvatarUploaderBase64 from 'vue-base64-upload'
  import axios from 'axios'
  import { Slider } from 'vue-color'

  export default {
    components: {
      layout: Layout,
      'base64-upload': AvatarUploaderBase64,
      'slider-picker': Slider
    },

    data () {
      return {
        form: {
          engine: '',
          price: '',
          distance_covered: '',
          year: '',
          color: '',
          description: '',
          brand: [],
          model_selected: 'Please select brand',
          model: [
            { text: 'Please select brand', value: 'Please select brand' }
          ],
          wheel_selected: 'left',
          wheel: [
            { text: 'Left', value: 'left' },
            { text: 'Right', value: 'right' }
          ],
          conditioner_selected: 'true',
          conditioner: [
            { text: 'Conditioner present', value: 'true' },
            { text: 'Conditioner not present', value: 'false' }
          ],
          condition_selected: 'true',
          condition: [
            { text: 'New', value: 'true' },
            { text: 'Used', value: 'false' }
          ],
          fuel_selected: 'petrol',
          fuel: [
            { text: 'Petrol', value: 'petrol' },
            { text: 'Diesel', value: 'diesel' },
            { text: 'Hybrid', value: 'hybrid' },
            { text: 'Electro', value: 'electro' }
          ],
          type_selected: 'car',
          type: [
            { text: 'Car', value: 'car' },
            { text: 'Bike', value: 'bike' },
            { text: 'Truck', value: 'truck' }
          ],
          transmission_selected: 'manual',
          transmission: [
            { text: 'Manual', value: 'manual' },
            { text: 'Automatic', value: 'automatic' }
          ]
        }
      }
    },

    created () {
      var userUrl = 'http://localhost:3000/api/get_brands'
      axios.get( userUrl, { headers: {'Authorization': localStorage.getItem('user-token')} })
      .then(response => (this.form.brand = response.data))
      .catch(error => (this.flashError(error.message)));
    },
    
    methods: {
      async onSubmit (evt) {
        evt.preventDefault();
        var result = await axios.post('http://localhost:3000/api/adverts',
          {
            'engine': evt.currentTarget.engine.value,
            'price': evt.currentTarget.price.value,
            'distance_covered': evt.currentTarget.distance_covered.value,
            'year': evt.currentTarget.year.value,
            'description': evt.currentTarget.description.value,
            'type_selected': evt.currentTarget.type_selected.value,
            'condition_selected': evt.currentTarget.condition_selected.value,
            'wheel_selected': evt.currentTarget.wheel_selected.value,
            'conditioner_selected': evt.currentTarget.conditioner_selected.value,
            'fuel_selected': evt.currentTarget.fuel_selected.value,
            'color': this.color || '#000000',
            'picture': this.picture || '',
            'model': this.model
          }, {
            headers: {
              'Authorization': localStorage.getItem('user-token')
            }
          }
        )
        .then(function () {
          return undefined;
        })
       .catch(function (error) {
         return error;
        });

        if (result == undefined) {
          this.$router.push('/adverts')
          this.flashSuccess('Success Updated');
        } else {
          this.flashError(result.message);
        }
      },

      pictureSrc() {
        return require('../assets/car-placeholder.jpg');
      },

      onFileChange(e) {
        this.picture = e.base64
      },

      updateColor(e) {
        this.color = e.hex;
      },

      updateBrand(e) {
        var userUrl = 'http://localhost:3000/api/get_models'
        axios.get( userUrl, { headers: {'Authorization': localStorage.getItem('user-token')}, params: { id: e } })
        .then(response => (this.form.model = response.data))
        .catch(error => (this.flashError(error.message)));
      },

      updateModel(e) {
        this.model = e;
      },

      range() {
        var arr = [];

        for (var i = new Date().getFullYear(); i >= 1957; i--) {
          arr.push(i);
        }

        return arr;
      },
    }
  }
</script>

<style scope>
  .upload_picture {
    width: 300px;
    height: 300px;
  }
</style>
