<template>
    <div>
        <h4>Add Car</h4>
        <b-form @submit="onClick">
            <b-row>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="regNr"
                            label="Enter registration number"
                            label-for="regNrInput"
                    >
                        <b-form-input id="regNrInput" v-model.trim="carInfo.reg_number"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="brand"
                            label="Enter cars brand"
                            label-for="brandInput"
                    >
                        <b-form-input id="brandInput" v-model.trim="carInfo.brand"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="model"
                            label="Enter car model"
                            label-for="modelInput"
                    >
                        <b-form-input id="modelInput" v-model.trim="carInfo.modell"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="color"
                            label="Enter cars color"
                            label-for="colorInput"
                    >
                        <b-form-input id="colorInput" v-model.trim="carInfo.color" />
                    </b-form-group>
                </b-col>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="year"
                            label="Enter production year"
                            label-for="yearInput"
                    >
                        <b-form-input id="yearInput" type="number" v-model.trim="carInfo.year"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="2" class="my-1">
                    <b-form-group
                            id="location"
                            label="Enter address"
                            label-for="map"
                    >
                        <vue-google-autocomplete
                                id="map"
                                classname="form-control"
                                v-on:placechanged="getAddressData"
                        >
                        </vue-google-autocomplete>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" class="my-1">
                    <b-button type="submit" variant="success" :disabled="buttonState">Add car</b-button>
                </b-col>
            </b-row>
            <hr />
        </b-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import VueGoogleAutocomplete from 'vue-google-autocomplete'

    export default {
        name: 'AddCarForm',
        components: {VueGoogleAutocomplete},
        data (){
            return {
                carInfo: {car_id: null, reg_number: '', latitude: null, longitude: null, booked: 0, brand: '', modell: '', color: '', year: null, location: '' }
            }
        },
        computed: {
            /**
             * Checks if all input fields are filled and activates button based on it.
             */
            buttonState(){
                const { reg_number, brand, modell, color, year, location} = this.carInfo;
                return !(reg_number && brand && modell && color && year && location);
            }
        },
        methods: {
            ...mapActions(['addCar']),
            /**
             * Onsubmit, sends data to action module
             * @param {event} eventhandler from html
             */
            onClick(e){
                e.preventDefault();
                this.addCar(this.carInfo);
            },
            /**
             * When the location found
             * @param {Object} addressData Data of the found location
             * @param {Object} placeResultData PlaceResult object
             * @param {String} id Input container ID
             */
            getAddressData(addressData, placeResultData, id) {
                const { street_number, route, latitude, longitude } = addressData;
                const address = street_number ? `${route} ${street_number}` : `${route}`;
                if (address){
                    this.carInfo.location = address;
                    this.carInfo.latitude = latitude;
                    this.carInfo.longitude = longitude;
                }
            }
        }
    }
</script>

<style>

</style>
