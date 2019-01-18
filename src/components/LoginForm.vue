<template>
    <b-form @submit="onClick" style="margin-top: 20px;">
        <p class="h4 text-center mb-4">Sign in</p>
        <b-form-group id="usernameGroup"
                      label="Email address:"
                      label-for="username">
            <b-form-input id="username"
                          type="email"
                          v-model="email"
                          required
                          placeholder="Enter email">
            </b-form-input>
            <b-form-invalid-feedback>test text</b-form-invalid-feedback>
        </b-form-group>
        <br/>
        <b-form-group id="passwordGroup"
                      label="Password:"
                      label-for="password"
                      description="We'll never share your password with anyone else.">
            <b-form-input id="password"
                          type="password"
                          v-model="password"
                          required
                          placeholder="Enter password">
            </b-form-input>
        </b-form-group>
        <div class="text-center mt-4">
            <b-button type="submit" variant="info">Submit</b-button>
        </div>
    </b-form>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'LoginForm',
        methods: {
            ...mapActions(['onSubmit']),
            onClick(e){
                e.preventDefault();
                this.onSubmit();
            }
        },
        computed: {
            email: {
                get () {
                    return this.$store.getters.getEmail
                },
                set (value) {
                    this.$store.commit('updateEmail', value)
                }
            },
            password: {
                get () {
                    return this.$store.getters.getPassword
                },
                set (value) {
                    this.$store.commit('updatePassword', value)
                }
            }
        }
    }
</script>
