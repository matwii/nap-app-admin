<template>
    <div>
        <div class="sidenav">
            <a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
            <a href="#"><i class="fas fa-users"></i>Users</a>
            <a href="#"><i class="fas fa-car"></i>Cars</a>
            <a href="#"><i class="fas fa-taxi"></i>Rides</a>
        </div>
        <div class="main">
            Number of users: {{getUsers ? getUsers.length : 0}}
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Dashboard',
        methods: mapActions(['fetchUsers']),
        computed: mapGetters(['getUsers']),
        mounted() {
            this.fetchUsers();
        },
    }
</script>

<style scoped>
    .sidenav {
        height: 100%;
        width: 10em;
        position: absolute;
        z-index: 1;
        left: 0;
        background-color: #404040;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        display: block;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    i {
        width: 2em;
    }

    .fa-tachometer-alt{
        width: 30px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }

    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        padding: 0px 10px;
    }
</style>

