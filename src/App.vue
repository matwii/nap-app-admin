<template>
    <div>
        <AppHeader/>
        <div v-if="isLoggedIn">
            <Sidenav />
            <div class="main">
                <router-view />
            </div>
        </div>
        <div v-else>
            <b-container>
                <LoginForm/>
            </b-container>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import AppHeader from './components/AppHeader'
    import LoginForm from './components/LoginForm'
    import Sidenav from './components/Sidenav'

    export default {
        name: 'app',
        components: {
            Sidenav,
            LoginForm,
            AppHeader,
        },
        computed: mapGetters(['isLoggedIn']), //We use computed property to read information into our component
        methods: mapActions(['fetchUsers', 'fetchCars', 'fetchRides', 'fetchError']),
        created() {
            if (this.isLoggedIn){
                this.fetchUsers();
                this.fetchCars();
                this.fetchRides();
            } else {
                console.log(false)
            }
        }
    }
</script>

<style scoped>
    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        padding: 0px 10px;
    }
</style>
