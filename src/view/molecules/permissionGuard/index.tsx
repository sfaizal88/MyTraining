/**
 * 
 * Permission guard component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

// UTILS IMPORT
import {Permission, useHasPermission} from '@/utils/permission';
import {getStorage, clearStorage} from '@/utils/helper';

// GENERIC COMPONENT
import {PageNotFound} from '@/view/molecules';

// ROUTER IMPORT
import * as PATH from '@/view/routes/constants';

// COMPONENT PROPS
type PermissionGuardProps = {
    permissionkey: Permission;
}

const PermissionGuard = ({
    permissionkey,
    children,
}: PropsWithChildren<PermissionGuardProps>) => {
    // NAVIGATOR
    const navigate = useNavigate();
    const isUserLogged = Boolean(getStorage('token'));
    useEffect(() => {
        if (!isUserLogged) {
            clearStorage();
            navigate(PATH.LOGIN_PATH);
        }
    }, [isUserLogged]);

    return (
    <>
        {useHasPermission(permissionkey) && isUserLogged ? (<>{children}</>) : <PageNotFound/>}
    </>
    )
};

export default PermissionGuard;