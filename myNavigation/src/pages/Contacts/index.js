import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:40}}>
            <View style={{marginTop:40}}>
                <Text>Nome: Joao Silva</Text>
                <Text>Telefone: (48) 91234-5678</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome: 'Joao Silva',
                    telefone: '(48) 91234-5678',
                    endereco: 'Rua A, 123',
                    numero: '123',
                    profissao: 'Programador',
                    email: 'joaoprogramador@email.com'
                }
                )}
                >Information...</Text>
            </View>
            <View style={{marginTop:40}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (48) 98765-4321</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome: 'Amanda Silva',
                    telefone: '(48) 98765-4321',
                    endereco: 'Av. B, 321',
                    numero: '456',
                    profissao: 'Designer',
                    email: 'amandadesigner@email.com'
                }
                )}
                >Information...</Text>
            </View>
        </View>
    )
}
