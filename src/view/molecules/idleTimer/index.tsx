/**
 * 
 * Idel timer component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { useState, useEffect } from "react";
import { useIdleTimer } from 'react-idle-timer';
import {useNavigate} from 'react-router-dom';

// GENERIC COMPONENT
import {AlertPopup} from '@/view/molecules';

// UTILS IMPORT 
import {SESSION_TIMEOUT, PROMPT_TIMEOUT} from '@/utils/constants';
import {clearStorage} from '@/utils/helper';

// ROUTER IMPORT
import * as PATH from '@/view/routes/constants';

const IdleTimer = () => {
    // Set timeout values
    // const timeout = 1000 * 60 * 30;
    const timeout = SESSION_TIMEOUT;
    const promptTimeout = PROMPT_TIMEOUT;
    const navigate = useNavigate();
  
    // Modal open state
    const [open, setOpen] = useState(false)
  
    // Time before idle
    const [remaining, setRemaining] = useState(0)
  
    const onPrompt = () => {
      // onPrompt will be called after the timeout value is reached
      // In this case 30 minutes. Here you can open your prompt. 
      // All events are disabled while the prompt is active. 
      // If the user wishes to stay active, call the `reset()` method.
      // You can get the remaining prompt time with the `getRemainingTime()` method,
      setOpen(true)
      setRemaining(promptTimeout)
    }
    
    const onIdle = () => {
      // onIdle will be called after the promptTimeout is reached.
      // In this case 30 seconds. Here you can close your prompt and 
      // perform what ever idle action you want such as log out your user.
      // Events will be rebound as long as `stopOnMount` is not set.
      setOpen(false)
      setRemaining(0);
      logout();
    }
    
    const onActive = () => {
      // onActive will only be called if `reset()` is called while `isPrompted()` 
      // is true. Here you will also want to close your modal and perform
      // any active actions. 
      setOpen(false)
      setRemaining(0)
    }
  
    const { getRemainingTime, isPrompted, activate } = useIdleTimer({
      timeout,
      promptTimeout,
      onPrompt,
      onIdle,
      onActive
    })

    const logout = () => {
      clearStorage();
      navigate(PATH.LOGIN_PATH);
    }
  
    const handleStillHere = () => {
        setOpen(false)
        activate()
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (isPrompted()) {
          setRemaining(Math.ceil(getRemainingTime() / 1000))
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }, [getRemainingTime, isPrompted])
  
    return (
        <AlertPopup 
            isOpen={open}
            title="Session expired" 
            onClose={handleStillHere} 
            onSubmit={handleStillHere}
            submitLabel="Continue.."
            content={`Your session will expiry in ${remaining} seconds, if you wish to extend then click continue.`}
        />
    )
}

export default IdleTimer;
