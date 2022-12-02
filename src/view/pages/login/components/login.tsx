/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

// ROUTER IMPORT
import * as PATH from '@/view/routes/constants';

// API
import {UserGetItem} from '@/api/user/user';

// GENERIC VIEW IMPORT 
import {Loader, TextField} from '@/view/atoms';
import {FormRow, FormAction} from '@/view/molecules';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../styles';

// LOGINPAGE COMPONENT DECLARE
const Login = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    const {control, handleSubmit, register, formState: { errors }} = useForm<UserGetItem>({
        mode: 'onChange',
        // resolver: yupResolver(schema(categoryList)),
    });

    // STATE DECLARE
    const [isLoading, setLoading] = useState(false);

    const onSubmit = (formData: UserGetItem) => {
        navigate(PATH.DASHBOARD_PATH);
    };

    // IF API LOADS, TURN ON LOADER
    if (isLoading) return <Loader/>;

    return (
    <Box className={classes.pageContainer}>
        <Box className={classes.loginContainer}>
            <FormRow label="Username" isRow>
                <TextField
                    register={register}
                    id="username"
                    name="username"
                    control={control}
                    placeholder="Enter username"
                    errors={errors?.username}
                />
            </FormRow>
            <FormRow label="Password" isRow>
                <TextField
                    register={register}
                    id="password"
                    name="password"
                    control={control}
                    placeholder="Enter password"
                    errors={errors?.password}
                />
            </FormRow>
            <FormAction
                isFullWidth
                showSubmit
                submitBtnType={'button'}
                submitLabel='Login'
                onSubmit={handleSubmit(onSubmit)}
            />
        </Box>
    </Box>
    )
}

export default Login;