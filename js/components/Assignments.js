import AssignmentList from "./AssignmentList.js";

export default {
    components: {AssignmentList},
    template:`<assignment-list :assignments="inprogressAssignment" title="In Progress"> </assignment-list>

            <section class="p-5"  v-if="completedAssignment.length">
                <h2>Completed</h2>

                <ul>
                    <li v-for="assignment in completedAssignment">
                        <label for="">
                            {{ assignment.name }}
                            <input type="checkbox" v-model="assignment.complete" :key="assignment.id">
                        </label>
                        
                    </li>
                </ul>
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
                completedAssignment(){
                    return this.assignments.filter(assignment => assignment.complete);
                },
                inprogressAssignment(){
                    return this.assignments.filter(assignment => !assignment.complete);
                    
                }
            }

};