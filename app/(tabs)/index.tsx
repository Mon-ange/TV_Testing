import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {StockInForm} from '@/components/StockInForm';
import {StockInForm2} from '@/components/StockInForm2'
import { StockInForm3 } from '@/components/StockInForm3';
import { Text, View } from '@/components/Themed';
import React from 'react'

const msg = 'hello'
export class StockInObject{
  grading!: string | ""
}
export default function TabOneScreen() {
  const [formNumber, setFormNumber] = React.useState(1)
  const [stockInInfo, setStockInInfo] = React.useState(new StockInObject)


  const gotoForm = (formNumber:number, stockInInfo:StockInObject) => {
    setFormNumber(formNumber)
    setStockInInfo(stockInInfo)
  }


  function renderSwitch(formNumber:number){
    switch(formNumber){
      case 1: return <StockInForm stockInInfo={stockInInfo} gotoForm={gotoForm}/>
      case 2: return <StockInForm2 stockInInfo={stockInInfo} gotoForm={gotoForm}/>
      case 3: return <StockInForm3 stockInInfo={stockInInfo} gotoForm={gotoForm} />
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TV Testing Log</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {renderSwitch(formNumber)}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
