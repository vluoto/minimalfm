import store from '@/store'

export const requiresSession = {
  beforeRouteEnter (to, from, next) {
    store.dispatch('checkAuth').then(next).catch(() => {
      this.$router.push('/login')
    })
  }
}
