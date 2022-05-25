import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import { Avatar,Title,Caption, Paragraph, Text, Drawer, TouchableRipple, Switch, Colors } from 'react-native-paper'
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';

export function DrawerContent(props) {

    const [isDarkTheme,setIsDarkTheme] = useState(false) 

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* Whole userinfo section */}
                    <View style={styles.userInfoSection}>
                        {/* userpic and name section */}
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-Js13WypHbV2TvrmVoEZXAYddodQnKgwrRyHPBaHPujLd-2rGioPPFdyu-Y4q'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Shreedhar Patil</Title>
                                <Caption style={styles.caption}>@shreedhar183</Caption>
                            </View>
                        </View>
                        {/* followers and following section */}
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>Pro</Paragraph>
                                <Caption style={styles.caption}>Seller</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>4.8</Paragraph>
                                <Caption style={styles.caption}>⭐</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="home" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate("Matches")}}
                        />    
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="face-woman" color={color} size={size} />
                            )}
                            label="Woman"
                            onPress={() => {props.navigation.navigate("Events")}}
                        />   
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="account-child" color={color} size={size} />
                            )}
                            label="Kids"
                            onPress={() => {props.navigation.navigate("Notications")}}
                        /> 
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="menu" color={color} size={size} />
                            )}
                            label="New Collection"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="account-search" color={color} size={size} />
                            )}
                            label="Profile"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="account-settings" color={color} size={size} />
                            )}
                            label="Settings"
                            onPress={() => {}}
                        />        
                    </Drawer.Section>
                    <Drawer.Section title="Authentication">
                        {/* <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text style={{fontWeight:'bold'}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                                
                            </View>
                        </TouchableRipple> */}
                         <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="login" color={color} size={size} />
                            )}
                            label="Sign In"
                            onPress={() => {props.navigation.navigate("SignUp")}}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon name="exit-to-app" color={color} size={size} />
                            )}
                            label="Sign Out"
                            onPress={() => {}}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section> */}
        </View>
    )
}






const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: '#663399',
        
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }

})

