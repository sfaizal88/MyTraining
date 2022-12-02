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
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
      setAnchorEl(null);
    };
    const options = optionsList.filter(item => itemsKey.includes(item.id));

  return (
    <Box textAlign={'right'} mr={1}>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVert />
        </IconButton>
        <Menu
            id="long-menu"
            MenuListProps={{
            'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
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