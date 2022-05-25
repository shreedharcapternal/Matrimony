import styled from 'styled-components/native'
import React from 'react'


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    padding: 20px;
`

export const Card = styled.View`
    background-color: white;
    width: 100%;
    border-radius: 5px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`
export const UserImg = styled.Image`
    width: 110px;
    height: 120px;
    border-radius: 20px;
`

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 100%;
    align-self: center;
`

export const UserInfoText = styled.View`
    flex-direction: column;
    margin-left: 15px;
`

export const UserName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-family: 'Lato-Regular';
    margin-top: 15px
    
`

export const UserAge = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    margin-top: 3px
    
`

export const UserJob = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    margin-top: 3px
    
`
export const UserCity = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    margin-top: 3px
    
`
export const Interaction = styled.TouchableOpacity`
    display: flex;
    flexDirection: row;
    background-color: ${props => props.active ? 'white' : 'transparent'}
`

export const InteractionText = styled.Text`
    font-size: 13px;
    font-family: 'Lato-Regular';
    color: ${props => props.active ? '#2e64e5' : '#333'}
    font-weight: bold;
    margin-top: 12px;
    margin-left: 5px;
`


