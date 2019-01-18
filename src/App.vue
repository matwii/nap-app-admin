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
