export default{
    template: ` 
        <section class="p-5" v-show="assignments.length">
            <h2>{{title}}</h2>
            <ul>

                <li v-for="assignment in assignments" :key="assignment.id">
                    <label for="">
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                    
                </li>
            </ul>
        </section>
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
    props:{
        assignments: Array,
        title: String
    }
}