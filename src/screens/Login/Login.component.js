import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Input, Button } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'
import styles from './Login.component.style'
import commonStyle from './../../styles/common.style'

const Login = () => {
    return (
        <Layout style={styles.container}>
            <Text
                appearance="alternative"
                category="h1"
                style={styles.headerText}>
                Sign up and activate your home's KeyCode
            </Text>
            <View style={commonStyle.row}>
                <View style={commonStyle.col}>
                    <Input
                        label='Name'
                        captionIcon={this.renderIcon}
                        labelStyle={styles.label}
                        style={[styles.input, styles.marginRight5]}
                    />
                </View>
                <View style={commonStyle.col}>
                    <Input
                        label=''
                        captionIcon={this.renderIcon}
                        style={[styles.input, styles.marginLeft5, styles.marginRight5, styles.marginTop28]}
                    />
                </View>
            </View>
            <Input
                label='Email'
                captionIcon={this.renderIcon}
                labelStyle={styles.label}
                style={[styles.input, styles.marginRight5]}
            />
            <Input
                label='Password'
                captionIcon={this.renderIcon}
                labelStyle={styles.label}
                style={[styles.input, styles.marginRight5]}
            />
            <Input
                label='Confirm Password'
                captionIcon={this.renderIcon}
                labelStyle={styles.label}
                style={[styles.input, styles.marginRight5]}
            />
            <Button
                size="large"
                status="white"
                textStyle={{ color: '#252525'}}
                style={styles.btn}
                onPress={() => Actions.home()}>
                Next
            </Button>
        </Layout>
    )
}

export default Login
