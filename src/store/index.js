import { createStore } from 'vuex';

export default createStore({
    state:{
        modalWindow:false,
        modalWindowData:{},
        listItems:JSON.parse(localStorage.getItem('listItems')),
    },
  /*
    [
        { id: 1, svg: "img/item1.svg", row: 1, column: 1, count: 4 },
        { id: 2, svg: "img/item2.svg", row: 1, column: 2, count: 2 },
        { id: 3, svg: "img/item3.svg", row: 1, column: 3, count: 5 },
    ]*/
    mutations:{
        RETURNMODALWINDOW:(state, payload)=>{
            state.modalWindowData = payload;
            state.modalWindow = true;
        },
        CLOASEMODALWINDOW:(state)=>{
            state.modalWindow = false;
        },
        DELETEITEM:(state, payload)=>{
            state.listItems = state.listItems.map(item=>{
                if(item.id == payload.id){
                    item.count = item.count - payload.CountInput;
                    if(item.count <=0){
                       return state.listItems.filter(i=> i.id !== item.id );
                    }
                }
                return item;
            })
            localStorage.setItem('listItems', JSON.stringify(state.listItems));
        }
        
    },
    actions:{
        returnModalWindow({commit}, payload){
            commit("RETURNMODALWINDOW", payload);
        },
        cloaseModalWindow({commit}){
            commit("CLOASEMODALWINDOW");
        },
        deleteItem({commit}, payload){
            commit("DELETEITEM", payload);
        }

    }
})