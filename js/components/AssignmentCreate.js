export default{
    template: `
        <form @submit.prevent="add">
            <div>    
                <input v-model="newAssignment" placeholder="New Assignment...">
                <button class="submit border-0 p-1"> Add </button>
            </div>
        </form> `,

        props:{
            assignments: Array
        },

        data(){
            return {
                newAssignment: ''
            }
        },

        methods:{
            add(){
                // alert(this.newAssignment);

                // child to parent 
                this.$emit('add', this.newAssignment);
                // child to parent end


                // parent to child 
                // this.assignments.push({
                //     name: this.newAssignment,
                //     completed: false,
                //     id: this.assignments.length + 1
                
                // });
                // parent to child end

                
                this.newAssignment = '';

            }
        }
}