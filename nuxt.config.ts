// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    },
})
