import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Layout, Text } from 'react-native-ui-kitten'
import styles from './Home.component.style'
import commonStyle from './../../styles/common.style'
import { Icon } from 'react-native-eva-icons'

const Home = () => {

    return (
        <View styles={styles.container}>
            <ScrollView>
                <View style={commonStyle.row}>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='home-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Great Room</Text>
                    </View>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='monitor-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Media Room</Text>
                    </View>
                </View>
                <View style={commonStyle.row}>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='book-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Kitchen</Text>
                    </View>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='headphones-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Music</Text>
                    </View>
                </View>
                <View style={commonStyle.row}>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='tv-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Master Bedroom</Text>
                    </View>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='bulb-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Light Room</Text>
                    </View>
                </View>
                <View style={commonStyle.row}>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='credit-card-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Card Room</Text>
                    </View>
                    <View style={[commonStyle.col, commonStyle.card]}>
                        <Icon name='film-outline' width={30} height={30} style={styles.iconStyle} />
                        <Text style={styles.text}>Media Room</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home