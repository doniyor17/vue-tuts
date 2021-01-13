export default {
    bind(el, bindings, vnode){
        console.log('bind')
        el.style.color = 'blue'
    },
    inserted(el, bindings, vnode){
        console.log('insert')
    },
    update(el, bindings, vnode, oldVnode) {
        console.log('update')
    },
    componentUpdate(el, bindings, vnode, oldVnode) {
        console.log('componentUpdated')
    },
    unbind(el, bindings, vnode, oldVnode) {
        console.log('unbind')
    },
}