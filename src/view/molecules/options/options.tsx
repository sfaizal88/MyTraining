import {ReactElement} from 'react';
import {EditOutlined, DeleteOutlineOutlined} from '@mui/icons-material';

type OptionsList = {
    id: string;
    label: string;
    icon: ReactElement;
}

export const optionsList: OptionsList[] = [
    {
        id: 'edit',
        label: 'Edit',
        icon: <EditOutlined style={{fontSize: 24}}/>
    },
    {
        id: 'delete',
        label: 'Delete',
        icon: <DeleteOutlineOutlined style={{fontSize: 24, color: '#e74c3c'}}/>
    }
]