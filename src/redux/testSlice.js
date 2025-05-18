import { createSlice } from "@reduxjs/toolkit";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


const random = [
  "apple", "keyboard", "sunshine", "velocity", "blue", "program",
  "giraffe", "sky", "thought", "harmony", "create", "function",
  "world", "magic", "coffee", "dream", "river", "jungle",
  "ocean", "light", "fire", "window", "energy", "banana",
  "build", "fast", "language", 
  
];

export const testSlice = createSlice({

    name:"test" ,
    initialState: {
       
        words: shuffle([...random]),
        status:"waiting",
        correct:0,
        wrong:0,
        currentIndex:0,
        input:"",
        timeLeft:60,
        userImage:"",
        isStarted : false,
        isMenuOpen : true,
        isLogin : false,
        userInfo: {
          name: "",
          password: "",
          email: "",
          surname: "",
          photo: ""
         },
        registeredUsers: [],
        champions :[{name :"user453" , score:142 } , {name:"enesy" , score:132},   {name:"typeMaster" , score:122},  {name:"myspace" , score:110}, {name:"user1113" , score:102}, {name:"user12" , score:93},] ,
        sorting : "",

    },

    reducers: {
        sortChampions:(state,action) => {
          state.sorting=action.payload;
            if (state.sorting === "top") {
         state.champions.sort((a, b) => b.score - a.score); 
         } else if (state.sorting === "bottom") {
         state.champions.sort((a, b) => a.score - b.score); 
         }
       },
        
        register: (state, action) => {
          state.registeredUsers.push(action.payload);
        },
        updatePhoto: (state, action) => {
        state.userInfo.photo = action.payload;

        // registeredUsers içinde ilgili kullanıcıyı da güncelle
        const index = state.registeredUsers.findIndex(user => user.name === state.userInfo.name);
        if (index !== -1) {
            state.registeredUsers[index].photo = action.payload;
        }

        // localStorage güncelle
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        },
        login: (state, action) => {
        const foundUser = state.registeredUsers.find(
            (user) =>
            user.name === action.payload.name &&
            user.password === action.payload.password
        );
        if (foundUser) {
            state.isLogin = true;
            state.userInfo = foundUser;
        } else {
            state.isLogin = false;
            state.userInfo = {
            name: "",
            password: "",
            email: "",
            surname: "",
            photo: ""
            };
        }
        },
           createAccount: (state, action) => {
            const { name, password, correct = 0, wrong = 0, email, surname, photo = "" } = action.payload;
            const newUser = { name, password, email, surname, photo };
            state.userInfo = newUser;
            state.correct = correct;
            state.wrong = wrong;
            state.isLogin = true;
            state.registeredUsers.push(newUser);
            localStorage.setItem("userInfo", JSON.stringify(newUser));
        } ,
      logout: (state) => {
         state.isLogin = false;
         state.userInfo = "";
         localStorage.removeItem("userInfo");
        },
        showMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        startGame : (state) => {
            state.words = shuffle([...random]);
            state.correct = 0;
            state.wrong = 0 ;
            state.isStarted= true;
            state.timeLeft = 60 ;
            state.currentIndex  = 0 ;
            state.status  ="running" ;
            state.input = "";

        },
           setInput : (state , action) => {
            state.input= action.payload;

        },
            submitWord : (state) => {
            const targetWord = state.words[state.currentIndex];
            if (state.input.trim() === targetWord){
                state.correct +=1;
            } else {
                state.wrong +=1;
            }

        },

           tick: (state) => {
           if(state.timeLeft > 0) {
            state.timeLeft -=1
           } else {
            state.status = "finished";
            state.isStarted= false
           }
    
        },
            stopGame : (state) => {
        
            state.isStarted= false;
            state.status  ="finished" ;
  
        },
           restartGame : (state) => {
            state.words = shuffle([...random]);
            state.correct = 0;
            state.wrong = 0 ;
            state.isStarted= true;
            state.timeLeft = 60 ;
            state.currentIndex  = 0 ;
            state.status  ="waiting" ;
            state.input = "";

        },

    },
})


export default testSlice.reducer;
export const {tick , setInput , submitWord , startGame , stopGame, restartGame,showMenu , login , logout , createAccount , updatePhoto , sortChampions} = testSlice.actions;