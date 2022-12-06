/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th December, 2022
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
import background from '@/assets/icons/wave.svg';

// API
import {UserGetItem, useLoginMutation} from '@/api/user/user';

// GENERIC IMPORT 
import {Loader, TextField} from '@/view/atoms';
import {FormRow, FormAction} from '@/view/molecules';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {setStorage} from '@/utils/helper';

// LOGIN IMPORT
import schema from '../schema';

// STYLE IMPORT
import useStyles from '../styles';

// LOGINPAGE COMPONENT DECLARE
const Login = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // DECLARE API CALL
    const loginMutation = useLoginMutation();

    // REACT HOOK FORM DECLARE
    const {control, handleSubmit, register, formState: { errors }} = useForm<UserGetItem>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    // STATE DECLARE
    const [isLoading, setLoading] = useState(false);

    // LOGIN FUNCTION
    const onSubmit = (formData: UserGetItem) => {
        console.log("Login formData: ", formData);
        // SHOWING LOADER
        setLoading(true);
        // CALLING API WITH LOGIN DETAILS
        loginMutation.mutate(formData, {
            // ON SUCCESS RESPONSE
            onSuccess: (response) => {
                // IF ERROR COMES
                if (response.code === -1) {
                    setNotification.error();
                } else {
                    // ON SUCCESS, NAVIGATE TO DASHBOARD SCREEN
                    navigate(PATH.DASHBOARD_PATH);  
                    // SETUP TOKEN IN THE BROWSER
                    setStorage("userObject", JSON.stringify(response));
                    setStorage("token", response.token);
                }
                // TURN OFF LOADER
                setLoading(false);
            },
            onError(e: unknown) {
                // TURN OFF LOADER
                setLoading(false);
                setNotification.error(e);
            },
        });  
    };

    // IF API LOADS, TURN ON LOADER
    if (isLoading) return <Loader/>;

    return (
    <Box className={classes.pageContainer} style={{ background: `url(${background}) no-repeat 0 100%` }}>
        <Box className={classes.loginContainer}>
            <FormRow label="Username" isRow spacing={2}>
                <TextField
                    register={register}
                    id="username"
                    name="username"
                    control={control}
                    placeholder="Enter username"
                    errors={errors?.username}
                />
            </FormRow>
            <FormRow label="Password" isRow spacing={2}>
                <TextField
                    type='password'
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