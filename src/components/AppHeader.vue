<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Nap App Admin</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <div v-if="getUser" class="right-navbar">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <b-img rounded="circle" blank width="30" height="30" blank-color="#eee" alt="img" class="m-1" />
                            {{getUser.name}}
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logout">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </div>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn', 'getUser']), //We use computed property to read information into our component
        methods: {
            ...mapActions(['logout']) //Login action from modules, this method is used when I want to add in other methods
        }
    }
</script>

<style scoped>
    .right-navbar {
        margin-left:auto;
        margin-right:0;
    }
</style>

