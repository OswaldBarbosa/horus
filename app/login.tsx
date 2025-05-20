import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const users = [
        { email: "lorenzon@email.com", password: "123456" },
        { email: "admin@email.com", password: "admin123" },
    ];

    function handleLogin() {
        const userExists = users.find(user => user.email === email && user.password === password);

        if (userExists) {
            Toast.show({
                type: "success",
                text1: "Login realizado com sucesso!",
            });
            setTimeout(() => router.push("/(tabs)/home"), 1000);
        } else {
            Toast.show({
                type: "error",
                text1: "Credenciais inválidas",
                text2: "Verifique seu email e senha",
            });
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/logo.png")} />
            <Text style={styles.title}>Entrar agora</Text>
            <Text style={styles.subtitle}>Preencha os campos para acessar o aplicativo</Text>

            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />

            <Text style={styles.resetPassword}>Lembrar senha</Text>

            <Button title="Entrar" style={styles.button} onPress={handleLogin} />

            <Text style={styles.dontHaveAccount}>
                Não possui uma conta?{" "}
                <Text style={styles.register} onPress={() => router.push("/register")}>
                    Registre-se
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    image: {
        height: 150,
        alignSelf: "center",
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 20
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        color: "#0057C9",
        marginBottom: 20
    },
    resetPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: "#0057C9",
        marginBottom: 20
    },
    button: {
        marginBottom: 20
    },
    dontHaveAccount: {
        textAlign: "right"
    },
    register: {
        fontWeight: "500",
        color: "#0057C9"
    }
});
