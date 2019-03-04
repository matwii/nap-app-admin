<template>
    <div class="sidenav">
        <router-link to="/"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
        <router-link to="/users"><i class="fas fa-users"></i>Users</router-link>
        <router-link to="/cars"><i class="fas fa-car"></i>Cars</router-link>
        <a href="#"><i class="fas fa-taxi"></i>Rides</a>
    </div>
</template>

<script>
    export default {
        name: 'Sidenav'
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
        padding-top: 10px;
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
</style>
