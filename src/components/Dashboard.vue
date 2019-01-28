<template>
    <div class="dashboard-main">
        <b-card bg-variant="primary"
                text-variant="white"
                class="card">
            <blockquote class="card-blockquote">
                <i class="fas fa-users fa-5x"></i>
                <p style="font-size: 18px">{{getUsers ? getUsers.length : 0}} Users registered</p>
            </blockquote>
        </b-card>
        <b-card bg-variant="success"
                text-variant="white">
            <blockquote class="card-blockquote">
                <i class="fas fa-car fa-5x"></i>
                <p style="font-size: 18px">{{getCars ? getCars.length : 0}} Cars registered</p>
            </blockquote>
        </b-card>
        <b-card bg-variant="danger"
                text-variant="white">
            <blockquote class="card-blockquote">
                <i class="fas fa-taxi fa-5x"></i>
                <p style="font-size: 18px">{{getRides ? getRides.length : 0}} Rides registered</p>
            </blockquote>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Dashboard',
        computed: mapGetters(['getUsers', 'getCars', 'getRides']),
    }
</script>

<style scoped>
    .dashboard-main {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .card {
        width: 20em; /* Or whatever */
        height: 200px; /* Or whatever */
        margin: 20px 20px 100px 20px; /* Magic! */
    }

    .card-blockquote {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
</style>

