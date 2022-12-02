/**
 * 
 * Page title / section title component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useState, MouseEvent} from 'react';
import {IconButton, Box, Menu, MenuItem} from '@mui/material';
import {MoreVert} from '@mui/icons-material';

// COSTANTS
import {optionsList} from './options';

// STYLE IMPORT
import useStyles from './styles';

// PROPS TYPE
type OptionsProps = {
    itemsKey: string[];
    itemsHandler: Record<string, () => void>
}

const Options = ({
    itemsKey,
    itemsHandler,
}: OptionsProps) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const options = optionsList.filter(item => itemsKey.includes(item.id));

  return (
    <Box textAlign={'right'} mr={1} flex={1}
        onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            setAnchorEl(event.currentTarget);
        }}>
        <IconButton onClick={() => setIsOpen(true)}>
            <MoreVert />
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            PaperProps={{
            style: {
                width: '150px',
            },
            }}
        >
            {options.map((option) => (
            <MenuItem 
                key={option.id} 
                onClick={itemsHandler[option.id]} 
                className={clsx(option.id === 'delete' && classes.delete, classes.menuItem)}>
                {option.icon}&nbsp;&nbsp;{option.label}
            </MenuItem>
            ))}
        </Menu>
    </Box>
  )
}

export default Options;