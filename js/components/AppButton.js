export default{
    template:
    // ` <button class="btn-dark rounded">Hi there</button> `
    // slot 
    ` <button 
        :class="{
            'btn-dark rounded': true
        }" 
        :disabled="processing">
        <slot />
    </button> `

    // slot end 

    ,
    props:{
        type: {
            type: String,
            default: 'primary'
        }
    },
    data(){
        return {
            processing: true
        };
    }   
}