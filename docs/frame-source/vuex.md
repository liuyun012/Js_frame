## Vuex 的学习记录
- 资料参考网址
	- [Vuex中文官网](https://vuex.vuejs.org/zh-cn/)
	- [Vuex项目结构示例 -- 购物车](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)
	- [Vuex 通俗版教程](http://www.jianshu.com/p/caff7b8ab2cf)
	- [Nuxt.js -- vuex的服务器端渲染](https://zh.nuxtjs.org/)
- Vuex的简介<br>
	- Vuex 是一个类似 Redux 的状态管理器，专为 Vue.js 应用程序开发，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化，并集成到了Vue的官方调试工具 [devtools extension](https://github.com/vuejs/vue-devtools)
	- Vuex的使用情况： 当开发大型单页面应用（SPA）时,会出现多个视图组件依赖同一个状态，来自不同视图的行为需要变更同一个状态。
- 基础使用及API说明
	- 常用api及基础写法
	
		```
		// func 指代 Function，函数
		const store = new Vuex.Store(
			{
			    state: {} | func,   // 根state对象，初始数据或状态赋值
			    mutations: {},      // 纯函数修改数据的方法，处理函数总是接受 state 作为第一个，payload 作为第二个参数(可选)
			    actions: {},        // 事件，动作， 处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。
			    getters: {},        // store 的计算属性，返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算
			    modules: {},        // 包含子模块的对象，会被合并到 store
			    plugins: [],        // 包含应用在store上的插件方法，这些插件接受store作为唯一参数，可以监听 mutation(用于外部地数据持久化、记录或调试)或者提交 mutation(用于内部数据，例如 websocket 或 某些观察者)
			    strict: Boolean,    // 默认值：false, 使Vuex store进入严格模式，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。
			}
		);
	``` 
	- 最简单的 Vuex 示例 
	
		```
		import Vue from 'vue';
		import Vuex from 'vuex';
		Vue.use(Vuex);
		
		const store = new Vuex.Store({
		    state: {
		        count: 0
		    },
		    mutations: {
		        increment (state) {
		            state.count++
		        }
		    }
		});
		
		store.commit('increment');
		console.log(store.state.count)  // 1
		```
		
		注明：每一个Vuex应用就是一个store,在store中包含组件的共享状态 `state` 和改变状态的方法 `mutations`，且只能通过 `mutations` 改变store的 `state` 的状态，不能通过类似 `store.state.count = 5` 的方式直接更改(直接修改，状态不会被同步，组件也不会重新渲染)

	- 在Vue组件使用Vuex
		- 在<b>根组件</b>，将store 注入到每一个子组件中，在子组件就可以通过 `this.$store` 访问：
	
		```
		// 根组件
		import store from './store';
		new Vue({
		  el: '#app',
		  router,
		  store,
		  render: h => h(App)
		})
		
		// Counter 组件
		export default {
			  name: 'counter',
			  computed: {
			  	 count () {
            	   return this.$store.state.count
       			}
        	  }
			}
		```
		- <b>Getters</b>: Vuex 中`getters` 对象，接受state作为第一个参数，可以方便我们在 store 对 state 进行处理计算。Getter也可以接受其他 <b>getters</b> 作为第二参数
		
		```
		const store = new Vuex.Store({
			  state: {
			    todos: [
			      { id: 1, text: '...', done: true },
			      { id: 2, text: '...', done: false }
			    ]
			  },
			  getters: {
			    doneTodos: state => {
			      return state.todos.filter(todo => todo.done)
			    }
			  }
			})
		// 在Vue中通过 store.getters对象调用
		computed: {
		  doneTodos () {
		    return this.$store.getters.doneTodos
		  }
		}
		// Getter也可以接受其他getters作为第二个参数
		getters: {
		  doneTodos: state => {
		      return state.todos.filter(todo => todo.done)
		  },
		  doneTodosCount: (state, getters) => {
		    return getters.doneTodos.length
		  }
		}
		```
		- <b>Mutations</b>: 每一个mutation都有一个事件类型type和一个回调函数handler，`Mutations`必须是同步函数，若需要异步操作，就需要 `Actions`了。
		
		```
		const store = new Vuex.Store({
		  state: {
		    count: 1
		  },
		  mutations: {
		    increment (state) {
		      state.count++;   // 变更state状态
		    }
		  }
		})
		// 调用mutation，需要通过store.commit方法调用mutation type
		store.commit('increment');
		// 可以向store.commit传入第二参数，也就是mutation的payload(多数情况传对象)
		mutaion: {
		    increment (state, n) {
		        state.count += n;
		    },
		    outcrement (state, payload) {
		        state.totalPrice += payload.price + payload.count;
		    }
		}
		
		store.commit('increment', 10);
		store.commit('outcrement', {
		    price: 10,
		    count: 8
		});
		```
- Vuex.Store 组件绑定的辅助函数 
		- mapState(namespace?: string, map: Array<string> | Object), 第一个参数可选。当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。使用 `mapState` 辅助函数可以帮助我们批量生成计算属性。
		
		```
		// 在单独构建的版本中辅助函数为 Vuex.mapState
		import { mapState } from 'vuex'
		
		export default {
		  computed: mapState({
		    // 箭头函数可使代码更简练
		    count: state => state.count,  // 不使用mapState辅助函数的写法
		
		    // 传字符串参数 'count' 等同于 `state => state.count`
		    countAlias: 'count',          // 写法一，使用别名方式
		
		    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
		    countPlusLocalState (state) {
		      return state.count + this.localCount  // 写法二，常规函数方式
		    }
		    
		    // 
		  })
		}
		
		// 当映射的计算属性的名称与state的子节点名称相同时，可用字符串数组的写法
		export default { 
			computed: mapState(['count'])  // 映射 this.count 为 store.state.count
		}
		
		// 使用 ES6 的 对象展开运算符 的写法去简化
		export default { 
			computed: { ...mapState(['count','total']) }	} 
		```
		- mapGetters(namespace?: string, map: Array<string> | Object) : 将 store 中的 getter 映射到局部计算属性。
		
		```
		import { mapGetters } from 'vuex'
		export default {
			computed: {
		    // 使用对象展开运算符将 getter 混入 computed 对象中
		    ...mapGetters([
		      'doneTodosCount',
		      'anotherGetter'
		    ])
		  }
		}
		// 想将getter属性另取一个名字，需使用对象形式
		export default {
			computed: {
		    mapGetters({
			    doneCount: 'doneTodosCount' // 映射 `this.doneCount` 为`store.getters.doneTodosCount`
			})
		  }
		}
		```
		- mapActions(namespace?: string, map: Array<string> | Object): 将组件的 methods 映射为 store.dispatch 调用
		
		```
		import { mapActions } from 'vuex'
	
		export default {
		  methods: {
		    ...mapActions([
		      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
		
		      // `mapActions` 也支持载荷：
		      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
		    ]),
		    
		    ...mapActions({
		      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
		    })
		  }
		}
		```
		- mapMutations(namespace?: string, map: Array<string> | Object): 将组件中的 methods 映射为 store.commit 调用
		
		```
		import { mapMutations } from 'vuex'
		export default {
			methods: {
				...mapMutions([
					'increment',  // 将`this.increment()` 映射为 'this.$store.commit('increment')'
					
					// `mapMutations` 也支持载荷：
					'incrementBy'  // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
				]),
				...mapMutations({
					add: 'increment',  // 将 `this.add()`映射为`this.$store.commit('increment')`
				})
			}
		}
		```
		- createNamespacedHelpers(namespace: string): 建基于某个命名空间辅助函数
		
		```
			import { createNamespacedHelpers } from 'vuex'
			const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
			
			export default {
			  computed: {
			    // 在 `some/nested/module` 中查找
			    ...mapState({
			      a: state => state.a,
			      b: state => state.b
			    })
			  },
			  methods: {
			    // 在 `some/nested/module` 中查找
			    ...mapActions([
			      'foo',
			      'bar'
			    ])
			  }
			}
		```
- Vuex.Store 的实例属性
		- store.commit( '', { } ) : 提交 mutation
		- store.dispatch( '', { } ) : 分发 actions
		- store.replaceState(newstate): 替换 store 的根状态，仅用状态合并或时光调试。
		- store.watch( getter, cb ) : 响应式地监测一个 getter 方法的返回值，当值改变时调用回调函数。
		- store.subscribe(Function): 注册监听 store 的 mutations , Function 会在每个 mutations 完成后调用，接受 mutation 和 经过 mutation 后的状态作为参数：
	
			```
			store.subscribe((mutation, state) => {
				  console.log(mutation.type)
				  console.log(mutation.payload)
				})
			```
		- store.subscribeAction(handler: Function): 订阅 store 的action, handler 会在分发的时候调用并接收 action 描述和当前的 store 的 state两个参数。
		
			```
			store.subscribeAction((action, state) => {
				  console.log(action.type)
				  console.log(action.payload)
				})
			```
 


	