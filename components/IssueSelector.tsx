import { Select, SelectTrigger, SelectInput, SelectIcon, ChevronDownIcon, SelectPortal, SelectBackdrop, Icon, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, SelectContent } from '@gluestack-ui/themed';
import React from 'react'

export const CLRSelector: React.FC = () => {
    return (
        <Select>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon >
                    <Icon as={ChevronDownIcon} />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Line(s)" value="line" />
                    <SelectItem label="Chip(s)" value="chip" />
                    <SelectItem label="Scratch(s)&Dent(s)" value="scratch" />
                    <SelectItem label="Cracks" value="cracks" />
                    <SelectItem label="Bubble(s)" value="bubble" />
                    <SelectItem label="Bleed(s)" value="bleed" />
                    <SelectItem label="Dead pixel(s)" value="pixel" />
                    <SelectItem label="Blemish(s)" value="blemish" />
                    <SelectItem label="Brighter patch(s)" value="bpatch" />
                    <SelectItem label="Darker patch(s)" value="dpatch" />
                    <SelectItem label="Scuff mark(s)" value="scuff_marks" />
                    <SelectItem label="Shadow Bar" value="shadowbar" />
                    <SelectItem label="Ripple(s)" value="ripple" />
                    <SelectItem label="Flashing" value="flashing" />
                    <SelectItem label="Others" value="others" />
                </SelectContent>
            </SelectPortal>
        </Select>
    )
}

export const RMASelector: React.FC = () => {
    return (
        <Select>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon >
                    <Icon as={ChevronDownIcon} />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="No display" value="nodisplay" />
                    <SelectItem label="No power" value="nopower" />
                    <SelectItem label="No sound" value="nosound" />
                    <SelectItem label="Others" value="others" />
                </SelectContent>
            </SelectPortal>
        </Select>
    )
}