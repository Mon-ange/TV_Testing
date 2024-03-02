import { View } from "./Themed"
import { VStack,Checkbox,Card,CheckboxLabel, CheckboxIndicator, CheckboxIcon, CheckIcon, TextareaInput, Input, InputField, HStack, Modal, ModalContent, ModalCloseButton, ModalHeader, ModalBackdrop, ModalBody, ModalFooter, ArrowRightIcon, Select, SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon, SelectPortal, SelectBackdrop, Icon, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectContent, ArrowLeftIcon, Box } from '@gluestack-ui/themed';
import {Text,Button,ButtonIcon,ButtonText} from '@gluestack-ui/themed';
import React, {useState, useEffect} from "react";
import { CLRSelector, RMASelector } from "./IssueSelector";
import { AreasHinter } from "./AreasHinter";
import { AreasCheckbox } from "./AreasCheckbox";
import { StockInObject } from "@/app/(tabs)";


interface StockInFormNextFunction {
    gotoForm: (data: number, stockInInfo:StockInObject) => void;
    stockInInfo: StockInObject;
}

export const StockInForm3: React.FC<StockInFormNextFunction> =({gotoForm,stockInInfo}) => {

    const [comment, setComment] = React.useState('')
    //const [issueType, setIssueType] = React.useState('')
    function renderSwitch(issueType:string){
        switch(issueType){
            case "clr": return (
                <Card>
                    <CLRSelector/>
                </Card>
                )
            case "rma": return (
                <Card>
                    <RMASelector/>
                </Card>)
        }
    }
    const formSubmit = (page: number) => {
        gotoForm(page, stockInInfo)
    }

    return(
        <View>
            <VStack>
                <AreasHinter/>
                {renderSwitch(stockInInfo.grading)}
                <AreasCheckbox/>
            </VStack>
            

            
            
            
            
            
            









            <HStack margin={10} space="lg">
                <Button
                onPress={() => formSubmit(2)}
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