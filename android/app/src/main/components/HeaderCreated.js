import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const HeaderCreated = ({ title = 'Gamer Store' }) => {
    return (
      <View>
        <Text style={styles.header}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#1CC',
        backgroundColor: '#DDD'
    },
});

export default HeaderCreated