<template>
    <div>
        <AppHeader />
        <b-container>
            <LoginForm />
        </b-container>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader'
    import LoginForm from './components/LoginForm'

    export default {
        name: 'app',
        components: {
            LoginForm,
            AppHeader,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
