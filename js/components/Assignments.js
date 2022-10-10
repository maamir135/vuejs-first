import AssignmentList from "./AssignmentList.js";

export default {
    components: {AssignmentList},
    template:`\
            <section>
                <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
                <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>

                <form @submit.prevent="add">
                    <div>    
                        <input v-model="newAssignment" placeholder="New Assignment...">
                        <button class="submit border-0 p-1"> Add </button>
                    </div>
                </form>
            </section>
            `,
    
            data(){
                return {
                    assignments: [
                        {name: 'Finish projects', complete: false, id:"1"},
                        {name: 'Read projects', complete: false, id:"2" },
                        {name: 'Turn in home', complete: false, id:"3"}

                    ],

                    newAssignment:''
                }
            },

            computed:{
                filters(){
                    return {
                        inProgress: this.assignments.filter(assignment => !assignment.complete),
                        completed: this.assignments.filter(assignment => assignment.complete),

                    };
                }
            },

            methods:{
                add(){
                    // alert(this.newAssignment);
                    this.assignments.push({
                        name: this.newAssignment,
                        completed: false,
                        id: this.assignments.length + 1
                    })

                    this.newAssignment= '';
                }
            }

};