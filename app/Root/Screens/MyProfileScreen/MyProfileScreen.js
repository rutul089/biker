import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './MyProfileStyle';
import { left, avtar } from 'app/assets';
import MainHeader from 'app/Component/MainHeader';
import { Block, EditText, CustomText, Switch } from 'app/Component';
import { Container, Content, Button } from 'native-base';

export default class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            phone: '',
            name: '',
            dob: '',
            errors: [],
        };
    }

    //-- Handle save profile call
    hancleSaveProfile() {
        alert('btn click')
    }


    render() {
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        return (
            <Container>
                <MainHeader
                    bodyContent={'My Profile'}
                    leftIcon={left}
                    backAction={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <Content style={{ paddingBottom: 20 }}>
                    <Block center style={{ marginTop: 20 }}>
                        <Image source={avtar} style={styles.thumbnail} />
                        <TouchableOpacity>
                            <CustomText bold h2 color={'#FF7554'} style={{ marginTop: 15 }}>
                                Edit Profile Picture
                        </CustomText>
                        </TouchableOpacity>
                    </Block>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <EditText
                            label="Full Name"
                            error={hasErrors('name')}
                            style={[styles.input, hasErrors('name')]}
                            defaultValue={this.state.name}
                            onChangeText={text => this.setState({ name: text })}
                        />
                        <EditText
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <EditText
                            phone
                            label="Phone Number"
                            error={hasErrors('phone')}
                            style={[styles.input, hasErrors('phone')]}
                            defaultValue={this.state.phone}
                            onChangeText={text => this.setState({ phone: text })}
                        />
                        <EditText
                            label="DOB"
                            error={hasErrors('dob')}
                            style={[styles.input, hasErrors('dob')]}
                            defaultValue={this.state.dob}
                            onChangeText={text => this.setState({ dob: text })}
                        />
                        <Button
                            block
                            style={{
                                borderRadius: 6,
                                marginBottom: 15,
                                backgroundColor: '#FF7554',
                                marginTop: 15,
                            }}
                            onPress={() => this.hancleSaveProfile()}>
                            <CustomText h2 center semibold white>
                                Save Profile
                            </CustomText>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
