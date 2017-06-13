import React, { Component } from 'react';
import {View,Text,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
class App extends React.Component{

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAI9FYQ2ppFnFNesfA2nUXLMJz0HGh9uWU",
            authDomain: "manager-358ce.firebaseapp.com",
            databaseURL: "https://manager-358ce.firebaseio.com",
            projectId: "manager-358ce",
            storageBucket: "manager-358ce.appspot.com",
            messagingSenderId: "25969771530"
        };
        firebase.initializeApp(config);
    }
    render(){
        // empty object in the createStore is for any initial state (not common)
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <View>
                    <StatusBar backgroundColor="orange" />
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
}

export default App;