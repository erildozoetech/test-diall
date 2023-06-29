import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  doc,
  getDoc,
  onSnapshot,
  query,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import db from './src/services/firebase';
import { useEffect, useState } from 'react';

export default function App() {

  const [data, setData] = useState<any>({});

  const handleGetData = async () => {
    const docRef = doc(db, 'test', "S8irV0Bga23XbErU2BE7");

    const docSnap = await getDoc(docRef);

    setData(docSnap.data());
    console.log('docSnap', docSnap.data())
  }

  useEffect(() => {
    handleGetData();
  }, [])
  return (
    <View style={styles.container}>
      <Text>Test getting data from firestore</Text>
      <Text>{data?.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
