import { View } from '@/components/Themed';
import { Checkbox, Text, CheckboxLabel, CheckboxIndicator, CheckboxIcon, CheckIcon, Card, Heading, RadioGroup, Radio, RadioIndicator, RadioIcon, CircleIcon, RadioLabel, SelectTrigger, Select, SelectInput, SelectIcon, SelectPortal, SelectContent, SelectItem, Icon, ChevronDownIcon, SelectBackdrop, FormControlLabel, FormControl, FormControlLabelText, SelectDragIndicator, SelectDragIndicatorWrapper, AddIcon, ArrowRightIcon, Center } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import React from 'react';
import {
    Button,
    ButtonText,
    ButtonIcon,
  } from "@gluestack-ui/themed"
import { StockInObject } from '@/app/(tabs)';
  
interface StockInFormNextFunction {
    gotoForm: (data: number, stockInInfo:StockInObject) => void;
    stockInInfo: StockInObject
}

export const StockInForm: React.FC<StockInFormNextFunction> =  ({gotoForm,stockInInfo}) => {
    const [values, setValues] = React.useState("Other")
    const formSubmit = (page: number) => {
        gotoForm(page, stockInInfo)
    }
    return (
        <View>
            <VStack>
                <Card margin={3}>
                <Checkbox justifyContent={"space-between"} value={'ECOM'} w="$40">
                    <CheckboxLabel>ECOM</CheckboxLabel>
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox>
                </Card>

                <Card margin={3}>
                    <VStack space="sm">
                        <Heading size="sm">Testing Technicians</Heading>

                        <RadioGroup value={values} onChange={setValues} >
                            <VStack space="sm">
                            <Radio value="SL" size="md" isInvalid={false} isDisabled={false}>
                                <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon}  />
                                </RadioIndicator>
                                <RadioLabel>SL</RadioLabel>
                            </Radio>

                            <Radio value="AN" size="md" isInvalid={false} isDisabled={false}>
                                <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon}  />
                                </RadioIndicator>
                                <RadioLabel>AN</RadioLabel>
                            </Radio>

                            <Radio value="MC" size="md" isInvalid={false} isDisabled={false}>
                                <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon}  />
                                </RadioIndicator>
                                <RadioLabel>MC</RadioLabel>
                            </Radio>

                            <Radio value="Other" size="md" isInvalid={false} isDisabled={false} >
                                <RadioIndicator mr="$2">
                                <RadioIcon as={CircleIcon}  />
                                </RadioIndicator>
                                <RadioLabel>Other</RadioLabel>
                            </Radio>
                            </VStack>
                        </RadioGroup>
                        
                    </VStack>
                </Card>

                <Card margin={3}>
                <Checkbox justifyContent={"space-between"} value={'No OriginalPackaging'} w="$80" >
                    <CheckboxLabel>No Original Packaging</CheckboxLabel>
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox>
                <Checkbox justifyContent={"space-between"} value={'No OriginalLabel'} w="$80" >
                    <CheckboxLabel>Original Openbox Label Missing/Mistake</CheckboxLabel>
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox>
                </Card>



            </VStack>

            <VStack margin={10}>
                <Button
                onPress={() => formSubmit(2)}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                >
                <ButtonText>Next </ButtonText>
                <ButtonIcon as={ArrowRightIcon} />
                </Button>
            </VStack>
        </View>
        
    );
}

