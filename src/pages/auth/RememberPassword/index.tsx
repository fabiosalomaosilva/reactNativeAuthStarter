import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/global';

const RememberPassword: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  function handleLogin() {
    navigation.goBack();
  }

  return (
    <View style={styles.containerCenter}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />

      <Text style={styles.HeaderForm}>Recuperar Senha</Text>

      <TextInput
        placeholder="Informar seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        returnKeyType={'next'}
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={handleLogin}>
        Já tenho registro
      </Text>
    </View>
  );
};

export default RememberPassword;
