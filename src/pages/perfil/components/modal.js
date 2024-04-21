import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';

export default function ModalPerfil({ visible, opcao, closeModal }) {
    const sobre = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{textAlign: 'justify'}}> O KiFome é o resultado de um projeto inovador desenvolvido por um grupo de estudantes universitários comprometidos com a criação de soluções práticas e sustentáveis para o dia a dia.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}> Idealizado por Diego Oliveira Rebouças, Felipe Castelo Hernandes, Isabella Nepomucena dos Santos, Lincon da Silva Ferreira, Ricardo Yudi Takahashi Pimentel, Rita de Cássia dos Santos Lopes e Vitor Hugo Navarro Libano, com menção honrosa para Gustavo Junior dos Santos, este aplicativo culinário surge como uma resposta às necessidades contemporâneas de uma alimentação mais consciente e acessível.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}> Partindo da premissa de que a tecnologia pode ser uma aliada na busca por um estilo de vida mais sustentável, o KiFome foi concebido para facilitar a preparação de refeições utilizando apenas os ingredientes disponíveis nas casas dos usuários. Esta abordagem não apenas reduz o desperdício de alimentos, mas também torna a culinária mais inclusiva e econômica.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}> A iniciativa dos autores do KiFome vai além de oferecer uma simples coleção de receitas. O aplicativo visa criar uma comunidade engajada em compartilhar experiências, avaliações e dicas culinárias, promovendo uma cultura de colaboração e aprendizado mútuo.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}> Com a implementação planejada de uma Inteligência Artificial treinada com as melhores receitas, o KiFome está preparado para revolucionar a maneira como as pessoas cozinham em casa. Os usuários terão acesso a um vasto repertório de pratos de qualidade, além de dicas personalizadas para aprimorar suas habilidades culinárias.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}> O KiFome é mais do que um aplicativo culinário; é uma ferramenta que combina tradição e inovação, tornando a arte da culinária mais acessível, prazerosa e, acima de tudo, sustentável no século XXI.</Text>
        </ScrollView>
    );

    const termo = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{ fontWeight:'bold' }}> 1. Aceitação dos Termos de Uso:</Text>
            <Text style={{ textAlign: 'justify' }}>Ao acessar ou utilizar o aplicativo KiFome, você concorda em cumprir estes Termos de Uso, bem como todas as políticas e diretrizes incorporadas por referência. Se você não concordar com estes Termos de Uso, não utilize o aplicativo KiFome.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 2. Cadastro e Conta de Usuário:</Text>
            <Text style={{ textAlign: 'justify'}}>Para acessar determinadas funcionalidades do KiFome, você pode ser solicitado a criar uma conta de usuário. Ao se cadastrar, você concorda em fornecer informações precisas, completas e atualizadas, e em manter a confidencialidade de suas credenciais de login.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 3. Uso do Aplicativo:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome destina-se ao uso pessoal e não comercial. Você concorda em usar o aplicativo apenas para os fins permitidos por estes Termos de Uso e todas as leis, regras e regulamentos aplicáveis.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 4. Sistema de Recompensas e Moedas Virtuais:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome oferece um sistema de recompensas e moedas virtuais para incentivar a interação dos usuários. Ao participar do sistema de recompensas, você concorda em seguir as diretrizes estabelecidas pelo aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 5. Grupo Temáticos e Interação:</Text>
            <Text style={{ textAlign: 'justify'}}>Os usuários podem criar e participar de grupos temáticos no KiFome para compartilhar receitas e dicas culinárias. Ao interagir em grupos, você concorda em respeitar as normas de conduta estabelecidas pelo aplicativo e pela comunidade.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 6. Receitas Premium e Monetização:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome oferece receitas premium e opções de assinatura para melhorar a experiência do usuário. Ao acessar conteúdo premium, você concorda em cumprir os termos de pagamento e as políticas de assinatura do aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 7. Feedback e Atualizações:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome valoriza o feedback dos usuários para melhorar continuamente a plataforma. Ao enviar feedback, você concede ao KiFome o direito de usar suas sugestões para aprimorar o aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 8. Propriedade Intelectual:</Text>
            <Text style={{ textAlign: 'justify'}}>Todos os direitos de propriedade intelectual relacionados ao KiFome pertencem aos seus desenvolvedores. Você concorda em respeitar todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual associados ao aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 9. Alterações nos Termos de Uso:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso contínuo do aplicativo após tais alterações constitui sua aceitação dos Termos de Uso revisados.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 10. Conduta dos Usuários:</Text>
            <Text style={{ textAlign: 'justify'}}>O usuário concorda que não irá publicar conteúdo ofensivo, incluindo, mas não se limitando a, fotos no perfil ou em receitas, comentários, mensagens ou qualquer outra forma de comunicação que seja difamatória, obscena, pornográfica, racialmente, etnicamente ou de outra forma objetável.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 11. Encerramento da Conta:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome pode encerrar ou suspender sua conta, ou restringir seu acesso ao aplicativo, se você violar estes Termos de Uso ou se o aplicativo não estiver mais disponível.</Text>
            <Text style={{ fontWeight:'100', fontSize: 2 }}> 12. Venda da Alma:</Text>
            <Text style={{ fontWeight:'100', fontSize: 2, textAlign: 'justify'}}>O usuário ao concordar com esse termo de uso terá a alma sobre a posse dos desevolvedores do aplicativo.</Text>
        </ScrollView>
    );

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.fecharText}>{opcao}</Text>
                   <TouchableOpacity style={styles.fecharButton} onPress={closeModal}>
                        <Text style={styles.fecharText}>X</Text>
                    </TouchableOpacity>
                    {opcao === "Sobre o App" ? (
                        sobre()
                    ) : opcao === "Termo de Uso" ? (
                        termo()
                    ) : (
                        <Text>{opcao}</Text>
                    )}
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
        height: '90%',
        padding: 20,
        borderRadius: 10,
    },
    fecharButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
        zIndex: 100,
    },
    fecharText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
});
