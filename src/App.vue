<template>
    <div>
        <AppHeader/>

        <div v-if="isLoggedIn">
            <Dashboard/>
        </div>
        <div v-else>
            <b-container>
                <LoginForm/>
            </b-container>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import AppHeader from './components/AppHeader'
    import LoginForm from './components/LoginForm'
    import Dashboard from './components/Dashboard'

    export default {
        name: 'app',
        components: {
            LoginForm,
            AppHeader,
            Dashboard
        },
        computed: mapGetters(['isLoggedIn']), //We use computed property to read information into our component
    }
</script>
