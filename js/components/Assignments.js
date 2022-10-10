import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template:`
            <section>
                <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
                <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>

                <assignment-create @add="add"> </assignment-create>

            </section>
            `,
    
            data(){
                return {
                    assignments: [
                        {name: 'Finish projects', complete: false, id:"1"},
                        {name: 'Read projects', complete: false, id:"2" },
                        {name: 'Turn in home', complete: false, id:"3"}

                    ]
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
                add(name){
                    // alert(this.newAssignment);
                    this.assignments.push({
                        name: name,
                        completed: false,
                        id: this.assignments.length + 1
                    })

                }
            }

};