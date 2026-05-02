import { View, Text, StyleSheet } from "react-native";

export default function agregarReceta() {
    return (
        <view style = {styles.container}>
            <text style = {styles.text}>➕ Agregar Receta</text>
        </view>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontWeight: 'bold' },
});