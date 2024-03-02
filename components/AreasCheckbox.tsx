import { Card ,Checkbox,CheckboxIcon,CheckboxLabel,CheckboxIndicator,CheckIcon} from '@gluestack-ui/themed'
import React from 'react'

export const AreasCheckbox: React.FC = () => {
    return (
        <Card>
            <Checkbox  value={'1'}  >
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>1</CheckboxLabel>
                    
                    

            </Checkbox>
            <Checkbox value={'2'}>
                <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                <CheckboxLabel>2</CheckboxLabel>

            </Checkbox>
            
        </Card>
    )
}