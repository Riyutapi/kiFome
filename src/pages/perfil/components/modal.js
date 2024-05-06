import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Linking, Switch, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLogin, SGLogin, useEmail, useSenha, SGSenha, excluirConta } from '../../../services/usuario';
import TermoDeUso from '../../../components/termo';

export default function ModalPerfil({ visible, opcao, closeModal, onClose }) {
    const navigation = useNavigation();

    const sobre = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{textAlign: 'justify'}}>O KiFome é o resultado de um projeto inovador desenvolvido por um grupo de estudantes universitários comprometidos com a criação de soluções práticas e sustentáveis para o dia a dia.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Idealizado por Diego Oliveira Rebouças, Felipe Castelo Hernandes, Isabella Nepomucena dos Santos, Lincon da Silva Ferreira, Ricardo Yudi Takahashi Pimentel, Rita de Cássia dos Santos Lopes e Vitor Hugo Navarro Libano, com menção honrosa para Gustavo Junior dos Santos, este aplicativo culinário surge como uma resposta às necessidades contemporâneas de uma alimentação mais consciente e acessível.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Partindo da premissa de que a tecnologia pode ser uma aliada na busca por um estilo de vida mais sustentável, o KiFome foi concebido para facilitar a preparação de refeições utilizando apenas os ingredientes disponíveis nas casas dos usuários. Esta abordagem não apenas reduz o desperdício de alimentos, mas também torna a culinária mais inclusiva e econômica.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>A iniciativa dos autores do KiFome vai além de oferecer uma simples coleção de receitas. O aplicativo visa criar uma comunidade engajada em compartilhar experiências, avaliações e dicas culinárias, promovendo uma cultura de colaboração e aprendizado mútuo.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Com a implementação planejada de uma Inteligência Artificial treinada com as melhores receitas, o KiFome está preparado para revolucionar a maneira como as pessoas cozinham em casa. Os usuários terão acesso a um vasto repertório de pratos de qualidade, além de dicas personalizadas para aprimorar suas habilidades culinárias.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>O KiFome é mais do que um aplicativo culinário; é uma ferramenta que combina tradição e inovação, tornando a arte da culinária mais acessível, prazerosa e, acima de tudo, sustentável no século XXI.</Text>
        </ScrollView>
    );

    const termo = () => (
        TermoDeUso()
    );

    const handleEmailClick = () => {
        const email = 'contato@kifome.com.br';
        const url = `mailto:${email}`;
        Linking.openURL(url);
    };

    const central = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{ fontWeight:'bold', textAlign: 'center' }}>Perguntas Frequentes (FAQ)</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 1. Como funciona o filtro de receitas?</Text>
            <Text style={{ textAlign: 'justify' }}>O filtro de receitas permite aos usuários encontrar receitas adequadas com base nos ingredientes que já possuem em casa. Os usuários podem adicionar esses ingredientes à sua “geladeira virtual” e o filtro mostrará apenas as receitas que podem ser feitas com eles.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 2. Posso compartilhar minhas próprias receitas no KiFome?</Text>
            <Text style={{ textAlign: 'justify'}}>Sim, os usuários podem compartilhar suas próprias receitas, para fazer isso, basta acessar a função de envio de receitas no aplicativo e preencher as informações necessárias, como os ingredientes, as instruções de preparo e, opcionalmente, adicionar fotos. Depois de enviar a receita, ela será revisada pela equipe do KiFome antes de ser disponibilizada para outros usuários. Compartilhar suas próprias receitas é uma ótima maneira de contribuir para a comunidade do KiFome e ajudar outros usuários a descobrir novos pratos.</Text>
            <Text style={{ fontWeight:'bold' }}> 3. Como funcionam os níveis e recompensas do aplicativo?</Text>
            <Text style={{ textAlign: 'justify'}}>O sistema de níveis e recompensas projetado para incentivar a interação dos usuários e premiar a participação ativa na plataforma. Cada usuário começa no nível 1 e pode progredir através dos níveis ganhando KiFomeCoins e desbloqueando novas funcionalidades. As atividades que podem ajudar os usuários a progredir de nível incluem logins diários, avaliações em receitas, comentários marcados como positivos e outras interações positivas com o aplicativo. Conforme os usuários avançam de nível, eles desbloqueiam benefícios adicionais, como a capacidade de fazer comentários em receitas, personalizar avatares e muito mais.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 4. O que são KiFomeCoins e como posso ganhá-las?</Text>
            <Text style={{ textAlign: 'justify'}}>KiFomeCoins são moedas virtuais utilizadas dentro do aplicativo KiFome. Os usuários podem comprar, mas também ganhar de forma gratuita de várias maneiras, incluindo interações positivas com o aplicativo, como compartilhamento de receitas, avaliações positivas em receitas, atualização de perfil e participação em desafios culinários. Essas moedas podem ser trocadas por benefícios dentro do aplicativo, como desbloquear novas funcionalidades, acessar receitas premium e participar de eventos especiais.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 5. Posso acessar o KiFome offline?</Text>
            <Text style={{ textAlign: 'justify'}}>Não, é necessário estar sempre conectado à internet para aproveitar todas as funcionalidades, pois os dados são constantemente atualizados por meio de servidores conectados ao banco de dados, garantindo informações precisas e em tempo real.</Text>
            <Text style={{ fontWeight:'bold' }}> 6. Como funcionam os desafios culinários?</Text>
            <Text style={{ textAlign: 'justify'}}>Os desafios culinários do KiFome são atividades temáticas que incentivam os usuários a explorar suas habilidades culinárias e compartilhar suas criações. Em datas especiais os usuários poderam participar desses desafios, postando receitas específicas com alguma temática ou criando pratos com ingredientes específicos. Ao participar, eles podem compartilhar suas receitas no aplicativo e ganhar KiFomeCoins extras ou outros benefícios. Esses desafios promovem a interação, inspiram a criatividade na cozinha e expandem o repertório culinário da comunidade KiFome.</Text>
            <Text style={{ paddingTop: 10, fontWeight:'bold', textAlign: 'center' }}> Possui uma dúvida diferente?{'\n'}Entre em contato com a gente!</Text>
            <Text style={{ paddingTop: 5, textAlign: 'center', color: 'blue' }} onPress={handleEmailClick}>contato@kifome.com.br</Text>
        </ScrollView>
    );

    const [isEnabledMain, setIsEnabledMain] = useState([true, true, true]);
    const [isEnabled, setIsEnabled] = useState([
        [true, true, true],
        [true, true, true],
        [true, true, true]
    ]);
    
    const toggleSwitchMain = groupIndex => () => {
        const nextState = !isEnabledMain[groupIndex];
        setIsEnabledMain(prevState => {
            const newState = [...prevState];
            newState[groupIndex] = nextState;
            return newState;
        });
    
        setIsEnabled(prevState => {
            const newState = prevState.map((group, index) => {
                if (index === groupIndex) {
                    return group.map(() => nextState);
                } else {
                    return group;
                }
            });
            return newState;
        });
    };
    
    const toggleSwitch = (groupIndex, switchIndex) => () => {
        setIsEnabled(prevState => {
            const newState = prevState.map((group, index) => {
                if (index === groupIndex) {
                    return group.map((val, i) => (i === switchIndex ? !val : val));
                } else {
                    return group;
                }
            });
            return newState;
        });
    };
    
    const notificacoes = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight: 'bold', color: '#DF6127' }}>Sua Receita:</Text>
                <Switch
                    style={{ position: 'absolute', top: 0, right: 11 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabledMain[0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitchMain(0)}
                    value={isEnabledMain[0]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }} />
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Comentários</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Comentários de outros usuários feitos na sua receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0, 0)}
                    value={isEnabled[0][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Bombando</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se sua receita está recebendo muitas avaliações positivas.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0,1)}
                    value={isEnabled[0][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Alguém que você segue</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se ela interagiu de alguma forma com sua receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0,2)}
                    value={isEnabled[0][2]}/>
                </View>    
            </View>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight:'bold', color: '#DF6127' }}>Atividade das Pessoas que você está seguindo:</Text>
                <Switch
                        style={{ position: 'absolute', top: 0, right: 11 }}
                        trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                        thumbColor={isEnabledMain[1] ? '#DF6127' : '#AFB297'}
                        ios_backgroundColor="#DF6127"
                        onValueChange={toggleSwitchMain(1)}
                        value={isEnabledMain[1]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }}/>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Receita Nova</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se a pessoa publicou uma nova receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 0)}
                    value={isEnabled[1][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Receita Favoritada</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Receitas de outros usuários que ela favoritou.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 1)}
                    value={isEnabled[1][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Comentário</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Comentários feitos em receitas de outros usuários.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 2)}
                    value={isEnabled[1][2]}/>
                </View>
            </View>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight:'bold', color: '#DF6127' }}>Outros:</Text>
                <Switch
                        style={{ position: 'absolute', top: 0, right: 11 }}
                        trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                        thumbColor={isEnabledMain[2] ? '#DF6127' : '#AFB297'}
                        ios_backgroundColor="#DF6127"
                        onValueChange={toggleSwitchMain(2)}
                        value={isEnabledMain[2]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }}/>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Respostas</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Respostas a seu comentário.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 0)}
                    value={isEnabled[2][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Desafios</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se está acontecendo algum desafio.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 1)}
                    value={isEnabled[2][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Lembretes</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Outros avisos.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 2)}
                    value={isEnabled[2][2]}/>
                </View>
            </View>
        </ScrollView>
    );
    
    const [openSecondModal, setOpenSecondModal] = useState(null);
    const loginOriginal = useLogin();
    const [login, setLogin] = useState(loginOriginal);
    const email = useEmail();
    const senha = useSenha();
    const [continuar, setContinuar] = useState(false);
    const [enviar, setEnviar] = useState(false);
    const [final, setFinal] = useState(false);
    const [inputDigitado, setDigitado] = useState('');
    const [inputDigitado2, setDigitado2] = useState('');
    const [inputDigitado3, setDigitado3] = useState('');
    const [corBotao, setCorBotao] = useState('#AFB297');
    const [aviso, setAviso] = useState(false);
    const [aviso2, setAviso2] = useState(false);
    const [modificado, setModificado] = useState(false);

    const handleEnviar = () => {
        setContinuar(true);
    };

    const mudarCor0 = (text) => {
        setLogin(text);
        if (text === '') {
            setCorBotao('#DF6127');
        } else if (text.length < 3) {
            setCorBotao('#AFB297');
        } else {
            setCorBotao('#DF6127');
        }
    };

    const handleLogin = () => {
        if (login === '') {
            setLogin(loginOriginal);
        } else {
            SGLogin(login);
            setModificado(true);
        }
        setOpenSecondModal(null);
    };

    const mudarCor = (text) => {
        setDigitado(text);
        if (text !== '') {
            setCorBotao('#DF6127');
            setAviso(false);
        } else {
            setCorBotao('#AFB297');
            setAviso(false);
        }
    }

    const mudarCor2 = () => {
        const senhaValida = inputDigitado !== '' && inputDigitado2.length >= 4 && inputDigitado3.length >= 4;
        if (senhaValida) {
            setCorBotao('#DF6127');
            setAviso(false);
            setAviso2(false);
        } else {
            setCorBotao('#AFB297');
            setAviso(false);
            setAviso2(false);
        }
    }

    const verificarCodigo = () => {
        const codigoEmail = '54321';
        if (inputDigitado === codigoEmail) {
            setDigitado('');
            setEnviar(true);
        } else {
            setAviso(true);
        }
    };

    const verificarSenha = () => {
        if (inputDigitado === senha) {
            excluirConta();
            navigation.navigate('login');
        } else {
            setAviso(true);
        }
    };

    const mudarSenha = () => {
        if (inputDigitado === senha && inputDigitado2 === inputDigitado3 && inputDigitado2 !== '') {
            SGSenha(inputDigitado2);
            setOpenSecondModal(null);
            setDigitado('');
            setDigitado2('');
            setDigitado3('');
            setCorBotao('#AFB297');
        } else if (inputDigitado !== senha) {
            setAviso(true);
            setCorBotao('#AFB297');
        } else {
            setAviso2(true);
            setCorBotao('#AFB297');
        }
    };

    const validarEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = regex.test(inputDigitado);
        if (emailValido) {
            setFinal(true);
            /* para mudar o email
            SGEmail(inputDigitado);
            setOpenSecondModal(null);
            setDigitado('');
            setCorBotao('#AFB297');
            setContinuar(false);
            setAviso(false);
            setEnviar(false);
            */
        } else {
            setAviso(true);
        }
    };

    const dados = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{ fontWeight: '600', paddingBottom: 20, textAlign: 'center'}}>Deseja alterar algum dado?</Text>
            <TouchableOpacity onPress={() => setOpenSecondModal('Nome de usuário')} style={styles.centralOp}>
                <Text style={{ fontWeight: 'bold' }}>Nome de usuário:</Text>
                <Text>{loginOriginal}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenSecondModal('E-mail')} style={styles.centralOp}>
                <Text style={{ fontWeight: 'bold' }}>E-mail:</Text>
                <Text>{email}</Text>
            </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpenSecondModal('Senha')} style={styles.centralOp}>
                <Text style={{ fontWeight: 'bold' }}>Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenSecondModal('Excluir conta')} style={styles.centralOp}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Excluir conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );

    const OpenSecondModal = () => {
        return (
            <Modal visible={openSecondModal !== null} animationType="fade" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalDados}>
                        <Text style={[styles.fecharText, { color: '#DF6127' }]}>{openSecondModal}</Text>
                        <TouchableOpacity style={styles.fecharButton} 
                            onPress={() => {
                                setOpenSecondModal(null);
                                setDigitado('');
                                setDigitado2('');
                                setDigitado3('');
                                setCorBotao('#AFB297');
                                setContinuar(false);
                                setAviso(false);
                                setEnviar(false);
                                setFinal(false);
                                setAviso2(false);
                                setLogin(loginOriginal);
                            }}>
                            <Text style={styles.fecharText}>X</Text>
                        </TouchableOpacity>
                        {(() => {
                            switch (openSecondModal) {
                            case "Nome de usuário":
                                return (
                                    <View>
                                        <Text style={{ fontWeight: '600', textAlign: 'center', paddingBottom: 10}}>
                                            Precisa conter pelo menos 3 caracteres.
                                        </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite o nome de usuário"
                                            clearButtonMode="while-editing"
                                            value={login}
                                            onChangeText={(text) => {
                                                const newText = text.replace(/[^a-zA-Z0-9_.\-]/g, '');
                                                mudarCor0(newText);
                                            }}/>
                                        <TouchableOpacity onPress={handleLogin} disabled={corBotao === '#AFB297'}>
                                            <Text style={[styles.botaoConfirma, { backgroundColor: corBotao, marginBottom: 10 }]}>Confirmar</Text>
                                        </TouchableOpacity>
                                    </View> 
                                );
                            case "E-mail":
                                return (
                                    <View>
                                    {continuar === false ? (
                                        <View>
                                            <Text style={{ fontWeight: '600', textAlign: 'center'}}>
                                                Enviaremos um código de verificação para o seu antigo e-mail
                                            </Text>
                                            <TouchableOpacity onPress={handleEnviar}>
                                                <Text style={[styles.botaoConfirma, { backgroundColor: '#DF6127' }]}>Enviar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ) : ( enviar === false ? (
                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Digite o código de verificação"
                                                clearButtonMode="while-editing"
                                                value={inputDigitado}
                                                onChangeText={(text) => {
                                                    const newText = text.replace(/[^a-zA-Z0-9]/g, '');
                                                    mudarCor(newText);
                                                }}/>
                                            <TouchableOpacity onPress={verificarCodigo} disabled={corBotao === '#AFB297'}>
                                                <Text style={[styles.botaoConfirma, { backgroundColor: corBotao, marginBottom: 10 }]}>Confirmar</Text>
                                            </TouchableOpacity>
                                            {aviso && <Text style={{ color: 'red', textAlign: 'center'}}>Código Incorreta</Text>}
                                        </View>
                                    ) : ( final === false ? (
                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Digite o novo e-mail"
                                                clearButtonMode="while-editing"
                                                value={inputDigitado}
                                                onChangeText={(text) => {
                                                    const newText = text.replace(/[^a-zA-Z0-9_.\-@]/g, '');
                                                    setDigitado(newText);
                                                    setAviso(false);
                                                }}/>
                                            <TouchableOpacity onPress={validarEmail}>
                                                <Text style={[styles.botaoConfirma, { backgroundColor: corBotao, marginBottom: 10 }]}>Alterar</Text>
                                            </TouchableOpacity>
                                            {aviso && <Text style={{ color: 'red', textAlign: 'center'}}>Email Inválido</Text>}
                                        </View>
                                    ) : (
                                        <View>
                                            <Text>Um e-mail de confirmação foi enviado para o seu novo endereço de e-mail.</Text>
                                            <TouchableOpacity onPress={() => {
                                                    setOpenSecondModal(null);
                                                    setDigitado('');
                                                    setCorBotao('#AFB297');
                                                    setContinuar(false);
                                                    setAviso(false);
                                                    setEnviar(false);
                                                    setFinal(false);
                                                }}>
                                                <Text style={[styles.botaoConfirma, { backgroundColor: '#DF6127' }]}>OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )))}
                                </View>    
                                );
                            case "Senha":
                                return (
                                    <View>
                                        <Text style={{ fontWeight: '600', textAlign: 'center', paddingBottom: 10}}>
                                            A Senha deve conter pelo menos 5 caracteres.
                                        </Text>
                                        <TextInput
                                            style={{paddingBottom: 10}}
                                            placeholder="Digite a senha Atual"
                                            secureTextEntry
                                            value={inputDigitado}
                                            onChangeText={(text) => {
                                                const newText = text.replace(/\s/g, '');
                                                setDigitado(newText);
                                                mudarCor2();
                                            }}/>
                                        <TextInput
                                            style={{paddingBottom: 10}}
                                            placeholder="Digite a senha Nova"
                                            secureTextEntry
                                            value={inputDigitado2}
                                            onChangeText={(text) => {
                                                const newText = text.replace(/\s/g, '');
                                                setDigitado2(newText);
                                                mudarCor2();
                                            }}/>
                                        <TextInput
                                            placeholder="Digite novamente a senha Nova"
                                            secureTextEntry
                                            value={inputDigitado3}
                                            onChangeText={(text) => {
                                                const newText = text.replace(/\s/g, '');
                                                setDigitado3(newText);
                                                mudarCor2();
                                            }}/>
                                        <TouchableOpacity onPress={mudarSenha} disabled={corBotao === '#AFB297'}>
                                            <Text style={[styles.botaoConfirma, { backgroundColor: corBotao }]}>Confirmar</Text>
                                        </TouchableOpacity>
                                        {aviso && <Text style={{ color: 'red', textAlign: 'center'}}>Senha Atual Incorreta</Text>}
                                        {aviso2 && <Text style={{ color: 'red', textAlign: 'center'}}>Senhas Diferentes</Text>}
                                    </View>
                                );
                            case "Excluir conta":
                                return (
                                    <View>
                                        <Text style={{ paddingBottom: 10 }}>Tem certeza que deseja excluir sua conta?</Text>
                                        <TextInput
                                            placeholder="Digite a senha Atual"
                                            secureTextEntry
                                            value={inputDigitado}
                                            onChangeText={(text) => {
                                                const newText = text.replace(/\s/g, '');
                                                mudarCor(newText);
                                            }}/>
                                        <TouchableOpacity onPress={verificarSenha} disabled={corBotao === '#AFB297'}>
                                            <Text style={[styles.botaoConfirma, { backgroundColor: corBotao }]}>Confirmar</Text>
                                        </TouchableOpacity>
                                        {aviso && <Text style={{ color: 'red', textAlign: 'center'}}>Senha Incorreta</Text>}
                                    </View>
                                );
                            default:
                                return <Text>{openSecondModal}</Text>;
                            }
                        })()}
                    </View>
                </View>
            </Modal>
        );
    }
    
    const handleCloseModal = () => {
        onClose(modificado);
        closeModal();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={[styles.fecharText, { color: '#DF6127' }]}>{opcao}</Text>
                    <TouchableOpacity style={styles.fecharButton} onPress={handleCloseModal}>
                        <Text style={styles.fecharText}>X</Text>
                    </TouchableOpacity>
                    {(() => {
                    switch (opcao) {
                        case "Sobre o App":
                            return sobre();
                        case "Termo de Uso":
                            return termo();
                        case "Central de Ajuda":
                            return central();
                        case "Notificações":
                            return notificacoes();
                        case "Meus Dados":
                            return dados();
                        default:
                        return <Text>{opcao}</Text>;
                    }
                    })()}
                    {OpenSecondModal()}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '90%',
        maxHeight: '90%',
        padding: 20,
        borderRadius: 10,
    },
    modalDados: {
        backgroundColor: 'white',
        width: '70%',
        padding: 20,
        borderRadius: 10,
    },
    fecharButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
        zIndex: 100,
    },
    fecharText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
    centralOp: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 2,
        padding: 12,
    },
    input: {
        justifyContent: 'center',
        padding: 5,
    },
    botaoConfirma: {
        marginTop: 20,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '500',
        padding: 15,
        color: 'white',
        borderRadius: 10,
    },
});
