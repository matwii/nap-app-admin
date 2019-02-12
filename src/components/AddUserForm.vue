<template>
    <div>
        <h4>Add user</h4>
        <b-form @submit="onClick">
        <b-row>
            <b-col md="3" class="my-1">
                <b-form-group
                        id="name"
                        label="Enter users name"
                        label-for="nameInput"
                >
                    <b-form-input id="" v-model.trim="userInfo.name"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="3" class="my-1">
                <b-form-group
                        id="email"
                        label="Enter users email"
                        label-for="emailInput"
                >
                    <b-form-input id="emailInput" type="email" v-model.trim="userInfo.email"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="3" class="my-1">
                <b-form-group
                        id="password"
                        label="Enter users password(temporarily)"
                        label-for="passwordInput"
                >
                    <b-form-input id="passwordInput" type="password" v-model.trim="userInfo.password"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col md="3" class="my-1">
                <b-form-group
                        id="role"
                        label="Choose the role"
                        label-for="selectRole"
                >
                    <b-form-select id="selectRole" v-model="userInfo.role" :options="options" class="mb-3" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="4" class="my-1">
                <b-button type="submit" variant="success" :disabled="buttonState">Add user</b-button>
            </b-col>
        </b-row>
        <hr />
        </b-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AddUserForm',
        data (){
            return {
                userInfo: {name: '', email: '', password: '', role: 1},
                options: [
                    { value: 1, text: 'Admin' },
                    { value: 2, text: 'User' },
                ]
            }
        },
        computed: {
            buttonState(){
                const { name, email, password, role } = this.userInfo;
                return !(name && email && password && role);
            }
        },
        methods: {
            ...mapActions(['addUser']),
            onClick(e){
                e.preventDefault();
                this.addUser(this.userInfo);
            },
        }
    }
</script>

<style>

</style>
