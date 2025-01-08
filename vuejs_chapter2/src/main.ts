import type { ComponentOptions } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler.js'

/**
const App = {
    template: "This is the app's entrance",
}
 */

/**
const App = {
    render() {
        return "This is the app's entrance"
    } 
}
 */

/**
const Description = {
    template: "This is the app's entrance",
}
*/

/**
const App = {
    components: { Description },
    template: '<Description />'
}
*/

/**
const App = {    
    template: "<div>This is te apps entrance</div>"
}

/**
const App = {    
    template : `
        <h1>This is the app's entrance</h1>
        <h2>we are exploring template syntax</h2>
    `,
}
 */

/**
type Data = {
    title : string;
}

const App = {
    template :`
        <div>Title : {{title}}</div>
    `,
    
    data(): Data {
        return {
            title : 'My first Vue component'
        }
    },

    created() {
        console.log((this as ComponentOptions<Data>).title)
    }
}
*/

/**
 * vue의 반응성이 동작하는 방식
type Data = {
    counter : number;
}

const App = {
    template: `
        <div>Counter: {{counter}}</div>
    `,

    data(): Data {
        return{
            counter: 0
        }
    },

    created() {
        const interval = setInterval(() => {
            (this as ComponentOptions<Data>).counter++
        },1000);
        
        setTimeout(() => {
            clearInterval(interval)
        },5000)    
    }
}
*/

/**
 * v-model을 이용한 양방향 바인딩.
const NameInput = {
    template: `
        <label for="name">
            Write your name : 
        <input
            v-model="name"
            placeholder="Enter your name"
            id="name"
        >
        </label>
    `,

    data() {
        return {
            name: '',
        }
    }
}

const app = createApp({
    components: {NameInput},
    template: `<NameInput/>`
})

 */
/**
 * v-model과 체크박스를 활용한 체크리스트
 
const CourseChecklist = {
    template: `
        <div>The Course checklist : {{list.join(', ')}}</div>
        <div>
            <label for="chapter1">
                <input
                    v-model="list"
                    type="checkbox"
                    value="chapter1"
                    id="chapter1"
                >
                Chapter1
            </label>
            <label for="chapter2">
                <input
                    v-model="list"
                    type="checkbox"
                    value="chapter2"
                    id="chapter2"
                >
                Chapter2
            </label>
            <label for="chapter3">
                <input
                    v-model="list"
                    type="checkbox"
                    value="chapter3"
                    id="chapter3"
                >
                Chapter3
            </label>
        </div>
    `,

    data() {
        return{
            list: [],
        }
    }
}

const app = createApp({
    components: { CourseChecklist},
    template: `<CourseChecklist/>`
})
*/

/**
 * v-model.lazy 수정자
 * vue는 데이터 변화에 따라 템플릿UI를 재 렌더링하는데, 모든 키 입력시 동기화 하면 불필요한 재렌더링이 반복 될 수 있슴.
 * 이런 오버헤드를 줄이기 위해, v-model 대신 v-model.lazy를 수정자로 바인딩 한다.
 * 이 경우, 엘리먼트 변경 사항이 onChange 이벤트를 발동시킬 경우에만 v-model이 추적한다.

const NameInput = {
    template: `
        <label for="name">
            Write your name : 
        <input
            v-model.lazy="name"
            placeholder="Enter your name"
            id="name"
        >
        </label>
    `,

    data() {
        return {
            name: '',
        }
    }
}

const app = createApp({
    components: {NameInput},
    template: `<NameInput/>`
})
 */

/**
 * v-bind를 통한 반응형 데이터 바인딩 및 Props 데이터 전달
 * v-bind는 [ : ] 로 축약 가능
 * v-bind:<attribute>="<expression>" 축약형 → :<attribute>="<expression>"

const App ={
    template:`
        <img :src="imageSrc" />
    `,
    data() {
        return {
            imageSrc:"https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat"
        }
    }
}
 */

/**
 * v-bind는 객체를 전달받아 객체 안의 모든 프로퍼티와 표현식을 엘리먼트의 속성과 값으로 바인딩한다.
 * 하단은 위의 소스를 다시 작성한 코드
 * +
 * 클래스 및 스타일 속성 바인딩.

const isVisible = true;

const App ={
    template:`
        <img v-bind="image" />
    `,
    data() {
        return {
            image: {
                src:"https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat",
                alt:"A random cute cat image",
                //class: ["cat", "image"]
                class : {
                    cat : isVisible,
                    image : !isVisible
                },
                style : [{
                    marginBlock : "10px",
                    marginInline : "15px"
                },{
                    padding: "10px"
                }
                ]
            }
            
        }
    }
}
 */

/**
 * v-for 를 이용한 데이터 컬렉션 순회

const List = {
    template : `
        <ul>
            <li v-for="number in numbers" :key="number">{{number}}</li>
        </ul>
    `,

    data() {
        return {
            numbers : [1,2,3,4,5]
        };
    }
};

const app = createApp({
    components : { List },
    template : `<List/>`
})
 */

/**
 * v-for 를 이용한 작업 목록 컴포넌트

const List = {
    template : `
        <ul>
            <li v-for="(task, index) in tasks" :key="task.id">
                {{title}} {{index}} : {{task.description}}
            </li>
        </ul>
    `,

    data() {
        return {
            tasks : [{
                    id : 'task1',
                    description : 'Buy groceries',
                }, {
                    id : 'task2',
                    description : 'Do laundry',
                }, {
                    id : 'task3',
                    description : 'Watch MoonKnight',
                }        
            ],
            title : 'This is Task'
        };
    }
};

const app = createApp({
    components : { List },
    template : `<List/>`
})
*/

/**
 * 객체 속성 순회
 * v-for = "(value, name, index) in collection"
const Collection = {
    data() {
        return {
            collection : {
                title : 'Watch MoonKnight',
                descriptions : 'Log in to Disney+ and watch all the chapters',
                priority : '5'
            }
        }
    },

    template : `
        <ul>
            <li v-for="(value, name, index) in collection" :key="name">
                {{index}} >>> {{name}} : {{value}}
            </li>
        </ul>
    `
}

const app = createApp({
    components : { Collection },
    template : `<Collection/>`
})
 */

/**
 * v-on을 이용한 이벤트 리스터 추가.
 * 
 * v-on:<event>= "<inline JavaScript code / name of method>"
 * @<event>="<inline JavaScript code / name of method>"

type Data = {
    printMsg : string;
}

const App = {
    // template : `
    //     <button @click="printMessage">Click Me</button>
    //     <div>{{ printMsg }}</div>
    // `,
    // methods : {
    //     printMessage() {
    //         (this as ComponentOptions<Data>).printMsg = "Button is Clicked"
    //     }
    // },

    // stopPropagation() 를 이용한 이벤트 전파 수동 정지
    // methods : {
    //     printMessage(e: Event) {
    //         if(e){
    //             e.stopPropagation()
    //         }
    //         console.log("Button is clicked")
    //     }
    // },

    template : `
        <button @click.stop="printMessage">Click Me</button>        
     `,
    
     methods : {
        printMessage() {
            console.log("Button is clicked")
        }
     },    

    data() : Data {
        return {
            printMsg : "Nothing to print yet",
        }
    }
}
 */

/**
 * 키 코드 수정자를 이용한 키보드 이벤트 감지
 * 키 수정자 → keyup, keydown, keypress 등 키보드 이벤트를 감지하는 용도 
 * 
 * .exact는 다음 상황에서 유용합니다:
    특정 키 조합에만 반응해야 할 때.
    의도하지 않은 키 조합에서 이벤트를 실행하고 싶지 않을 때.

const App = {
    template : `
        <div>
            <input @keydown.enter="onEnter">
        </div>
        <div>
            <input @keydown.tab="onTab">
        </div>
        <div>
            <input @keyup.ctrl.enter="onCtrlEnter">
        </div>
        <div>
            <button @click.shift.exact="onShiftEnter">SHIFT + CLICK</button>
        </div>
    `,

    methods : {
        onEnter(e: KeyboardEvent){
            console.log(`user pressed ${e.key}`)            
        },
        onTab(e: KeyboardEvent){
            console.log(`user pressed ${e.code}`)            
        },
        onCtrlEnter(e: KeyboardEvent){
            console.log(`Key code: ${e.key}, ${e.ctrlKey}`); // 'Tab' 출력
        },
        onShiftEnter(e: MouseEvent){
            console.log(`Mouse button: ${e.button}`);
        }
    }
}
*/

/**
 * v-if, v-else-if, v-else를 이용한 조건부 렌더링
 * v-show를 이용한 조건부 표시
 * 런타임 중 토글 빈도가 높으면 v-show가 효율적, 조건 변경 가능성이 없다면 v-if가 최선.

type Data = {
    isVisible : boolean;
    showSubtitle : boolean;
}

const App = {
    // template: `
    //     <div>
    //         <div v-if="isVisible"> I'm the text in toggle </div>
    //         <div v-else-if="showSubtitle"> I'm the subtitles text </div>
    //         <div v-else> I'm the replacement </div>
    //         <div>Visibility: {{ isVisible }}</div>
    //         <div>showSubtitle: {{ showSubtitle }}</div>
    //         <button @click="toggleVisibility">Toggle Visibility</button>
    //     </div>
    // `,
    template: `
        <div>
            <div v-show="isVisible"> I'm the text in toggle </div>
            <div>Visibility: {{ isVisible }}</div>
        </div>
    `,

    data() {
        return {
            isVisible: false,
            showSubtitle : false
        };
    },

    methods: {
        toggleVisibility() {
            (this as ComponentOptions<Data>).isVisible = !(this as ComponentOptions<Data>).isVisible; // Vue 인스턴스의 isVisible을 토글
            (this as ComponentOptions<Data>).showSubtitle = !(this as ComponentOptions<Data>).showSubtitle; // Vue 인스턴스의 isVisible을 토글
        },
    },
};
 */

/**
 * v-html을 이용한 HTML 코드 표시
 * 
 * v-html은 신뢰 할 수 있는 콘텐츠 렌더링 혹은 서버측 렌더링에서만 사용.
 * script 태그를 포함 할 수 있기 때문에,보안 위험이 초래됨.

const App = {
    template : `
        <div v-html="innerContent" />
    `,

    data() {
        return {
            innerContent : `
                <div>Hello</div>
            `
        }
    }
}
*/

/**
 * v-text를 이용한 텍스트 콘텐츠 표시
 * 

const App = {
    template : `
        <div v-text="text"></div>
    `,

    data() {
        return {
            test : `Hello World`
        }
    }
}
 */

/**
 * v-once및 v-memo를 이용한 렌더링 최적화
 * 
 * v-once는 정적 콘텐츠를 렌더링 할 때 유용. 엘리먼트 요소를 한 번만 렌더링하며, 다시 업데이트하지 않는다.
 * v-memo는 탬플릿 일부나 컴포넌트 블록을 조건부로 기억해야 할 때 사용한다.
 */
const App ={
    // template : `
    //     <div>
    //         <input v-model="name" placeholder="Enter your name">
    //     </div>
    //     <div v-once>{{name}}</div>
    // `,

    // data() {
    //     return {
    //         name : "JY"
    //     }
    // }
    template: `
        <ul>
            <li 
                v-for="image in images" 
                :key="image.id" 
                :style=" selected === image.id ? { border: '1px solid blue' } : {}"
                @click="selected = image.id"
                v-memo="[selected === image.id]"
            >
            <img :src="image.url">
            <div>{{image.title}}</h2>
            </li>
        </ul>
    `,

    data() {
        return {
            selected: null,
            images: [{
                id: 1,
                title: 'Cute cat',
                url: 'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/TheCute%20Cat',                
            }, {
                id: 2,
                title: 'Cute cat no 2',
                url: 'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cute_cat',
                
            }, {
                id: 3,
                title: 'Cute cat no 3',
                url: 'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_me',
                
            }, {
                id: 4,
                title: 'Just a cat',
                url: 'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_1',                
            }]
        }
    }
}


const app = createApp(App)

app.mount('#app')