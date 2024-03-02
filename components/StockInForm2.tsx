import { View } from "./Themed"
import { VStack,Checkbox,Card,CheckboxLabel, CheckboxIndicator, CheckboxIcon, CheckIcon, TextareaInput, Input, InputField, HStack, Modal, ModalContent, ModalCloseButton, ModalHeader, ModalBackdrop, ModalBody, ModalFooter, ArrowRightIcon, Select, SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon, SelectPortal, SelectBackdrop, Icon, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectContent, ArrowLeftIcon } from '@gluestack-ui/themed';
import {Text,Button,ButtonIcon,ButtonText} from '@gluestack-ui/themed';
import React, {useState, useEffect} from "react";
import { BarcodeSettings, BarcodeType, Camera, CameraView} from "expo-camera/next"
import { BarcodeScanner} from "./BarcodeScanner";
import { StockInObject } from "@/app/(tabs)";


interface StockInFormNextFunction {
    gotoForm: (data: number, stockInInfo:StockInObject) => void;
    stockInInfo: StockInObject;
}

export const StockInForm2: React.FC<StockInFormNextFunction> =({gotoForm, stockInInfo}) => {
    const [visible, setVisible] = React.useState(false)
    const [scanningField, setScanningField] = React.useState('')
    const [costcoNumber, setCostcoNumber] = React.useState('')
    const [skuNumber, setSkuNumber] = React.useState('')
    const [serialNumber, setSerialNumber] = React.useState('')
    const [grading, setGrading] = React.useState('')

    const openBarCodeScanner = (field: string) => {
        setVisible(true)
        setScanningField(field)
    }

    const formSubmit = (page: number) => {
        alert(JSON.stringify(costcoNumber));
        alert(JSON.stringify(grading))
        stockInInfo.grading = grading; 
        gotoForm(page, stockInInfo)
    }

    const submit = (value: string) => {
        if(scanningField === "costco"){
            setCostcoNumber(value)
        }
        if(scanningField === "sku"){
            setSkuNumber(value)
        }
        if(scanningField === "serial"){
            setSerialNumber(value)
        }
        //alert(scanningField);
        setVisible(false)
    }

    return (
        <View>
            <Modal size="lg" isOpen={visible} onClose={() => setVisible(false)}>
                <ModalBackdrop />
                <ModalContent>
                <ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <BarcodeScanner onSubmit={submit}></BarcodeScanner>
                </ModalBody>
                <ModalFooter />
                </ModalContent>
            </Modal>
            <VStack>
                <Card margin={3}>
                    <Text color="$text500" lineHeight="$xs">
                        Costco Label Number
                    </Text>
                    <Input
                    variant="underlined"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField value={costcoNumber} onChangeText={setCostcoNumber} placeholder="Enter" onPressIn={() => openBarCodeScanner("costco")}/>
                    </Input>
                </Card>

                <Card margin = {3}>
                    <Text color="$text500" lineHeight="$xs">
                        SKU Number
                    </Text>
                    <Input
                    variant="underlined"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField value={skuNumber} placeholder="Enter" onPressIn={() => openBarCodeScanner("sku")} />
                    </Input>
                </Card>

                <Card margin = {3}>
                    <Text color="$text500" lineHeight="$xs">
                        Serial Number
                    </Text>
                    <Input
                    variant="underlined"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField value={serialNumber} placeholder="Enter" onPressIn={() => openBarCodeScanner("serial") }/>
                    </Input>
                </Card>
            

                <Card margin={3}>
                    <Text color="$text500" lineHeight="$xs" margin={3}>
                        Grading
                    </Text>    
                    <Select selectedValue={grading} onValueChange={setGrading}>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Select option" />
                            <SelectIcon >
                                <Icon as ={ChevronDownIcon} />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="A Grade" value="a" />
                                <SelectItem label="Clearance" value="clr" />
                                <SelectItem label="Defective" value="rma"/>
                                <SelectItem label="Cracked Screen/Sticker" value="sticker" />
                                <SelectItem label="Cracked Screen/Others" value="others" />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Card>

                <Card margin={3}>
                    <Text color="$text500" lineHeight="$xs" margin={3}>
                        Picture Uploaded
                    </Text>

                </Card>
            </VStack>


            <HStack margin={10} space="lg">
                <Button
                onPress={() => formSubmit(1)}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                width={"$1/3"}
                >
                <ButtonIcon as={ArrowLeftIcon} />
                <ButtonText>Previous </ButtonText>
                </Button>
                <Text w="$20"  />
                <Button
                onPress={() => formSubmit(3)}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                width={"$1/3"}
                >
                
                <ButtonText>Next </ButtonText>
                <ButtonIcon as={ArrowRightIcon} />
                </Button>
            </HStack>
        </View>
    )
}