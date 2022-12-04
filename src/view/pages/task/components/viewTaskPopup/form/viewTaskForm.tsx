/**
 * 
 * View Task form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import omit from 'lodash/omit';
import {useState} from 'react';
import {AlarmOnOutlined} from '@mui/icons-material';
import {Box, Chip, Typography, AvatarGroup, Avatar, ImageList, ImageListItem} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// UTILS IMPORT 
import {findDuration} from '@/utils/helper';

// STYLE IMPORT
import useStyles from '../styles';

type ViewTaskFormProps = {
  onClose: () => void;
  data: TaskGetItem;
  studentOptions: StudentGetItem[];
  onStudentList: (id: number | null) => void;
};

const ViewTaskForm = ({onClose, data, studentOptions, onStudentList}: ViewTaskFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  return (
    <Box className={classes.root}>
      <Typography className={classes.viewTitle} variant='h6'>{data.title} - <Box component={'span'} className={classes.viewSubtitle}>{data.type}</Box></Typography>
      <Box className={classes.viewDetails}>{data.details}</Box>
      <Box className={classes.viewFooter}>
          <Box
            display='inline-flex' 
            alignItems={'center'}
            flex={1}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onStudentList(data.id || null);
            }}>
            <AvatarGroup max={4}>
              {data.students.map(item => 
                <Avatar alt={studentMap[item].name} sx={{ width: 24, height: 24, fontSize: 12, fontWeight: 600, bgcolor: '#027bb3'}}>{studentMap[item].name[0]}</Avatar>
              )}
            </AvatarGroup>
            <Box component={'span'} className={classes.link} ml={1}>View all students</Box>
          </Box>
          <Box className={classes.viewDuration}>
            <AlarmOnOutlined style={{fontSize: 24, marginRight: '4px'}}/>
            {data.duration.slice(0, -1)} {findDuration(data.duration || '')} timeline</Box>
        </Box>
        <ImageList cols={2}>
            {data.images.map((item, index) => (
              <ImageListItem key={`task-image-${index}`}>
                <img
                  src={`${item}?h=300&auto=format`}
                  srcSet={`${item}?h=300&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
      <PopupFooter>
        <FormAction
            showSubmit
            submitLabel="Close"
            onSubmit={onClose}
        />
      </PopupFooter>
    </Box>
  );
};

export default ViewTaskForm;
