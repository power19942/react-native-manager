import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Scene} from 'react-native-router-flux';
import {emailChanged,passwordChanged,loginUser} from './../actions';
import {Card,CardSection,Input,Button,Spinner} from './common';

class LoginForm extends React.Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        console.log('start login');
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="email@domain.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="password"
                        secureTextEntry
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={{color:'red',fontSize:20,alignSelf:'center'}}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}
// ({auth}) is destractor to get auth from the state
const mapStateToProps = ({auth}) =>{
    const {email,password,error,loading} = auth ;
    return{email,password,error,loading}
};
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);