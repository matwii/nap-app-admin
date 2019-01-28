<template>
    <div>
            <b-alert :show="getDismissCountdown"
                     dismissible
                     variant="danger"
                     fade
                     @dismissed="this.dismiss"
                     class="alert"
                    >
                <p>User not authenticated</p>
            </b-alert>
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
            <div class="text-center mt-4" v-if="isLoading">
                <b-button type="submit" disabled variant="info">loading</b-button>
            </div>
            <div class="text-center mt-4" v-else>
                <b-button type="submit" variant="info">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'LoginForm',
        methods: {
            ...mapActions(['onSubmit', 'fetchUsers']),
            async onClick(e){
                e.preventDefault();
                await this.onSubmit();
                this.fetchUsers(); //Need to fetchusers here because of token validation.
            },
            dismiss(){
                this.$store.commit('dismissAlert')
            }
        },
        computed: {
            ...mapGetters(['isLoading', 'getDismissCountdown']),
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
            },
        }
    }
</script>

<style scoped>
    .alert{
        margin-top: 10px;
    }
</style>
