<template>
    <div>
        <input
            type="checkbox"
            :checked="task.completed"
            @change="onTaskCompleted"
        />
        <span>{{ task.title }}</span>
    </div>
</template>

<!-- <script lang="ts">
import { defineComponent, type Prop, type PropType } from 'vue';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export default defineComponent({
    name: 'ToDoItem',

    props: {
        task: {
            type: Object as PropType<Task>,
            required: true,
        }
    },

    emits:['task-completed-toggle'],

    methods: {
        onTaskCompleted(event: Event) {
            this.$emit("task-completed-toggle", {
                ...this.task,
                completed: (event.target as HTMLInputElement)?.checked,
            });
        },
    },
}) 
</script>-->

<script setup lang="ts">
import { type PropType } from 'vue';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const props = defineProps({
    task: {
        type: Object as PropType<Task>,
            required: true,
    }
});

// const emits = defineEmits(['task-completed-toggle'])

type EmitEvents = {
    (e: 'task-completed-toggle', task: Task): void;
}

const emits = defineEmits<EmitEvents>();

const onTaskCompleted =(event: Event) => {
    emits("task-completed-toggle", {
        id: props.task.id,
        title: "test",
        completed: (event.target as HTMLInputElement)?.checked,
    });       
}           
        
</script>

