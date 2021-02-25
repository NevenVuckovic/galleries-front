export function globalAuthGuard(to, from, next) {
    const isAuthenticated = !!localStorage.getItem('token');

    if (to.meta.authRequired && !isAuthenticated) {
        console.log('greska1');
        next('login');
    }

    if (to.meta.guestRequired && isAuthenticated) {
        console.log('greska2');
        next('/');
    }

    next();
}