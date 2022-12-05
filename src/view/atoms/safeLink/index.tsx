/**
 * 
 * Safe link component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren} from 'react';
import { Link } from "react-router-dom";
import {Box} from '@mui/material';

// PROPS TYPE
type SafeLinkProps = {
  to: string,
  className?: string,
}

const SafeLink = ({
  to,
  className,
  children,
}: PropsWithChildren<SafeLinkProps>) => (
  <>
    {to ? <Link to={to} className={className}>{children}</Link> :  <Box className={className}>{children}</Box>}
  </>
)

export default SafeLink;