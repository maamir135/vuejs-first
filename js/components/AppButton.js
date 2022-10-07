export default {
    template:
    // ` <button class="btn-dark rounded">Hi there</button> `
    // slot 
    ` <button class="btn-dark rounded" :disabled="processing">
        <slot />
    </button> `

    // slot end 

        ,
    data(){
        return {
            processing: true
        };
    }   
}